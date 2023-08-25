import React, { useEffect, useState } from 'react';
import FormText from '../../../components/FormText';
import FormTextInput from '../../../components/FormTextInput';
import { useNavigate, useParams } from 'react-router-dom';
import { resendEmailVerify } from '../../../redux/actions/contactsales';
import { NotificationManager } from "react-notifications";
import { isEmpty } from '../../../utils/common';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

const VendorNotVerified = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [canResend, setCanResend] = useState(true);

  const restaurant = useSelector(state => state.contactsales.restaurant)
  const contact_sales = useSelector(state => state.contactsales.contact_sales)

  useEffect(() => {
    if (restaurant != null) {
      if (restaurant?.status == 'not_verified') {
      }
      else if (restaurant?.status == 'not_payment_setup') {
        navigate(`/${token}/apply/complete-registration/choose-plan-and-pay`);
      }
      else {
        navigate('/');
      }
    }
    else {
      navigate(`/${token}/apply/complete-registration`);
    }
  }, [restaurant, contact_sales])

  const onResend = () => {
    setLoading(true);
    resendEmailVerify({ restaurant_id: restaurant?.id })
      .then(() => {
        setLoading(false);
        setCanResend(false);
        setTimeout(() => {
          setCanResend(true);
        }, 20000);
        NotificationManager.success("We've sent an email again", 'Success', 3000);
      })
      .catch((error) => {
        setLoading(false);
        NotificationManager.error((error.message || 'Something went wrong!'), 'Error', 3000);
      });
  }

  return (
    <div className={'align-col-middle view-terms my-10'}>
      <div className='w-full rounded-4xl p-14 gap-10'>
        <div className='flex flex-col justify-center pr-10 mb-12'>
          <FormText
            customClass='md:text-5xl text-3xl color-black font-semibold text-center'
            // customStyle={{lineHeight: '108px'}}
            title="Verify Your Email Address"
          />
          <FormText
            type='normal'
            customClass='color-black mt-5  text-center'
            title="We've sent a verification link to your email"
          />
        </div>
        <div className='relative started-form'>
          <div className='flex justify-center w-full'>
            {
              loading ?
                <Spin />
                :
                <button disabled={!canResend} className={`  hover:bg-slate-400 ${canResend ? 'primary ' : 'bg-slate-400'} text-white mt-5 w-[200px] px-10`} onClick={onResend}>Resend</button>
            }
          </div>
        </div>
      </div >
    </div >
  );
};

export default VendorNotVerified;
