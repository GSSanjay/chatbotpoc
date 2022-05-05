import React from 'react';
import { PropTypes } from 'prop-types';

const TextCard = ({ text }) => {
  return (
    <div className='textcard'>
      <p>{text}</p>
    </div>
  );
};

TextCard.propTypes = {
  text: PropTypes.string
};

export default TextCard;
