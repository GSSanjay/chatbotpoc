import Message from './Message';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import LoadingGif from '../../assets/loading-animation.json';
import React, { useEffect, useRef } from 'react';

const Messages = ({ messageData, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [loading, messageData]);

  return (
    <div className='box'>
      <div>
        {messageData &&
          messageData.map((message, i) => {
            return <Message key={i} messageData={message} />;
          })}
      </div>
      {loading ? (
        <Lottie
          animationData={LoadingGif}
          style={{ width: 200, heigth: 200 }}
          autoplay={true}
          loop={true}
        />
      ) : null}
      <div ref={messagesEndRef} />
    </div>
  );
};

Messages.propTypes = {
  messageData: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

export default Messages;
