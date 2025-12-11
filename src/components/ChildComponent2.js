import React,{useState} from 'react'


const ChildComponent2 = ({fetchData,selectedOption}) => {
const [name,setName] = useState("Option 2");
   
return (
    <div>
      <h2>Child Component 2</h2>
        <button onClick={()=>fetchData("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
