import React, { useEffect, useState } from 'react';
import { Country } from 'country-state-city'
import { useFormik } from 'formik';
import * as yup from "yup";
import './index.css';
import FormText from '../../../components/FormText';
import FormTextInput from '../../../components/FormTextInput';
import { useNavigate, useParams } from 'react-router-dom';
import { getRegisterConfig, registerRestaurant, setRestaurantData } from '../../../redux/actions/contactsales';
import { NotificationManager } from "react-notifications";
import CustomSelect from '../../../components/CustomSelect';
import { isEmpty } from '../../../utils/common';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ImgUpload from '../../../components/ImgUpload';

const validator = yup.object().shape({
  first_name: yup.string().trim()
    .required('First name is required')
    .max(72, 'Max exceeded')
    .min(2, 'Min not met'),
  last_name: yup.string().trim()
    .required('Last name is required')
    .max(72, 'Max exceeded')
    .min(2, 'Min not met'),
  email: yup.string().trim()
    .required('Email is required')
    .max(72, 'Max exceeded')
    .min(5, 'Min not met')
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
  confirm_email: yup.string().oneOf([yup.ref('email'), null], 'Email is not matched'),
  password: yup.string().trim()
    .required('Password is required')
    .max(24, 'Max exceeded')
    .min(8, 'Min not met'),
  confirm_pass: yup.string().oneOf([yup.ref('password'), null], 'Password is not matched'),

  restaurant_name: yup.string().trim()
    .required('First name is required')
    .max(72, 'Max exceeded')
    .min(2, 'Min not met'),
  restaurant_email: yup.string().trim()
    .required('Email is required')
    .max(72, 'Max exceeded')
    .min(5, 'Min not met')
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email'),
  phone: yup.string().trim()
    .required('Phone number is required')
    .max(15, 'Max exceeded')
    .min(5, 'Min not met')
    .matches(/^([2-9]\d{2}[2-9]\d{2}\d{4}){1}$/, 'Invalid US number'),
  website: yup.string().trim()
    .matches(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid Website'),
  cuisine_types: yup.array().required().min(1, 'Please select cuisine types'),
  amenities: yup.array().required().min(1, 'Please select amenities'),
  pricing: yup.string().trim().required('Pricing Range is required'),

  address_line1: yup.string().trim()
    .required('Address Line 1 is required')
    .max(250, 'Max exceeded')
    .min(6, 'Min not met'),
  address_line2: yup.string().trim(),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  postcode: yup.string().required('Postal code is required'),
});

const VendorRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();

  const restaurant = useSelector(state => state.contactsales.restaurant)
  const contact_sales = useSelector(state => state.contactsales.contact_sales)

  const [cuisine_types, setCuisineTypes] = useState([{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }]);
  const [amenities, setAmenities] = useState([{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }]);
  const [states, setStates] = useState([{ id: 1, name: 'State 1' }, { id: 2, name: 'State 2' }]);
  const [cities, setCities] = useState([{ id: 1, states_id: 1, name: 'City 1' }, { id: 2, states_id: 2, name: 'City 2' }]);
  const [state_id, setStateId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logo_image, setLogoImage] = useState(null);
  const [cover_image, setCoverImage] = useState(null);

  const formikProps = useFormik({
    initialValues: { first_name: '', last_name: '', email: '', cuisine_types: [], amenities: [] },
    validationSchema: validator,
    onSubmit: (values) => onSubmit(values),
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false
  })

  useEffect(() => {
    if (restaurant != null) {
      if (restaurant?.status == 'not_verified') {
        navigate(`/${token}/apply/complete-registration/verify-email`);
      }
      else if (restaurant?.status == 'not_payment_setup') {
        navigate(`/${token}/apply/complete-registration/choose-plan-and-pay`);
      }
      else {
        navigate('/');
      }
    }
    else {
      loadRegisterConfig();
    }
  }, [restaurant, contact_sales])

  useEffect(() => {
    if (contact_sales) {
      formikProps.setFieldValue('restaurant_name', contact_sales?.restaurant_name);
      formikProps.setFieldValue('restaurant_email', contact_sales?.email);
      formikProps.setFieldValue('phone', contact_sales?.mobile);
      formikProps.setFieldValue('state', states.find(item => item.name == contact_sales?.restaurant_state));
      formikProps.setFieldValue('city', contact_sales?.restaurant_city);
      formikProps.setFieldValue('postcode', contact_sales?.restaurant_zipcode);
    }
  }, [contact_sales, states])

  const loadRegisterConfig = () => {
    getRegisterConfig()
      .then((data) => {
        setCuisineTypes(data?.cuisine_types || []);
        setAmenities(data?.amenities || []);
        setStates(data?.states || []);
        setCities(data?.cities || []);
      })
      .catch((error) => {
      });
  }

  const onSubmit = (values) => {
    window.scrollTo(0, 0);

    const payload = {
      contact_id: contact_sales?.id,
      ...values
    }
    if (logo_image?.type == 'file' && logo_image?.url != null) {
      let tmp = logo_image.url.split(',');
      if (tmp.length > 1) {
        payload.logo_image = tmp[1];
      }
    }
    else {
      return NotificationManager.info('Please upload a Logo', 'Warn', 3000);
    }

    if (cover_image?.type == 'file' && cover_image?.url != null) {
      let tmp = cover_image.url.split(',');
      if (tmp.length > 1) {
        payload.cover_image = tmp[1];
      }
    }

    setLoading(true);
    registerRestaurant(payload)
      .then((data) => {
        setLoading(false);
        dispatch(setRestaurantData(data?.restaurant))
        NotificationManager.success("Restaurant has been registered successfully", 'Success', 3000);
        navigate(`/${token}/apply/complete-registration/verify-email`);
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
            customClass='md:text-5xl text-3xl color-black font-semibold'
            // customStyle={{lineHeight: '108px'}}
            title="Restaurant Registration"
          />
          <FormText
            type='normal'
            customClass='color-black mt-5'
            title="Please fill below info."
          />
        </div>
        <Spin spinning={loading} >
          <div className='relative started-form'>
            <p className={'mb-2'}>Owner Details</p>
            <hr />
            <div className='grid md:grid-cols-2 grid-cols-1 flex-col mt-8 bg-white rounded-3xl gap-3 md:gap-6'>
              <FormTextInput
                placeholder='First Name'
                value={formikProps.values.first_name}
                error={formikProps.errors.first_name}
                onChange={(e) => { formikProps.setFieldValue('first_name', e.target.value) }}
              />
              <FormTextInput
                placeholder='Last Name'
                value={formikProps.values.last_name}
                error={formikProps.errors.last_name}
                onChange={(e) => { formikProps.setFieldValue('last_name', e.target.value) }}
              />
              <FormTextInput
                placeholder='Email'
                type={'email'}
                value={formikProps.values.email}
                error={formikProps.errors.email}
                onChange={(e) => { formikProps.setFieldValue('email', e.target.value) }}
              />
            </div>
            <p className={'mt-8 mb-2'}>Login Details</p>
            <hr />
            <div className='grid md:grid-cols-2 grid-cols-1 flex-col mt-8 bg-white rounded-3xl gap-3 md:gap-6'>
              <FormTextInput
                placeholder='Email'
                type={'email'}
                value={formikProps.values.email}
                error={formikProps.errors.email}
                disabled={true}
                onChange={(e) => { formikProps.setFieldValue('email', e.target.value) }}
              />
              <FormTextInput
                placeholder='Confirm Email'
                type={'email'}
                value={formikProps.values.confirm_email}
                error={formikProps.errors.confirm_email}
                onChange={(e) => { formikProps.setFieldValue('confirm_email', e.target.value) }}
              />
              <FormTextInput
                placeholder='Password'
                type='password'
                value={formikProps.values.password}
                error={formikProps.errors.password}
                onChange={(e) => { formikProps.setFieldValue('password', e.target.value) }}
              />
              <FormTextInput
                placeholder='Confirm Password'
                type='password'
                value={formikProps.values.confirm_pass}
                error={formikProps.errors.confirm_pass}
                onChange={(e) => { formikProps.setFieldValue('confirm_pass', e.target.value) }}
              />
            </div>
            <p className={'mt-8 mb-2'}>General Information</p>
            <hr />
            <div className='grid md:grid-cols-2 grid-cols-1 flex-col mt-8 bg-white rounded-3xl gap-3 md:gap-6'>
              <div className='flex flex-col justify-center items-center'>
                <div className=" text-black text-15 my-2">Logo Image</div>
                <ImgUpload
                  image={logo_image}
                  onChange={setLogoImage}
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className=" text-black text-15 my-2">Cover Image</div>
                <ImgUpload
                  image={cover_image}
                  onChange={setCoverImage}
                />
              </div>
              <FormTextInput
                placeholder='Restaurant Name'
                value={formikProps.values.restaurant_name}
                error={formikProps.errors.restaurant_name}
                onChange={(e) => { formikProps.setFieldValue('restaurant_name', e.target.value) }}
              />
              <FormTextInput
                placeholder='Restaurant Email'
                type={'email'}
                value={formikProps.values.restaurant_email}
                error={formikProps.errors.restaurant_email}
                onChange={(e) => { formikProps.setFieldValue('restaurant_email', e.target.value) }}
              />
              <FormTextInput
                placeholder='Phone Number'
                value={formikProps.values.phone}
                error={formikProps.errors.phone}
                onChange={(e) => { formikProps.setFieldValue('phone', e.target.value) }}
              />
              <FormTextInput
                placeholder='Website'
                value={formikProps.values.website}
                error={formikProps.errors.website}
                onChange={(e) => { formikProps.setFieldValue('website', e.target.value) }}
              />
              <div>
                <CustomSelect
                  values={cuisine_types}
                  value={(formikProps.values.cuisine_types == null || formikProps.values.cuisine_types.length == 0) ? [] :
                    cuisine_types.filter(item => formikProps.values.cuisine_types.findIndex(a => a == item.id) != -1)
                  }
                  isMultiple={true}
                  className={' !z-[5]'}
                  placeholder={'Cisine Types'}
                  renderRow={(item) => (
                    <p>{item.name}</p>
                  )}
                  renderValue={(item) => (
                    <span>{item?.name}</span>
                  )}
                  handleChange={(v) => {
                    let tmp = formikProps.values.cuisine_types.slice(0);
                    tmp.push(v.id);
                    formikProps.setFieldValue('cuisine_types', tmp)
                  }}
                  onRemoveItem={(v) => {
                    let tmp = formikProps.values.cuisine_types.slice(0);
                    let index = tmp.findIndex(t => t == v.id);
                    if (index != -1) {
                      tmp.splice(index, 1)
                    }
                    formikProps.setFieldValue('cuisine_types', tmp)
                  }}
                />
                {
                  !isEmpty(formikProps.errors.cuisine_types) &&
                  <div className="text-red-600 text-12 mt-2">{formikProps.errors.cuisine_types}</div>
                }
              </div>
              <div>
                <CustomSelect
                  values={['$', '$$', '$$$']}
                  value={formikProps.values.pricing}
                  className={' !z-[4]'}
                  placeholder={'Pricing Range'}
                  handleChange={(v) => {
                    formikProps.setFieldValue('pricing', v)
                  }}
                />
                {
                  !isEmpty(formikProps.errors.pricing) &&
                  <div className="text-red-600 text-12 mt-2">{formikProps.errors.pricing}</div>
                }
              </div>
              <FormTextInput
                placeholder='Capacity'
                type='number'
                value={formikProps.values.capacity}
                error={formikProps.errors.capacity}
                onChange={(e) => { formikProps.setFieldValue('capacity', e.target.value) }}
              />
              <div>
                <CustomSelect
                  values={amenities}
                  value={(formikProps.values.amenities == null || formikProps.values.amenities.length == 0) ? [] :
                    amenities.filter(item => formikProps.values.amenities.findIndex(a => a == item.id) != -1)
                  }
                  isMultiple={true}
                  placeholder={'Amenities'}
                  renderRow={(item) => (
                    <p>{item.name}</p>
                  )}
                  renderValue={(item) => (
                    <span>{item?.name}</span>
                  )}
                  handleChange={(v) => {
                    let tmp = formikProps.values.amenities.slice(0);
                    tmp.push(v.id);
                    formikProps.setFieldValue('amenities', tmp)
                  }}
                  onRemoveItem={(v) => {
                    let tmp = formikProps.values.amenities.slice(0);
                    let index = tmp.findIndex(t => t == v.id);
                    if (index != -1) {
                      tmp.splice(index, 1)
                    }
                    formikProps.setFieldValue('amenities', tmp)
                  }}
                />
                {
                  !isEmpty(formikProps.errors.amenities) &&
                  <div className="text-red-600 text-12 mt-2">{formikProps.errors.amenities}</div>
                }
              </div>
            </div>
            <p className={'mt-8 mb-2'}>Address Details</p>
            <hr />
            <div className='grid md:grid-cols-2 grid-cols-1 flex-col mt-8 bg-white rounded-3xl gap-3 md:gap-6'>
              <FormTextInput
                placeholder='Address Line 1'
                value={formikProps.values.address_line1}
                error={formikProps.errors.address_line1}
                onChange={(e) => { formikProps.setFieldValue('address_line1', e.target.value) }}
              />
              <FormTextInput
                placeholder='Address Line 2'
                type={'email'}
                value={formikProps.values.address_line2}
                error={formikProps.errors.address_line2}
                onChange={(e) => { formikProps.setFieldValue('address_line2', e.target.value) }}
              />
              <div>
                <CustomSelect
                  values={states}
                  value={formikProps.values.state}
                  renderRow={(item) => <span>{item?.name}</span>}
                  className={' !z-[5]'}
                  placeholder={'State'}
                  handleChange={(v) => {
                    formikProps.setFieldValue('state', v.name);
                    setStateId(v.id)
                  }}
                />
                {
                  !isEmpty(formikProps.errors.state) &&
                  <div className="text-red-600 text-12 mt-2">{formikProps.errors.state}</div>
                }
              </div>
              <div>
                <CustomSelect
                  values={cities.filter(c => c.states_id == state_id).map(c => c.name)}
                  value={formikProps.values.city}
                  className={' !z-[4]'}
                  placeholder={'City'}
                  handleChange={(v) => {
                    formikProps.setFieldValue('city', v);
                  }}
                />
                {
                  !isEmpty(formikProps.errors.city) &&
                  <div className="text-red-600 text-12 mt-2">{formikProps.errors.city}</div>
                }
              </div>
              <FormTextInput
                placeholder='Postal Code'
                value={formikProps.values.postcode}
                error={formikProps.errors.postcode}
                onChange={(e) => { formikProps.setFieldValue('postcode', e.target.value) }}
              />
            </div>
            <div className='flex justify-end w-full'>
              <button className='primary mt-5 w-max px-10' onClick={formikProps.handleSubmit}>Submit</button>
            </div>
          </div>
        </Spin>
      </div >
    </div >
  );
};

export default VendorRegister;
