import React from "react";

function Display({data}) {
	console.log("data",data)
	return <div>{data.name} {data.dat}</div>;
}

export default Display;
