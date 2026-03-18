import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOption = ({pricingPromise}) => {
  const pricingData = use(pricingPromise)
  return (
    <div>
      <h2 className='text-5xl'>Get Our MemberShip</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8'>
        {/* Method 1 */}
        {/* {
          pricingData.map(elem => <PricingCard key={elem.id} pricing={elem}/>)
        } */}

        {/* Method 2 */}

        {
          pricingData.map(elem => <DaisyPricing key={elem.id} pricing={elem}/>)
        }
      </div>
    </div>
  );
};

export default PricingOption;