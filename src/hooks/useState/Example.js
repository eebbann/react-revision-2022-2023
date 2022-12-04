import React, { useState } from "react";

export default function Example() {
	const [items, setItems]= useState([])
 
const handleSubmit=()=>{
   setItems((prev)=>[...prev, {id:items.length, value:Math.floor(Math.random()*100)+1}])
}

	return <div>
		{items.map(item=><div key={item.id}>{item.value}
		
		</div>)}
		
<button onClick={handleSubmit}>submit</button>
	</div>;
}
