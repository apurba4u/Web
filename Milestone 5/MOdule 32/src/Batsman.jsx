import { useState } from "react"

const Batsman = () => {
  const [run, setRuns] = useState(0)
  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <h4>Runs: {run}</h4>
      <button onClick={() => setRuns(run + 1)}>Single</button>
      <button onClick={() => setRuns(run + 4)}>Four</button>
      <button onClick={() => setRuns(run + 6)}>Six</button>
      <button onClick={() => setRuns(0)}>Out</button>
    </div>
  )
}

export default Batsman