import React,{useState} from 'react'

const ChildComponent1 = ({fetchData}) => {

const [name,setName] = useState("Option 1");
    return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={()=>fetchData(name)}>{name}</button>
    </div>
  )
}

export default ChildComponent1
