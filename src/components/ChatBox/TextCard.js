import React from 'react';
import { PropTypes } from 'prop-types';

const TextCard = ({ text, isBot, action }) => {
  return (
    <div>
      {isBot ? (
        action ? (
          <div className='textcard'>
            {text?.split(',').map((e, i) => (
              <p key={i}>{e}</p>
            ))}
          </div>
        ) : (
          <div className='textcard'>
            <p>{text}</p>
          </div>
        )
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
  isBot: PropTypes.bool,
  action: PropTypes.string
};

export default TextCard;
