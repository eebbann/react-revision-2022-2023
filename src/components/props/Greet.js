import React from "react";

function Greet(props) {
	return <div>Greet the {props.name} who's {props.age} </div>;
}


export default Greet;



// 1. destructuring the props data as parameters

// function Greet({name,age}) {
//  
// 	return <div>Greet the {name} who's {age} </div>;
// }
// export default Greet;

//*******************************************************************************/

// 2. destructuring the props data inside function
// function Greet(props) {
// 	let {name,age} = props
// 	return <div>Greet the {name} who's {age} </div>;
// }

// export default Greet;