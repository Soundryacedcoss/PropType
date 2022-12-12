import React from 'react'

export const Tsk3Child2 = ({ name, marks, score = 150, total = Math.max(1, score) }) => {
  return (
    <div>
      {name}
      <br />
      total:{ Math.round(score / total * 100)}
      <br />
      Marks:{marks}
    </div>
  )
}
