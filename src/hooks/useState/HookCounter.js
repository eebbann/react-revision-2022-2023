import React,{useState} from "react";

function HookCounter() {
 const [code, setCode]= useState(0)

const handleIncrement = ()=>{
  setCode((prev)=>{return(
		prev+1
	)})
}

	return <div>
		<button onClick={handleIncrement}>Increase {code}</button>
	</div>;
}

export default HookCounter;
