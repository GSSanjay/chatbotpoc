import React, { useState } from 'react';
import NamePopUp from './NamePopUp';
import BotIcon from '../../assets/amigoIcon.png';
import ChatBox from '../ChatBox/index';
const ChatBotIcon = () => {
  const [namePopUp, setNamePopUp] = useState(false);
  const [name, setName] = useState('');
  const [displayChat, setDisplayChat] = useState(false);

  const styles = {
    chatIcon: {
      right: 5,
      position: 'fixed',
      bottom: 5
    }
  };

  return (
    <div style={styles.chatIcon}>
      {namePopUp && !displayChat ? (
        <NamePopUp
          namePopUp={namePopUp}
          setDisplayChat={setDisplayChat}
          setName={setName}
          name={name}
        />
      ) : null}
      {displayChat ? (
        <ChatBox name={name} />
      ) : (
        <div>
          <img
            onClick={() => setNamePopUp(true)}
            src={BotIcon}
            style={{
              width: 70
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBotIcon;
