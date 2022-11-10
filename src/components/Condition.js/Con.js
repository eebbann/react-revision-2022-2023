import React,{useState} from "react";

function Con() {
	let [log, setLog] = useState(true) 
	return <div> 
		{log === false ?
		( 
		<div>con</div>) : (<div>PISSOFF</div>
		)}
		</div> ;
}

export default Con;
