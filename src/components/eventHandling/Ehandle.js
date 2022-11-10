import React from "react";

function Ehandle() {
 let 	clickHandler = ()=>{
    console.log("hello")
	}
	/* the event handler in react contains a function 
	instead of a call back which renders multiple times **/
	return <div>
		
		<button onClick={clickHandler}>click me</button>	</div>
		
	//  this can also work
	//  <button onClick={()=>clickHandler()}>click me</button>	 

	 
}

export default Ehandle;
