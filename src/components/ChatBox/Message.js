import React from 'react';
import PropTypes from 'prop-types';
import botImg from '../../assets/bot-icon.png';
import userImg from '../../assets/user-icon.png';
import TextCard from './TextCard';
import OptionsCard from './OptionsCard';
import ItemsCard from './ItemsCard';

const Message = ({ messageData }) => {
  return (
    <div>
      {messageData.isBot ? (
        <div className='card-container'>
          {messageData?.text ? (
            <div className='icon-text'>
              <div className='icon'>
                <img className='botImg' src={botImg} alt='Bot Image' />
              </div>
              <TextCard
                text={messageData?.text}
                isBot={messageData?.isBot}
                action={messageData?.action}
              />
            </div>
          ) : null}
          {messageData?.options && messageData?.options?.length !== 0 ? (
            <OptionsCard options={messageData?.options} />
          ) : null}
          <div className='card'>
            {messageData?.items && messageData?.items?.length !== 0 ? (
              <ItemsCard items={messageData?.items} />
            ) : null}
          </div>
        </div>
      ) : (
        <div className='card-container'>
          {messageData?.text ? (
            <div className='icon-text right'>
              <TextCard text={messageData?.text} isBot={messageData?.isBot} />
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
  messageData: PropTypes.object.isRequired
};

export default Message;
