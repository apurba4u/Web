import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
  const {name, price, description, features} = pricing
  return (
      <div className="border bg-amber-600 rounded-2xl p-4 flex flex-col gap-2">
        {/* card header */}
        <div>
          <h2 className='text-5xl'>{name}</h2>
          <h4 className='text-2xl'>{price}</h4>
        </div>

        {/* card body */}
        <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
          <p className='font-medium'>{description}</p>
          {
            features.map((elem, index) => <PricingFeature key={index} feature={elem}/>)
          }
        </div>
        <button className='btn btn-soft w-full'>Subscribe</button>
      </div>
  );
};

export default PricingCard;