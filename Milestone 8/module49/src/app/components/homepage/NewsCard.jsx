import Image from 'next/image';
import Link from 'next/link';
import { CiBookmark,  CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from 'react-icons/fa';

const NewsCard = ({news}) => {
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
    <p className='text-gray-600 line-clamp-6'>{news.details}</p>
    <div className='flex gap-2'>
      <h2 className='flex gap-2'><CiStar className='text-yellow-400'/> {news.rating.number}</h2>
      <h2 className='flex gap-2'><FaEye/> {news.total_view}</h2>
    </div>
    <Link href={`/news/${news._id}`} className='btn'>See Details</Link>
  </div>
</div>
  );
};

export default NewsCard;