import React, { useEffect, useState } from 'react'

const Players = () => {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])
  return (
    <div className='card'>
      <h4>Players: {players.length}</h4>
      {
        players.map(player => <li>{player.name}</li>)
      }
    </div>
  )
}

export default Players