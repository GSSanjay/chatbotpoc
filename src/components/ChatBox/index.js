import React, { useEffect, useRef, useState } from 'react';
import './chatbox.css';
import Messages from './Messages';
import sendButton from './send.png';
import { Context } from './../../context/Context';
import SpeechRecorder from './SpeechRecorder';
import PropTypes from 'prop-types';
import axios from 'axios';

const ChatBot = ({ name }) => {
  const [messageData, setMessageData] = useState([]);
  //input messages
  const [currentMessage, setCurrentMessage] = useState('');
  const [completeMessage, setCompleteMessage] = useState('');

  //audio message
  const [audioInput, setAudioInput] = useState('');

  let greetings = '';
  let today = new Date();
  let curHr = today.getHours();

  if (curHr < 12) {
    greetings = 'Good Morning';
  } else if (curHr < 18) {
    greetings = 'Good Afternoon';
  } else {
    greetings = 'Good Evening';
  }

  let greetingMessage = `Hi ${name}, ${greetings}`;

  const handleMessageOnSubmit = (message) => {
    const data = {
      message
    };

    axios
      .post('https://expresschatapiapp.herokuapp.com/chatbot', data)
      .then((response) => {
        const responseData = {
          text:
            response.data.message.responseMessages[0].payload.fields.message.stringValue != ''
              ? response.data.message.responseMessages[0].payload.fields.message.stringValue
              : "Sorry, I can't get it. Can you please repeat once?",
          options:
            response.data.message.responseMessages[0].payload.fields.options.listValue.values,
          items:
            response.data.message.responseMessages[0].payload.fields.items.listValue.values[0]
              ?.listValue?.values,
          isBot: true
        };

        setMessageData((messageData) => [...messageData, responseData]);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const handleMessageOnChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  let handleAllMessages = (inputMessage) => {
    const message = {
      text: inputMessage,
      isBot: false
    };
    setMessageData((messageData) => [...messageData, message]);
    handleMessageOnSubmit(message.text);
  };

  const submitAction = () => {
    setCompleteMessage(currentMessage);
    handleAllMessages(completeMessage);
    setCurrentMessage('');
  };

  const handleSpeechInput = () => {
    handleAllMessages(audioInput);
    setAudioInput('');
  };

  const handleSubmitOnEnter = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      submitAction();
    }
  };

  const handleSubmitOnButtonClick = () => {
    submitAction();
  };

  const submitButtonRef = useRef();

  const sendOptionData = (option) => {
    setCompleteMessage(option);
  };

  const sendItemData = (item) => {
    console.log(item);
    setCompleteMessage(item);
  };

  useEffect(() => {
    submitButtonRef.current.click();
  }, [completeMessage]);

  useEffect(() => {
    handleAllMessages(greetingMessage);
  }, []);

  return (
    <div className='container'>
      <Context.Provider value={{ sendOptionData, sendItemData }}>
        <Messages messageData={messageData} />
      </Context.Provider>
      <div className='typing-area'>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Enter Message'
            required
            value={currentMessage}
            onChange={handleMessageOnChange}
            onKeyDown={handleSubmitOnEnter}
          />
        </div>
        <button onClick={handleSubmitOnButtonClick} ref={submitButtonRef}>
          <img src={sendButton} alt='Send Button' />
        </button>
        <SpeechRecorder
          handleSpeechInput={handleSpeechInput}
          audioInput={audioInput}
          setAudioInput={setAudioInput}
        />
      </div>
    </div>
  );
};

ChatBot.propTypes = {
  name: PropTypes.string
};

export default ChatBot;
