import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col gap-6'>
      <h2 className='font-bold text-6xl text-emerald-500'>This Page is not found</h2>
      <Link href={'/'} className='btn bg-emerald-600 text-white'>
      Back to Home</Link>      
    </div>
  );
};

export default NotFound;