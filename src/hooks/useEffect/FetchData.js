import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchData() {
const [pos, setPos]=useState({})
const [id, setId]= useState(4)
const [idOnButtonSubmit, setIdOnButtonSubmit] = useState(id)
const handleClick=()=>{
	setIdOnButtonSubmit(id)
}
useEffect(()=>{
	axios.get (`https://jsonplaceholder.typicode.com/posts/${idOnButtonSubmit}`)
	.then((res)=> {console.log (res)
	setPos(res.data) })
},[idOnButtonSubmit]
	)
	return(
	<div>
	<input type="text"  value={id} onChange={(e) =>setId(e.target.value)} />
	<button onClick={handleClick}>click</button>
	<div>{pos.title}</div>;
</div>)
}

export default FetchData;
