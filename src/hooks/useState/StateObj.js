import React, { useState } from "react";

function StateObj() {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	const [items, setItems] = useState([]); 
	const handleSubmit =()=>{
		setItems((p)=>[...p, { firstName: name.firstName, lastName: name.lastName }]);
		setName({ firstName: "", lastName: "" });
	}
	const onChangeHandle = (e)=>{
		console.log("e.target.value")
       setName((c)=>{
				return(
				{...c,[e.target.name]: e.target.value});});
	}
	return (
		<div>
			<form>
				<input
					type="text"
					name="firstName"
					value={name.firstName}
					onChange={onChangeHandle}
				/>
				<input
					type="text"
					name="lastName"
					value={name.lastName}
					onChange={onChangeHandle}
				/>
				<h2>your first name is: {name.firstName}</h2>
				<h2>your last name is: {name.lastName}</h2>
				  
				<button
          type="button"
          onClick={handleSubmit}> add list </button>

					<div>
            {items.map((item, index) => (
							<p key={index}>{item.firstName} {item.lastName}</p>
						) 
						)
						} 
						</div>

			</form>
		</div>
	);
}

export default StateObj;
