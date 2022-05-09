// import React, { useEffect, useRef, useState } from 'react';
// import './chatbox.css';
// import Messages from './Messages';
// import sendButton from './send.png';
// import { Context } from './../../context/Context';

// const ChatBot = ({name}) => {
//   const [messageData, setMessageData] = useState([]);
//   //input messages
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [completeMessage, setCompleteMessage] = useState('');

//   let greetings = '';
//   let today = new Date();
//   let curHr = today.getHours(); 

//   if (curHr < 12) {
//     greetings = 'Good Morning';
//   } else if (curHr < 18) {
//     greetings = 'Good Afternoon';
//   } else {
//     greetings = 'Good Evening';
//   }

//   let greetingMessage = `Hi ${name}, ${greetings}`;
//   //mock data
//   let responseArr = [
//     {
//       text: 'Hello, How are you? ',
//       options: ['wine', 'show wine'],
//       items: null,
//       isBot: true
//     },
//     {
//       text: 'Show me Wine',
//       options: null,
//       items: null,
//       isBot: false
//     },
//     {
//       text: 'Here you go: ',
//       options: ['you can choose one', 'choose two'],
//       items: [
//         {
//           name: 'Wine 1',
//           url: 'https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?s=170667a',
//           price: '$32.9'
//         },
//         {
//           name: 'Wine 2',
//           url: 'https://media.istockphoto.com/photos/red-wine-bottle-picture-id987571978?k=20&m=987571978&s=612x612&w=0&h=zGIYQaDvaDeuolW_AHecpQEhzEsPSDYC-7fBiJSak10=',
//           price: '$42.9'
//         },
//         {
//           name: 'Wine 3',
//           url: 'https://thumbs.dreamstime.com/b/red-wine-bottle-6737662.jpg',
//           price: '$52.9'
//         }
//       ],
//       isBot: true
//     }
//   ];

//   useEffect(() => {
//     handleAllMessages(greetingMessage);
//   }, []);


//   let handleAllMessages = (inputMessage) => {
//     const message = {
//       text: inputMessage,
//       isBot: false
//     };
//     setMessageData((messageData) => [...messageData, message]);
//     handleMessageOnSubmit(message.text);
//   };

//   const handleSubmit = () => {
//     setCompleteMessage(currentMessage);
//     handleAllMessages(completeMessage);
//     setCurrentMessage('');
//     setCompleteMessage('');
//   };

//   const handleMessageOnSubmit = () => {
//     setTimeout(() => {
//       setMessageData((messageData) => [...messageData, ...responseArr]);
//     }, 1000);
//   };

//   const handleMessageOnChange = (event) => {
//     setCurrentMessage(event.target.value);
//   };

//   // const submitAction = () => {
//   //   setCompleteMessage(currentMessage);
//   //   const message = {
//   //     text: completeMessage,
//   //     isBot: false
//   //   };
//   //   setMessageData((messageData) => [...messageData, message]);
//   //   handleMessageOnSubmit(message.text);
//   //   setCurrentMessage('');
//   // };

//   // const handleSubmitOnEnter = (event) => {
//   //   if (event.key === 'Enter') {
//   //     submitAction();
//   //   }
//   // };

//   // const handleSubmitOnButtonClick = () => {
//   //   submitAction();
//   // };

//   const submitButtonRef = useRef();

//   const sendOptionData = (option) => {
//     setCompleteMessage(option);
//   };

//   const sendItemData = (item) => {
//     setCompleteMessage(item);
//   };

//   useEffect(() => {
//     submitButtonRef.current.click();
//   }, [completeMessage]);

//   return (
//     <div className='container'>
//       <Context.Provider value={{ sendOptionData, sendItemData }}>
//         <Messages messageData={messageData} />
//       </Context.Provider>
//       <div className='typing-area'>
//         <div className='input-field'>
//           <input
//             type='text'
//             placeholder='Enter Message'
//             required
//             value={currentMessage}
//             onChange={handleMessageOnChange}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter' && e.target.value.trim()) {
//                 handleSubmit();
//               }
//             }}
//           />
//         </div>
//         <button onClick={handleSubmit} ref={submitButtonRef} disabled={(e) => !e.target.value.trim()}>
//           <img src={sendButton} alt='Send Button' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;

import React, { useEffect, useRef, useState } from 'react';
import './chatbox.css';
import Messages from './Messages';
import sendButton from './send.png';
import { Context } from './../../context/Context';

const ChatBot = ({name}) => {
  const [messageData, setMessageData] = useState([]);
  //input messages
  const [currentMessage, setCurrentMessage] = useState('');
  const [completeMessage, setCompleteMessage] = useState('');

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
    handleAllMessages(completeMessage)
    setCurrentMessage('');
  };

  const handleSubmitOnEnter = (event) => {
    if (event.key === 'Enter'  && event.target.value.trim()) {
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
        <button onClick={handleSubmitOnButtonClick} ref={submitButtonRef} >
          <img src={sendButton} alt='Send Button' />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;