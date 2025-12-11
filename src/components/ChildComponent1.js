import React from 'react'

const ChildComponent1 = ({selectedOption,fetchData}) => {


    return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={()=>fetchData("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1
