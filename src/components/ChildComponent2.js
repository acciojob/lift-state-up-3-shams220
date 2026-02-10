import React from 'react'


const ChildComponent2 = ({setSelectedOption}) => {

   
const sel=()=>{
  setSelectedOption("Option 2");
}
    return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={sel}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
