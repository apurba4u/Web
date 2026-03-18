import React from 'react';

const Links = ({props}) => {
  const {path, name} = props
  return (
    <li><a href={`/${path}`}>{name}</a></li>
  );
};

export default Links;