import React, { useEffect } from 'react';

import './index.css'
import img404 from '../../assets/images/404.png'
import RouteNames from '../../constants/route_names';
import { useNavigate } from 'react-router-dom';
import FormText from '../../components/FormText';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("window.location.pathname: ", window.location.pathname)
    if (window.location.pathname !== '/not-found') {
      console.log("window.location.pathname again: ", window.location.pathname)
      navigate('/not-found')
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-center not-found m-auto full-width mt-16'>
      <img className='mb-10' src={img404} />
      <FormText
        type='title'
        customClass='mt-12 mb-5'
        title='404 Not Found'
      />
      <FormText
        type='subtitle'
        customClass='md:w-3/5 text-center w-full mb-10'
        title='Ups! It seems like the page you are looking for is not available! Please try again with another page or go back to home'
      />
      <a className='btn primary flex items-center' href={RouteNames.home}>
        Back to home
      </a>
    </div>
  );
};

export default NotFound;
