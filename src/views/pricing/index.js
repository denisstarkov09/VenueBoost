import React, { useEffect, useState } from 'react';
import './index.css';
import Pricing from '../../components/Pricing';

const PricingPlans = () => {
  return (
    <div className={'align-col-middle view-terms'} >
      <Pricing />
    </div>
  );
};

export default PricingPlans;
