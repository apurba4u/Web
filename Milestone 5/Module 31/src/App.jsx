import { ToDo } from "./ToDo"

const App = () => {
  return (
    <>
    <Person> </Person>
    <Sports></Sports>
    <Student name='Ovi' dept='CSE'></Student>
    <Player name='Apurba' runs='24'></Player>
    <ToDo task = 'Learn React' isDone = {true}></ToDo>
    <ToDo task="Revise Js" isDone= {true} time='100'></ToDo>
    <ToDo task="Today Shower" isDone= {false}></ToDo>
    
    </>
  )
}
function Person() {
  const personStyle = {
    color: 'red',
    textAlign: 'center'
  }
  const age = 20
  return (
    <>
    <p style={personStyle}>I'm a person {age}</p>
    <p style={personStyle}>I'm a person {age}</p>
    <p style={personStyle}>I'm a person {age}</p>
    <p style={personStyle}>I'm a person {age}</p>
    </>
  )
}
function Student(props) {
  return(
    <div style={{
      border: '2px solid red',
      borderRadius: '20px'
    }}>
      <p>Name: {props.name}</p>
      <p>Dept: {props.dept}</p>
    </div>
  )
}
function Sports () {
  return(
    <>
    <h3>Cricket</h3>
    <p>Playing and losing</p>
    </>
  )
}
function Player ({name, runs}) {
  return(
    <div>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

export default App