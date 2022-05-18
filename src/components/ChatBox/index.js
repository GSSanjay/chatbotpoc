import React, { useEffect, useRef, useState } from 'react';
import './chatbox.css';
import Messages from './Messages';
import sendButton from '../../assets/send.png';
import { Context } from './../../context/Context';
import SpeechRecorder from './SpeechRecorder';
import PropTypes from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import getData from '../../api/getData';

const ChatBot = ({ name, setDisplayChat }) => {
  const [messageData, setMessageData] = useState([]);
  //lottie animation
  const [loading, setLoading] = useState(false);

  //input messages
  const [currentMessage, setCurrentMessage] = useState('');
  const [completeMessage, setCompleteMessage] = useState('');

  //audio message
  const [audioInput, setAudioInput] = useState('');

  //audio response
  const { speak, voices, cancel } = useSpeechSynthesis();
  const [audio, setAudio] = useState(false);
  const [audioResponse, setAudioResponse] = useState('');

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
    setLoading(true);
    const data = {
      message
    };
    getData(data).then((responseData) => {
      setLoading(false);
      responseData && setMessageData((messageData) => [...messageData, responseData]);
      responseData && setAudioResponse(responseData?.audioOutput);
      setAudio(true);
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
    completeMessage && handleAllMessages(completeMessage);
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
    setCompleteMessage(item);
  };

  useEffect(() => {
    submitButtonRef.current.click();
  }, [completeMessage]);

  useEffect(() => {
    handleMessageOnSubmit(greetingMessage);
  }, []);

  useEffect(() => {
    if (!audio) {
      cancel();
      setAudio(true);
    }
  }, [audioResponse]);

  return (
    <div className='container'>
      <div className='topbar'>
        <ChevronLeftIcon
          className='exit-chat'
          onClick={() => {
            setDisplayChat(false);
            cancel();
          }}
        />
        <span className='chatboxt-name'>Amigo</span>
      </div>
      <Context.Provider value={{ sendOptionData, sendItemData }}>
        <Messages messageData={messageData} loading={loading} />
      </Context.Provider>
      <div className='typing-area'>
        {audio
          ? (speak({
              text: audioResponse,
              //25 27 31 33
              voice: voices[31]
            }),
            setAudio(false))
          : null}
        <div className='input-field'>
          <input
            type='text'
            placeholder='Ask anything'
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
  name: PropTypes.string,
  setDisplayChat: PropTypes.func
};

export default ChatBot;
