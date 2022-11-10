  //sending back data from child components
	
	import React from "react";
import ChildComp from "./ChildComp";
	
	function ParentComponent() {
		let onclickHandle = (x)=>{
     console.log(`hit this ${x}`  )
		}
		return <div> 
			<ChildComp click ={onclickHandle}/>
		</div>
	}
	
	export default ParentComponent;
	