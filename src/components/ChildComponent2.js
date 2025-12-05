import React,{useState} from 'react'


const ChildComponent2 = ({fetchData,selectedOption,setSelectedOption}) => {
const [name,setName] = useState("Option 2");
   
return (
    <div>
      <h2>Child Component 2</h2>
        <button onClick={()=>fetchData(name)}>{name}</button>
    </div>
  )
}

export default ChildComponent2
