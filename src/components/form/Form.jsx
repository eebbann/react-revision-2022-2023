import React from "react";
import { useState } from "react";
import "./MyStyles.css"
function Form() {
	const [className, setClassName] =useState(true)
	const [user, setUser] = useState({
		name: "",
    surname: "",  
	})
	let onChangeValue =(e)=>{
   setUser((prev)=>{ return ( {...prev, [e.target.id]: e.target.value }
	)})
	}
	let changeColor =()=>{
		setClassName(className == true ? "primary" : true)
	}
	return <div>
		<form>
			<div>
        <label htmlFor="name" className={className} onClick={changeColor}>Name</label>
				<input type="text" id="name" value={user.name}  onChange = {onChangeValue}/>
				
				<label htmlFor="surname">SurName</label>
				<input type="text" id="surname" value={user.surname} aria-label="form" onChange = {onChangeValue}/>
				</div>

		</form>

	</div>;
}

export default Form;
