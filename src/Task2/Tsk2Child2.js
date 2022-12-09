import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
export const Tsk2Child2 = (props) => {
 const[Object,setObject]=useState("")
 useEffect(()=>{
  setObject(props.data.name1)
 },[])
 
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.num}</p>
      <button onClick={props.fun}>Click</button>
      <p>{props.boolean}</p>
      <p>{Object}</p>
      <p>{props.symbol.toString()}</p>
      </div>
  )
}
Tsk2Child2.propTypes={
  name:PropTypes.string.isRequired,
  num:PropTypes.number.isRequired,
  Object:PropTypes.object.isRequired,
  fun:PropTypes.func.isRequired,
  symbol:PropTypes.symbol.isRequired,
}