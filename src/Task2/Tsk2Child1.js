import React from 'react'
import  { Tsk2Child2 }  from './Tsk2Child2' 
export const Tsk2Child1 = () => {
var obj={name1:"Soundrya"}
function myfun(){
  const say=console.log("Hello");
}
const Sym=Symbol("I am symbol");
  return (
    <div>
      <p>perform validation on following prop-types in functional components.</p>
       <Tsk2Child2 name="Lucky" num={12} boolean={true} data={obj} fun={myfun} symbol={Sym}/>
        </div>
  )
}