import React from 'react'

const Cinema = () => {
  const actors = ['Bappa Raj', 'OMar Sunny', 'Salman Shah', 'JAsim', 'Anwar']

  const singers = [
    {id: 1, name: 'Dr. Mahfuj', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuvro Dve', age: 57},
  ]
  return (
    <div>
      <h1>Total Actors : {actors.length}</h1>
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      {
        singers.map(elem => <Singer name={elem.name} age={elem.age}></Singer>)
      }
    </div>
  )
}
function Actor({actor}) {
  return(
    <>
    <li>Nayok: {actor}</li>
    </>
  )
}

function Singer({name, age}) {
  return(
    <>
    <div style={{display: 'flex', gap: '10px'}}>
      <h3>Name: {name}</h3>
      <p>age: {age}</p>
    </div>
    </>
  )
}
export default Cinema