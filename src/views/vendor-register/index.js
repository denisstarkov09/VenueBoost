import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { verifyLink, setContactSales, setRestaurantData } from '../../redux/actions/contactsales';
import { useDispatch } from 'react-redux';


const VendorRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams();
  const [linkValid, setLinkValid] = useState(null);

  useEffect(() => {
    checkVerifyLink();
  }, [token])

  const checkVerifyLink = () => {
    verifyLink({ token })
      .then((data) => {
        setLinkValid('valid');
        if (data?.restaurants == null) {
          dispatch(setContactSales(data?.contact_sale));
          navigate(`/${token}/apply/complete-registration`);
        }
        else {
          dispatch(setRestaurantData(data?.restaurants));
          if (data?.restaurants?.status == 'not_verified') {
            navigate(`/${token}/apply/complete-registration/verify-email`);
          }
          else if (data?.restaurants?.status == 'not_payment_setup') {
            navigate(`/${token}/apply/complete-registration/choose-plan-and-pay`);
          }
          else {
            navigate('/');
          }
        }
      })
      .catch((error) => {
        setLinkValid('invalid');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
  }

  if (linkValid == null) {
    return null;
  }

  if (linkValid == 'invalid') {
    return (
      <div className={'align-col-middle view-terms my-10'}>
        <h5>Invalid Link</h5>
      </div>
    )
  }

  return (
    <Outlet />
  );
};

export default VendorRegister;
