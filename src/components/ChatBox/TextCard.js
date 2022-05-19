import React from 'react';
import { PropTypes } from 'prop-types';

const TextCard = ({ text, isBot }) => {
  return (
    <div>
      {isBot ? (
        <div className='textcard'>
          <p>{text}</p>
        </div>
      ) : (
        <div className='textcard right-textcard'>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
  isBot: PropTypes.bool
};

export default TextCard;
