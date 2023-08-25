import React, { useEffect, useState } from 'react';
import './index.css';

import imageArchieve from '../../assets/images/about_us_archieve.png'
import BlogItem from '../../components/BlogItem';
import FormText from '../../components/FormText';

const ArchieveItem = ({icon, archieved, comment}) => (
  <div className='flex flex-col items-center my-10 px-10 text-center'>
    <div className='rounded-2xl bg-primary-light p-6'>
      <img src={icon.default} width={44} height={44} />
    </div>
    <FormText
      type='itemtitle'
      customClass='my-5'
      title={archieved}
    />
    <FormText
      type='subtitle'
      title={comment}
    />
  </div>
)

const archieveData = [
  { icon: require('../../assets/svgs/people.svg'), archieved: '13k', comment: `We have 13 thousand and more client\n around the world` },
  { icon: require('../../assets/svgs/flag.svg'), archieved: '17', comment: 'Our clients are spread over 17 countries around the world' },
  { icon: require('../../assets/svgs/calendar.svg'), archieved: '3+', comment: 'More than 3 years experience, make sure you choose our services' },
  { icon: require('../../assets/svgs/checkmark.svg'), archieved: '99%', comment: 'Good reviews and positive feedback from our client' }
]

const blogData = [
  {
    imgLink: require('../../assets/images/other/blog3.png'),
    blogLink: '#',
    title: 'The world is not only #000000 and #FFFFFF',
    summary: 'A UI Designers’ guide to creating colour variations effortlessly by using the HSB colour space.',
    createdAt: new Date('2021-08-02'),
    readTime: 5
  },
  {
      imgLink: require('../../assets/images/other/blog4.png'),
      blogLink: '#',
      title: 'Mastering the Basics of Icon Design with Adrien Coquet',
      summary: 'Learn icon design basics in Adobe Illustrator from French Graphic Designer Adrien Coquet.',
      createdAt: new Date('2021-07-27'),
      readTime: 7
  },
  {
      imgLink: require('../../assets/images/other/blog5.png'),
      blogLink: '#',
      title: 'A map of discovery methods that any product manager should master',
      summary: 'Everybody must have heard about “discovery” today. People frame it in so many ways. I personally prefer...',
      createdAt: new Date('2021-07-21'),
      readTime: 5
  }
]

const Aboutus = () => {
  return (
    <div className='flex flex-col gap-4 items-center view-about'>
        <div className='flex flex-col text-center my-10'>
            <FormText
              type='title'
              title='We help your business to grow'
            />
            <FormText
              type='subtitle'
              customClass='my-6 w-3/5 m-auto'
              title='Over the years we strive to create the most innovative technologies used by small and medium-sized companies'
            />
            <button className='primary w-max m-auto'>Contact us</button>
        </div>
        <div className='flex flex-col position-relative archieve-content'>
          <img src={imageArchieve} className='md:absolute hidden md:block' height={220} />
          <FormText
            type='title'
            customClass='mb-10 mt-40 text-center'
            title='Our Archievement'
          />
          <div className='grid grid-rows-2 md:grid-cols-2 sm:grid-cols-1 px-14'>
            {archieveData.map((item, index) => (
              <ArchieveItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-1 items-center'>
          <div className='col-span-2 flex flex-col'>
              <FormText
                type='title'
                customClass='mb-5'
                title='Empower business to achieve success.'
              />
              <FormText
                type='subtitle'
                title='We provide small industries, organizations and institutes of high-tech industries with modern components.'
              />
          </div>
          <div className='col-span-3'>
              <div className='grid grid-cols-5 gap-10'>
                <div className='col-span-3 flex flex-col items-end pl-10'>
                  <img src={require('../../assets/images/about_us_business1.png')} />
                  <div className='relative mt-5'>
                    <div className='mt-5 mr-10'>
                      <img src={require('../../assets/images/about_us_business4.png')} style={{position: 'absolute', top: 10, right: 80}} />
                    </div>
                    <div className='relative z-10'>
                      <img src={require('../../assets/images/about_us_business3.png')}  />
                    </div>
                  </div>
                </div>
                <div className='col-span-2 flex flex-col items-start'>
                  <div className='mt-10 ml-5 mb-5'>
                    <img src={require('../../assets/images/ellipse.png')} />
                  </div>
                  <div>
                    <img src={require('../../assets/images/about_us_business2.png')} />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='flex flex-col full-width my-10'>
          <div className='flex flex-row justify-between items-center'>
            <FormText
              type='title'
              customClass='mb-10'
              title='Read our blog'
            />
            <a href='#' className='color-primary text-xl font-semibold'>View all</a>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
              {blogData.map((item, index) => (
                <BlogItem key={index} type='summary' {...item} />
              ))}
          </div>
        </div>
        <div className='full-width about-us-end flex flex-col justify-center items-center mt-10'>
          <span className='text-7xl color-light text-left'>“</span>
          <span className='text-3xl color-light'>
            Understanding the market is the key to successful business. It is very important for us to understand how to deliver the best products to the customer.
          </span>
          <span className='text-2xl color-light mt-10 text-center'>Alex - CEO</span>
        </div>
    </div>
  );
};

export default Aboutus;
