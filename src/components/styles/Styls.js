import React, { useState } from "react";
import './MyStyles.css'
function Styls() {
 const [className, setClassName] =useState(true)

 let onClickHandle =()=>{
	setClassName(className == "primary" ? "secondary" : "primary")
 }

	return <div>
		 <h1 className={`${className} xfonty`}  >
		    Style for learning styles
		</h1>
		<button onClick={onClickHandle}>change</button>
		</div>;
}

export default Styls;
