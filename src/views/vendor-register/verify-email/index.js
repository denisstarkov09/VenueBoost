import React, { useEffect, useState } from 'react';
import FormText from '../../../components/FormText';
import FormTextInput from '../../../components/FormTextInput';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyEmail } from '../../../redux/actions/contactsales';
import { NotificationManager } from "react-notifications";
import { isEmpty } from '../../../utils/common';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    doVerifyEmail();
  }, [token])

  const doVerifyEmail = () => {
    setLoading(true);
    verifyEmail({ token })
      .then((data) => {
        setLoading(false);
        setHasError(false);
        setTimeout(() => {
          navigate(`/${data?.contact_token}/apply/complete-registration/choose-plan-and-pay`);
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        setHasError(true);
        setErrMsg(error?.message || 'Invalid link')
      });
  }

  const onGoDashboard = () => {
    navigate('/');
  }

  return (
    <div className={'align-col-middle view-terms my-10'}>
      <div className='w-full rounded-4xl p-14 gap-10'>
        <div className='relative started-form'>
          <div className='flex justify-center w-full '>
            {
              loading ?
                <Spin />
                :
                hasError == false ?
                  <div className='flex flex-col justify-center items-center'>
                    <p className=' text-black my-5 text-28  text-center'>Your email address has been verified successfully</p>
                  </div>
                  :
                  hasError == true &&
                  <div className='flex flex-col justify-center items-center'>
                    <p className=' text-red-600 my-5 text-28  text-center'>{errMsg}</p>
                    <button className={`  hover:bg-slate-400 primary text-white mt-5 w-[200px] px-10`} onClick={onGoDashboard}>Go Dashboard</button>
                  </div>
            }
          </div>
        </div>
      </div >
    </div >
  );
};

export default VerifyEmail;
