import React, { useEffect, useState } from 'react';
import './index.css';
import FormText from '../../components/FormText';

const TermsConditions = () => {
  const licenseItems = [
    '✓Provide industry',
    '✓Imporve',
    '✓Task ownership',
    '✓Assist in developing'
  ]
  return (
    <div className='flex flex-col align-center view-terms'>
      <FormText
        type='title'
        customClass='text-center my-10'
        title='Terms & Conditions'
      />

      <div className='flex flex-col align-start'>
        <FormText
          type='subtitle'
          title='As a Customer Support Specialist, we expect you to be up-to-date with the latest digital technologies and social media trends. You should have excellent communication skills and be able to assist our customers in a fast, efficient and professional manner. If you enjoy fixing issues and helping improve the overall customer experience, this job is for you!'
        />

        <div className='flex flex-col'>
          <FormText
            type='itemtitle'
            customClass='mt-10 mb-6'
            title='License'
          />
          <div>
            {licenseItems.map((item, index) => (
              <div>
                <img />
                <FormText
                  type='subtitle'
                  title={item}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <FormText
            type='itemtitle'
            customClass='mt-10 mb-6'
            title='Embedded content from other websites'
          />
          <FormText
            type='subtitle'
            customClass='mb-5'
            title='Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visiwebsite.'
          />
          <FormText
            type='subtitle'
            title='These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.'
          />
          
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
