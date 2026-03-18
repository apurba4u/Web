import React, { useState } from 'react';

const Players = () => {
  const [run, setRuns] = useState(0)
  return (
    <div>
      <h3 className='text-4xl font-bold'>Run: {run}</h3>
      <div className="flex gap-2.5">
      <button onClick={() => setRuns(run + 1)}>Single</button>
      <button onClick={() => setRuns(run + 4)}>Four</button>
      <button onClick={() => setRuns(run + 6)}>Six</button>
      <button onClick={() => setRuns(0)}>Out</button>
      </div>
    </div>
  );
};

export default Players;