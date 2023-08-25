import React, { useEffect, useMemo } from 'react';
import { Switch } from 'antd';
import './index.css';
import Svg_check from '../../assets/svgs/checkbox.svg'
import { isEmpty } from '../../utils/common';

const PricingItem = ({ data, isSelected = false, onSelect, onChangeMode }) => {
  const features = useMemo(() => {
    if (!isEmpty(data?.features)) {
      return data?.features.split(',');
    }
    return [];
  }, [data])

  return (
    <div onClick={onSelect} className={`rounded-24 p-4 md:p-6 max-w-[340px] cursor-pointer ${isSelected ? 'bg-white border border-[#22f]' : 'bg-gray2'}`} style={{ maxWidth: 340 }}>
      <p className={'text-20 text-black1  font-semibold'}>{data?.name}</p>
      <div className={'flex flex-row justify-center items-center mt-9 mb-5 gap-3'}>
        <div className='color-dark text-[40px] font-semibold' >${data?.mode == 'yearly' ? data?.yearly_cost : data?.monthly_cost} </div>
        <Switch checkedChildren="Monthly" unCheckedChildren="Yearly" checked={data?.mode == 'yearly' ? false : true}
          onChange={(checked, event) => {
            event.preventDefault();
            event.stopPropagation();
            onChangeMode(checked == true ? 'monthly' : 'yearly')
          }}
        />
      </div>
      <p className={'text-18 text-gray1 font-normal mb-6'}>{data?.description}</p>
      {
        features.map((item, index) =>
          <div key={index} className={'flex justify-start items-center gap-3 mb-4'}>
            <img src={Svg_check} className={' w-6 h-6 object-contain'} />
            <div className='color-dark text-16 font-normal' > {item} </div>
          </div>
        )
      }
    </div>
  );
};

export default PricingItem;
