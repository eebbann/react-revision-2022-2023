import React from "react";

function Person({person}) {
	return (
		<div>
			<h2>	i am {person.name} from {person.country} my am {person.age} years old</h2>
		
		</div>
	);
}

export default Person;
