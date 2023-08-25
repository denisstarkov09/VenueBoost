import React, { useEffect, useMemo, useState } from 'react';
import { Country } from 'country-state-city'
import { useFormik } from 'formik';
import * as yup from "yup";
import { Button, Spin } from 'antd';
import { MdOutlineAdd, MdOutlineClose } from 'react-icons/md';
import './index.css';
import FormText from '../../../components/FormText';
import FormTextInput from '../../../components/FormTextInput';
import { useNavigate, useParams } from 'react-router-dom';
import { NotificationManager } from "react-notifications";
import CustomSelect from '../../../components/CustomSelect';
import { isEmpty } from '../../../utils/common';
import { useSelector } from 'react-redux';
import { getPaymentConfig, getPaymentMethods, payWithCard } from '../../../redux/actions/contactsales';
import PricingItem from '../../../components/Pricing/PricingItem';
import AddonItem from '../../../components/Pricing/AddonItem';
import AddCardModal from './add-card';
import CardItem from '../../../components/Pricing/CardItem';

const ChoosePlanPay = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const restaurant = useSelector(state => state.contactsales.restaurant)
  const contact_sales = useSelector(state => state.contactsales.contact_sales)

  const [pricingPlans, setPricingPlans] = useState([]);
  const [addons, setAddons] = useState([]);
  const [plan, setPlan] = useState(null);
  const [selected_addons, setSelectedAddons] = useState([]);
  const [payment_methods, setPaymentMethods] = useState([]);
  const [payment_method_id, setPaymentMethodId] = useState(null);

  const [isOrderSumm, setIsOrderSumm] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const total_price = useMemo(() => {
    if (plan != null) {
      let price = plan.mode == 'monthly' ? parseInt(plan.monthly_cost) : parseInt(plan.yearly_cost);
      selected_addons.forEach(item => {
        price = price + parseInt(item.price);
      });
      return price;
    }
    return 0;
  }, [plan, selected_addons]);

  useEffect(() => {
    if (restaurant != null) {
      if (restaurant?.status == 'not_verified') {
        navigate(`/${token}/apply/complete-registration/verify-email`);
      }
      else if (restaurant?.status == 'not_payment_setup') {
        loadPaymentConfig();
        loadPaymentMethods(restaurant.id);
      }
      else {
        navigate('/');
      }
    }
    else {
      navigate(`/${token}/apply/complete-registration`);
    }
  }, [restaurant, contact_sales])

  const loadPaymentConfig = () => {
    getPaymentConfig()
      .then((data) => {
        let tmp = data?.pricing_plans || [];
        tmp = tmp.map(item => ({ ...item, mode: 'monthly' }));
        setPricingPlans(tmp);
        setAddons(data?.addons || []);
      })
      .catch((error) => {
      });
  }

  const loadPaymentMethods = (restaurant_id) => {
    getPaymentMethods({ restaurant_id: restaurant_id })
      .then((data) => {
        console.log('')
        setPaymentMethods(data?.payment_methods?.data || []);
      })
      .catch((error) => {
      });
  }

  const onClearSelections = () => {
    setPlan(null);
    setSelectedAddons([]);
    setIsOrderSumm(false);
  }

  const onGoSumm = () => {
    if (plan?.id == null) {
      return NotificationManager.info('Please select a plan', 'Info', 3000);
    }
    setIsOrderSumm(true);
  }

  const onSubmit = () => {
    if (plan?.id == null) {
      return NotificationManager.info('Please select a plan', 'Info', 3000);
    }
    if (payment_method_id == null) {
      return NotificationManager.info('Please select a card', 'Info', 3000);
    }
    let mode = null;
    const index = pricingPlans.findIndex(item => item.id == plan?.id);
    if (index != -1) {
      mode = pricingPlans[index].mode;
    }

    setLoading(true);
    payWithCard({
      restaurant_id: restaurant.id,
      payment_method_id: payment_method_id,
      plan_id: plan?.id,
      mode: mode,
      addons: selected_addons.map(item => item.id)
    })
      .then((data) => {
        setLoading(false);
        NotificationManager.success("Payment is success successfully, You can login to system from now", 'Success', 3000);
        navigate(`/`);
      })
      .catch((error) => {
        setLoading(false);
        console.log('onSaveCard error', error);
        const message = error.message || 'Something went wrong!';
        NotificationManager.error(message, 'Info', 3000);
      });
  }

  const renderPlansPrices = () => {
    if (isOrderSumm) {
      return (
        <div className='relative started-form'>
          <p className={'mt-8 mb-2'}>Pricing Plan</p>
          <hr />
          <div className=' flex flex-col justify-center w-full'>
            <table className='w-full'>
              <tr style={{ borderBottomWidth: 1, borderBottomColor: '#eee', borderBottomStyle: 'solid' }}>
                <td width={'20%'} className=' text-22 text-black font-normal'>{plan?.name}</td>
                <td width={'20%'} className=' text-20 text-black font-normal'>{plan?.mode?.toUpperCase()}</td>
                <td width={'20%'} className=' text-20 text-black font-normal'>${plan?.mode == 'monthly' ? plan?.monthly_cost : plan?.yearly_cost}</td>
                <td width={'40%'} className=' text-20 text-black font-normal'>{plan?.features}</td>
              </tr>
            </table>
          </div>
          <p className={'mt-8 mb-2'}>Addons</p>
          <hr />
          <div className=' flex flex-col justify-center w-full'>
            <table className='w-full'>
              {
                selected_addons.map((addon, index) =>
                  <tr style={{ height: 56, borderBottomWidth: 1, borderBottomColor: '#eee', borderBottomStyle: 'solid' }}>
                    <td width={60}>{index + 1}</td>
                    <td width={'30%'} className=' text-22 text-black font-normal'>{addon.name}</td>
                    <td width={'60%'} className=' text-20 text-black font-normal'>${addon.price}</td>
                    <td>
                      <Button
                        shape='circle'
                        type='primary'
                        icon={<MdOutlineClose size={20} color='#fff' />}
                        className='flex flex-col justify-center items-center '
                        style={{ backgroundColor: '#aaa' }}
                        onClick={() => {
                          let tmp = selected_addons.slice(0);
                          tmp.splice(index, 1);
                          setSelectedAddons(tmp);
                        }}
                      />
                    </td>
                  </tr>
                )
              }
            </table>
          </div>
          <p className={'mt-8 mb-2'}>Total Price</p>
          <hr />
          <div className='flex justify-start w-full mt-6'>
            <div className='flex flex-row justify-center items-center'>
              <span className=' text-34 text-black font-semibold'>${total_price}</span>
            </div>
          </div>
          <div className='flex flex-row w-full justify-start items-center mt-4 mb-3'>
            <p className={' mr-5'}>Payment Method</p>
            <Button
              shape='circle'
              type='primary'
              icon={<MdOutlineAdd size={20} color='#fff' />}
              className='flex flex-col justify-center items-center'
              style={{ backgroundColor: '#aaa' }}
              onClick={() => {
                setShowCardModal(true);
              }}
            />
          </div>
          <hr />
          <div className='grid md:grid-cols-4 grid-cols-1  flex-col justify-center mt-4 bg-white rounded-3xl gap-2 md:gap-4'>
            {
              payment_methods.map(item =>
                <CardItem key={item.id} data={item}
                  checked={payment_method_id == item.id}
                  onSelect={() => {
                    setPaymentMethodId(item.id);
                  }}
                />
              )
            }
          </div>
          <div className='flex justify-end w-full mt-8'>
            <button className='secondary mt-5 w-max px-10' onClick={onClearSelections}>Clear selections</button>
            <button className='primary mt-5 w-max px-10' onClick={onSubmit}>Confirm and Pay</button>
          </div>
        </div>
      )
    }

    return (
      <div className='relative started-form'>
        <p className={'mt-8 mb-2'}>Pricing Plans</p>
        <hr />
        <div className=' flex flex-col justify-center w-full'>
          <div className='inline-grid md:grid-cols-4 grid-cols-1  flex-col justify-center mt-8 bg-white rounded-3xl gap-2 md:gap-4'>
            {
              pricingPlans.map(item =>
                <PricingItem key={item.id} data={item}
                  isSelected={plan?.id == item.id}
                  onSelect={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setPlan(item);
                  }}
                  onChangeMode={(mode) => {
                    let tmp = pricingPlans || [];
                    const index = tmp.findIndex(t => t.id == item.id);
                    tmp[index].mode = mode;
                    setPricingPlans([...tmp]);
                  }}
                />
              )
            }
          </div>
        </div>
        <p className={'mt-8 mb-2'}>Addons</p>
        <hr />
        <div className='flex flex-row flex-wrap mt-8 bg-white gap-3 md:gap-4'>
          {
            addons.map(addon =>
              <AddonItem key={addon.id} data={addon}
                isAdded={selected_addons.findIndex(item => item.id == addon.id) != -1}
                onChange={(checked) => {
                  let tmp = selected_addons.slice(0);
                  const index = tmp.findIndex(item => item.id == addon.id);
                  if (index != -1) {
                    tmp.splice(index, 1);
                  }
                  else {
                    tmp.push(addon);
                  }
                  setSelectedAddons(tmp);
                }}
              />
            )
          }
        </div>
        <div className='flex justify-end w-full'>
          <button className='primary mt-5 w-max px-10' onClick={onGoSumm}>Next</button>
        </div>
      </div>
    )
  }

  return (
    <div className={'align-col-middle view-terms my-10'}>
      <Spin spinning={loading}>
        <div className='w-full rounded-4xl p-14 gap-10'>
          <div className='flex flex-col justify-center pr-10 mb-12'>
            <FormText
              customClass='md:text-5xl text-3xl color-black font-semibold'
              // customStyle={{lineHeight: '108px'}}
              title="Choose plan and pay"
            />
            <FormText
              type='normal'
              customClass='color-black mt-5'
              title="Please fill below info."
            />
          </div>
          {renderPlansPrices()}
        </div >
      </Spin>
      {
        showCardModal && <AddCardModal
          restaurant_id={restaurant?.id}
          showModal={showCardModal}
          onClose={() => { setShowCardModal(false) }}
          onCardSaved={(data) => {
            setPaymentMethodId(data.id);
            setPaymentMethods(pre => [data, ...pre])
          }}
        />
      }
    </div >
  );
};

export default ChoosePlanPay;
