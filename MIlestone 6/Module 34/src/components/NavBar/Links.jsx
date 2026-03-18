import React from 'react';

const Links = ({props}) => {
  return (
      <li className='px-4 mr-10 hover:bg-gray-400 duration-100'><a href={props.path}>{props.name}</a></li>
  );
};

export default Links;