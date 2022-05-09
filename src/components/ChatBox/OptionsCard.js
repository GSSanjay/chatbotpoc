import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Context } from '../../context/Context';

const OptionsCard = ({ options }) => {
  const { sendOptionData } = useContext(Context);
  return (
    <div>
      <ul className='options'>
        {options &&
          options.map((option, i) => {
            return (
              <li className='option' key={i} onClick={() => sendOptionData(option)}>
                {option}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

OptionsCard.propTypes = {
  options: PropTypes.array
};

export default OptionsCard;
