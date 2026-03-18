import React, { use } from 'react';

const Users = ({props}) => {
  const users = use(props)
  return (
    <div>
      {users.length}
    </div>
  );
};

export default Users;