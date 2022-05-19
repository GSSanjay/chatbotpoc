import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Context } from '../../context/Context';

const ItemsCard = ({ items }) => {
  const { sendItemData } = useContext(Context);
  return (
    <div>
      <div className='itemscard'>
        {items &&
          items?.map((item, i) => {
            return (
              <div className='itemcard' key={i}>
                <img src={item?.url} alt='' />
                <h6 className='item-title'>{item?.name}</h6>
                <h6 className='item-price'>${item?.price}</h6>
                <button onClick={() => sendItemData(item?.name)}>Add </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

ItemsCard.propTypes = {
  items: PropTypes.array
};

export default ItemsCard;
