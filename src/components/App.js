
import React,{useState} from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption,setSelectedOption] = useState("");
  const fetchData=(data)=>{
setSelectedOption(data);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="parent">
<ChildComponent1  fetchData={fetchData} />
<ChildComponent2  fetchData={fetchData} />
<p>Selected Option:{selectedOption}</p>
        </div>
    </div>
  )
}

export default App
