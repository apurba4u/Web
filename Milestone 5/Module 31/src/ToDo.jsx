import React from 'react'

export const ToDo = ({task, isDone = true, time = 0}) => {
  if (isDone) {
    return <>
    <ul>
      <li>Task : {task}</li>
    </ul>
    </>
  } else {
    return <>
    <ul>
      <li>Pending: {task} duration : {time}</li>
    </ul>
    </>
  }
}
