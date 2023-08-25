import React, { useEffect, useMemo } from 'react';

const CardItem = ({ data, checked, onSelect }) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onSelect(data);
      }}
      className={` flex flex-col justify-start bg-gray-400 items-start p-4 border rounded-xl ${checked ? 'border-[#1454ff]' : 'border-[#efefef]'} `}>
      <div className={' text-14 text-black font-normal'}>{data.metadata != null ? data.metadata.name : ''}</div>
      {data.card != null && <div className={'text-15 text-black font-semibold mt-3'}>**** **** **** {data.card.last4}</div>}
      {data.card != null && (
        <div className={'flex flex-row justify-start items-center w-full mt-3'}>
          <div className={'text-14 text-black font-normal'}>
            Expire: {data.card.exp_month + '/' + data.card.exp_year}
          </div>
          <div className={' pl-3 text-14 text-black font-normal'} style={{ paddingLeft: 16, textAlign: 'right' }}>CVV: {data.metadata != null ? data.metadata.cvc : ''}</div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
