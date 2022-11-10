import React from "react";

function ChildComp({click}) {
	return <div> 
		<button onClick={()=>click("emmanuel")}>click this shi</button>
	</div>;
}

export default ChildComp;
