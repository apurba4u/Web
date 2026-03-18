import React, { use } from 'react';

const PricingOption = ({props}) => {
  const pricingData = use(props)
  console.log(pricingData);
  return (
    <div>
      <h4>Apurba Ovi</h4>
      {
        pricingData.forEach(elem => console.log(elem))
      }
    </div>
  );
};

export default PricingOption;