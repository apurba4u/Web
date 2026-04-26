import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
  return (
    <ul className="space-y-1 mt-6">
          {categories.news_category.map((category,ind) => {
            return <li key={ind} className={`p-2 rounded-md font-bold text-center text-md ${activeId === category.category_id ? "bg-purple-600 text-white" : ""}`}>
              <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
            </li>
          })}
        </ul>
  );
};

export default LeftSideBar;