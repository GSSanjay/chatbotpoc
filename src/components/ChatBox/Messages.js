import Message from './Message';
import PropTypes from 'prop-types';

const Messages = ({ messageData }) => {
  return (
    <div className='box'>
      {messageData &&
        messageData.map((message, i) => {
          return <Message key={i} messageData={message} />;
        })}
    </div>
  );
};

Messages.propTypes = {
  messageData: PropTypes.array.isRequired
};

export default Messages;
