import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  const news = [
  {
    "_id": 1,
    "title": "Global Tech Companies Announce New AI Innovations"
  },
  {
    "_id": 2,
    "title": "Stock Markets Show Mixed Reactions Amid Economic Uncertainty"
  },
  {
    "_id": 3,
    "title": "New Renewable Energy Projects Gain Momentum Worldwide"
  },
  {
    "_id": 4,
    "title": "Scientists Discover Breakthrough in Cancer Research"
  },
  {
    "_id": 5,
    "title": "International Sports Events Set to Resume This Year"
  }
]
  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 p-3 container mx-auto'>
      <button className='btn btn-secondary'>Latest News</button>
      <Marquee pauseOnHover={true} speed={75}>
        {
          news.map((news) => (
            <span key={news._id}>{news.title}</span>
          ))
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;