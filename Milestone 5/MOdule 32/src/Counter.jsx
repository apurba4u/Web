import React, { useState } from 'react'

const Counter = () => {
  const [cnt, setCnt] = useState(0)
  const counterStyle = {
    border: '2px solid yellow',
    textAlign: 'center'
  }
  return (
    <div style={counterStyle}>
      <h3>Count: {cnt}</h3>
      <button onClick={() => setCnt(cnt + 1)}>Add</button>
    </div>
  )
}

export default Counter