import React, { useEffect, useMemo } from 'react';
import { Switch } from 'antd';
import './index.css';

const AddonItem = ({ data, isAdded = false, onChange }) => {
  return (
    <div className={`rounded-24 p-4 md:p-6 max-w-[340px] cursor-pointer bg-gray2 `} style={{ maxWidth: 340 }}>
      <p className={'text-22 text-black1  font-semibold'}>{data?.name}</p>
      <div className={'flex flex-row justify-between items-center mt-4   gap-3'}>
        <div className='color-dark text-[18px] font-semibold' >${data?.price} </div>
        <Switch checkedChildren="Added" unCheckedChildren="Add" checked={isAdded == true}
          onChange={(checked, event) => {
            event.preventDefault();
            event.stopPropagation();
            onChange(checked)
          }}
        />
      </div>
    </div>
  );
};

export default AddonItem;
