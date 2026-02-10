import React from 'react'

const ChildComponent1 = ({setSelectedOption}) => {

const sel=()=>{
  setSelectedOption("Option 1");
}
    return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={sel}>Option 1</button>
    </div>
  )
}

export default ChildComponent1
