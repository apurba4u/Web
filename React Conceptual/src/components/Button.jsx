import React from 'react';

const Button = () => {
  function handleClick1() {
    alert("I'm Clicked 1")
  }
  function handleClick2() {
    alert("I'm Clicked 2")
  }
  function handleClick3(num) {
    alert(`Sum + ${num += num}`)
  }
  return (
    <div className='flex gap-2'>
      <button onClick={handleClick1}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => handleClick3(7)}>Click 1</button>
    </div>
  );
};

export default Button;