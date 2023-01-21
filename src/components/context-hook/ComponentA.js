import React,{ useContext }  from "react";  
import { ComponentB } from "../../page/ContextParent";
function ComponentA() {
	const context = useContext(ComponentB);
	return(
	<div>
		 bin {context}
	` `

	</div>
	)
};

export default ComponentA;
