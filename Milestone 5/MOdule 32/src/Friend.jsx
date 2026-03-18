import React from 'react'

const Friend = ({ friend }) => {
  const name = friend.name
  const email = friend.email
  const website = friend.website
  const phone = friend.phone
  return (
    <div className='card'>
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>{website}</h4>
      <h4>{phone}</h4>
    </div>
  )
}

export default Friend