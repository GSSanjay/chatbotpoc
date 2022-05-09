import React, { useEffect, useRef, useState } from 'react';
import './chatbox.css';
import Messages from './Messages';
import sendButton from './send.png';
import { Context } from './../../context/Context';

const ChatBot = () => {
  const [messageData, setMessageData] = useState([]);
  //input messages
  const [currentMessage, setCurrentMessage] = useState('');
  const [completeMessage, setCompleteMessage] = useState('');

  //mock data
  let responseArr = [
    {
      text: 'Hello, How are you? ',
      options: ['wine', 'show wine'],
      items: null,
      isBot: true
    },
    {
      text: 'Show me Wine',
      options: null,
      items: null,
      isBot: false
    },
    {
      text: 'Here you go: ',
      options: ['you can choose one', 'choose two'],
      items: [
        {
          name: 'Wine 1',
          url: 'https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?s=170667a',
          price: '$32.9'
        },
        {
          name: 'Wine 2',
          url: 'https://media.istockphoto.com/photos/red-wine-bottle-picture-id987571978?k=20&m=987571978&s=612x612&w=0&h=zGIYQaDvaDeuolW_AHecpQEhzEsPSDYC-7fBiJSak10=',
          price: '$42.9'
        },
        {
          name: 'Wine 3',
          url: 'https://thumbs.dreamstime.com/b/red-wine-bottle-6737662.jpg',
          price: '$52.9'
        }
      ],
      isBot: true
    }
  ];

  const handleMessageOnSubmit = () => {
    setTimeout(() => {
      setMessageData((messageData) => [...messageData, ...responseArr]);
    }, 1000);
  };

  const handleMessageOnChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const submitAction = () => {
    setCompleteMessage(currentMessage);
    const message = {
      text: completeMessage,
      isBot: false
    };
    setMessageData((messageData) => [...messageData, message]);
    handleMessageOnSubmit(message.text);
    setCurrentMessage('');
  };

  const handleSubmitOnEnter = (event) => {
    if (event.key === 'Enter') {
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
      </div>
    </div>
  );
};

export default ChatBot;
