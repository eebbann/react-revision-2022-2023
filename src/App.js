import React from "react";
import Greet from "./components/props/Greet";
import Counter from "./components/state/Counter";
// import Message from "./components/state/Message";

export default function App() {
	return (
		<div>
		 
			{/* <Counter/> */}
			<Greet name ="man" age="90"/>
		</div>
	);
}
