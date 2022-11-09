import React from "react";

function Greet(props) {
	let {name,age} = props
	return <div>Greet the {name} who's {age} </div>;
}

export default Greet;
