import { use } from 'react';

const Friends = ({ props }) => {
  const friends = use(props)
  console.log(friends);
  return (
    <div className='card'>
      <h3>Friends: {friends.length}</h3>
    </div>
  );
};

export default Friends;