import React from 'react';
import PropTypes from 'prop-types';
import botImg from './bot.svg';
import userImg from './user.svg';
import TextCard from './TextCard';

const Message = ({ message }) => {
  return (
    <div>
      {message.isBot ? (
        <div className='card-container'>
          <div className='icon-text'>
            <div className='icon'>
              <img className='botImg' src={botImg} alt='Bot Image' />
            </div>
            {message?.text ? <TextCard text={message.text} /> : null}
          </div>
        </div>
      ) : (
        <div className='card-container'>
          {message?.text ? (
            <div className='icon-text right'>
              <TextCard text={message.text} />
              <div className='icon'>
                <img className='userImg' src={userImg} alt='User Image' />
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

Message.propTypes = {
  align: PropTypes.string,
  message: PropTypes.object,
  sendDataToParent: PropTypes.func
};

export default Message;
