import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({feature}) => {
  return (
    <p className='flex gap-2 mt-3'><CircleCheckBig className='text-green-500'/> {feature}</p>
  );
};

export default PricingFeature;