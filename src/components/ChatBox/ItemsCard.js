import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Context } from '../../context/Context';

const ItemsCard = ({ items }) => {
  const { sendItemData } = useContext(Context);
  return (
    <div className='itemscard'>
      {items &&
        items?.map((item) => {
          return (
            <div className='itemcard' key={item.id}>
              <img src={item.url} alt='Item' />
              <h6 className='item-title'>{item.name}</h6>
              <h6 className='item-price'>${item.price}</h6>
              <button onClick={() => sendItemData(item.name)}>Add</button>
            </div>
          );
        })}
    </div>
  );
};

ItemsCard.propTypes = {
  items: PropTypes.array
};

export default ItemsCard;
