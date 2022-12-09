import React from 'react'
import { Child2 } from './Child2'
// import { Child2 } from '../Child2'
export const Child1 = () => {
  return (
    <div>
   <p>Pass your name as prop from one functional component to another and fix its proptype to string</p>
       <Child2 name=" Lucky"/>
    </div>
  )
}
