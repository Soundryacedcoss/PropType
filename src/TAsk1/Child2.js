import React from 'react'
import PropTypes from 'prop-types'
export const Child2 = (props) => {
  return (
    <div> 
       <p><h2>{props.name}</h2></p>
        </div>
  )
}
Child2.propTypes={
    name:PropTypes.string.isRequired,
}