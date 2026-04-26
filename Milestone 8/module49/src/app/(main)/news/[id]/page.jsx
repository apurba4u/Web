import { getNewsDetailsById } from '@/lib/data';
import { Description } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';


// dynamically metadata generate
export const generateMetadata = async ({params}) => {
  const {id} = await params
  const news = await getNewsDetailsById(id)
  return{
    title : news.title,
    description: news.details,
  }
}

const NewsDetailsPage = async({ params }) => {
  const { id } = await params
  const news = await getNewsDetailsById(id)
  return (
    <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    {/* Author Info */}
      <div className='flex gap items-center bg-slate-300 justify-between'>
        <Image src={news.author?.img} alt={news.author?.img} height={40} width={40}/>
        <div>
        <h2 className='font-semibold'>{news.author?.name}</h2>
        <h2 className='text-xs'>{news.author?.published_date}</h2>
      </div>
      <div className='flex justify-between items-center text-xl'>
        <CiShare2 />
        <CiBookmark />
      </div>
      </div>
    <h2 className="card-title">{news.title}</h2>
    <figure>
      <Image src={news.image_url} alt={news.title} width={300} height={300} className='w-full'/>
    </figure>
    <p className=''>{news.details}</p>
    <div className='flex gap-2'>
      <h2 className='flex gap-2'><CiStar className='text-yellow-400'/> {news.rating.number}</h2>
      <h2 className='flex gap-2'><FaEye/> {news.total_view}</h2>
    </div>
    {/* Ei btn e click korle ei category r onno news e niye jabe */}
    <Link href={`/category/${news.category_id}`} className='btn btn-success'>See Other News</Link>
  </div>
</div>
  );
};

export default NewsDetailsPage;