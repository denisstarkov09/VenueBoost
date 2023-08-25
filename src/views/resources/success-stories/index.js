import React, { useEffect } from 'react';
import Img_madam_woo from '../../../assets/images/testi/madam_woo.jpg'
import Img_barnsdale from '../../../assets/images/testi/barnsdale.jpg'
import Img_barkeeper from '../../../assets/images/testi/barkeeper.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css';
import { Link } from 'react-router-dom';
import RouteNames from '../../../constants/route_names';
import FormText from '../../../components/FormText';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  largeDesktop: {
    breakpoint: { max: 3000, min: 2050 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 2050, min: 1240 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1240, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

const SuccssStories = () => {
  const data = [
    {
      image: Img_madam_woo,
      title: 'Madam Woo',
      desc: 'Queenstown in New Zealand is filled with tourists, who are notorious for making bookings and then not showing up, but one restaurant has used ResDiary to dramatically red...',
    },
    {
      image: Img_barnsdale,
      title: 'The Barnsdale Lodge Hotel',
      desc: 'Barnsdale Lodge Hotel is a historic hotel and restaurant overlooking the countryside of Rutland. At just over 250 years old, the hotel focuses on traditional hospitality w...',
    },
    {
      image: Img_barkeeper,
      title: 'Pubs & Clubs Case Studies',
      desc: <span>Pubs and clubs make for distinct hospitality settings, with each having its own style and formalities. <br />They are perfect spo...</span>,
    },
  ]

  const TestiItem = ({ data }) => {
    return (
      <div className={'h100 px-0 md:px-6'}>
        <div className={`rounded-24 p-4 md:p-9 w100 h100 bg-white flex flex-col items-center`}>
          <img src={data?.image} className={' w-24 h-24 mb-9 rounded-full'} />
          <FormText
            type='subtitle'
            customClass='mb-7'
            title={data?.desc}
          />
          <FormText
            type='itemtitle'
            title={data?.title}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={'testimonial bg-gray2 py-20'}>
      <div className={'flex flex-col justify-center items-center'}>
        <FormText
          type='subtitle'
          title='TESTIMONIAL'
        />
        <FormText
          type='title'
          customClass='mt-6'
          title='Our Success Stories'
        />
      </div>
      <div className='mx-auto max-w-screen-main px-4 mt-10 pb-6 sm:px-6 md:px-8 lg:px-16'>
        <Carousel responsive={responsive}
          infinite={true} autoPlay={true} showDots={true} partialVisible={false} containerClass={'pb-9'}
        >
          {
            data.map((item, index) =>
              <TestiItem key={index}
                data={item}
              />
            )
          }
        </Carousel>
      </div>
    </div>
  );
};

export default SuccssStories;
