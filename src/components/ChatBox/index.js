import React, { useState } from 'react';
import './chatbox.css';
import Messages from './Messages';
import sendButton from './sendbutton.svg';

const ChatBot = () => {
  const [responses, setResponses] = useState([]);

  const [currentMessage, setCurrentMessage] = useState('');

  let responseArr = [
    {
      text: 'Hello, How are you? Big text Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      options: null,
      items: null,
      isBot: true
    }
  ];

  const handleMessageSubmit = () => {
    setTimeout(() => {
      setResponses((responses) => [...responses, ...responseArr]);
    }, 1000);
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false
    };
    if (event.key == 'Enter') {
      setResponses((responses) => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage('');
    }
  };

  return (
    <div className='container'>
      <Messages messages={responses} />
      <div className='typing-area'>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Enter Message'
            required
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handleSubmit}
          />
        </div>
        <button onClick={handleSubmit}>
          <img src={sendButton} alt='Send Button' />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
