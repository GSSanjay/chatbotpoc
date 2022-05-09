import Message from './Message';
import PropTypes from 'prop-types';
import ScrollableFeed from 'react-scrollable-feed';

const Messages = ({ messageData }) => {
  return (
    <div className='box'>
      <ScrollableFeed>
        {messageData &&
          messageData.map((message, i) => {
            return <Message key={i} messageData={message} />;
          })}
      </ScrollableFeed>
    </div>
  );
};

Messages.propTypes = {
  messageData: PropTypes.array.isRequired
};

export default Messages;
