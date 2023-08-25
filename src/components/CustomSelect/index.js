import React, { useEffect, useState, useRef } from 'react';
import { isEmpty } from '../../utils/common';
import './index.css';
import { AiOutlineClose } from 'react-icons/ai'

const CustomSelect = ({ values, value, isMultiple = false, className, placeholder, style, renderRow, renderValue, handleChange, onRemoveItem }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const itemList = () => {
    if (values == null) return null;
    const list = values.map((item, index) => {
      return (
        <div
          onClick={() => {
            handleChange(item, index);
          }}
          className="text-dropdown-item flex_between"
          key={index}>
          {
            renderRow != null ?
              renderRow(item, index)
              :
              <p>{item}</p>
          }
        </div>
      );
    });

    return <div className="text-dropdown-items"> {list} </div>;
  };

  return (
    <div
      ref={ref}
      className={`text-dropdown ${isOpen ? 'active' : ''} ${isMultiple ? 'multi' : 'single'} ${className}`}
      onClick={() => {
        setOpen(!isOpen);
      }}
      style={style}>
      <div className="text-drop-btn">
        {
          (((isMultiple != true && isEmpty(value)) || (isMultiple == true && (value == null || value.length == 0))) && !isEmpty(placeholder)) ?
            <span className={'placeholder'}>{placeholder}</span>
            :
            (
              isMultiple != true ? (
                renderValue != null ?
                  renderValue(value)
                  :
                  <span>{value}</span>
              )
                :
                <div className='align-row-start w100 flex_wrap'>
                  {
                    value.map((v, index) =>
                      <div key={index} className='align-middle tag'>
                        {
                          renderValue != null ?
                            renderValue(v)
                            :
                            <span>{v}</span>
                        }
                        <span className='close-btn' onClick={() => onRemoveItem(v)} ><AiOutlineClose size={18} color='#333' /></span>
                      </div>
                    )
                  }
                </div>
            )
        }
      </div>
      {itemList()}
    </div>
  );
};

export default CustomSelect;
