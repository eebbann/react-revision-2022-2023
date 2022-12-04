import React, { useState,useEffect } from "react";

const SetIn = () => {
	const[count, setCount] = useState(0)


  
	useEffect(() => {
			const tick = ()=>{
		setCount(prev=> prev - 1)
	}
   const interval = setInterval(tick, 2000)

	 return ()=>{
		 clearInterval(interval)
	 }
	}, [ ]);
	
	return <div>{count}</div>;
};

export default SetIn;
