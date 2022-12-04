import React,{useState, useEffect} from "react";

export default function UseCounter () {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMouseOver = e =>{
		setX(e.clientX)
		setY(e.clientY)
	}
	const mouse =()=>{
		window.addEventListener('mouseover', logMouseOver)
	}
  useEffect(()=>{
		 mouse ()
	},[0])
	return <div> 
	 {x}next{y}
	</div>;
}
 
