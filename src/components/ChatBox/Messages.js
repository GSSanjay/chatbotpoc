import Message from './Message';
import PropTypes from 'prop-types';

const Messages = ({ messages, sendDataToParent }) => {
  return (
    <div className='box'>
      {messages &&
        messages.map((message, i) => {
          return <Message key={i} message={message} sendDataToParent={sendDataToParent} />;
        })}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.any,
  sendDataToParent: PropTypes.func
};

export default Messages;
