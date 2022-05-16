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
            <div className='itemcard' key={item?.structValue?.fields?.id?.numberValue}>
              <img src={item?.structValue?.fields?.url?.stringValue} alt='Item' />
              <h6 className='item-title'>{item?.structValue?.fields?.name?.stringValue}</h6>
              <h6 className='item-price'>${item?.structValue?.fields?.price?.stringValue}</h6>
              <button onClick={() => sendItemData(item?.structValue?.fields?.name?.stringValue)}>
                Add
              </button>
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
