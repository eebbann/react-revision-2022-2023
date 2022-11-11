import React from "react";
import Person from "./Person";

function Listing() {
	// let names = ['manny','popo','lolo']
	let people = [
		{
			name: "eban",
			age: 9,
			country: "afghan",
		},
		{
			name: "mma",
			age: 29,
			country: "Nigeria",
		},
		{
			name: "keban",
			age: 19,
			country: " korea",
		},
	];
	let personList = people.map(peeps => <Person key={peeps.age}  person={peeps} />);

	return <div>{personList}</div>;
}

export default Listing;
