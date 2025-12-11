import React from 'react'


const ChildComponent2 = ({selectedOption,fetchData}) => {

   
return (
    <div>
      <h2>Child Component 2</h2>
        <button onClick={()=>fetchData("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
