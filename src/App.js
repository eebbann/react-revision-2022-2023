import React from "react";
import Con from "./components/Condition.js/Con";
import { UserProvider } from "./components/context/UserContext";
import Ehandle from "./components/eventHandling/Ehandle";
import Form from "./components/form/Form";
import Listing from "./components/List/Listing";
import Practice from "./components/List/Practice";
import Greet from "./components/props/Greet";
import ParentComponent from "./components/props/ParentComponent";
import Counter from "./components/state/Counter";
import Styls from "./components/styles/Styls";
import Classic from "./page/Classic";
import ClassIndex from "./page/ClassIndex";
import Request from "./components/react-http/Request"
// import Message from "./components/state/Message";

export default function App() {
	return (
		<div>
		 
			{/* <Counter/> */}
			{/* <Greet name ="man" age="90"/>
			 */}
			 {/* <Ehandle/> */}
			 {/* <ParentComponent/> */}
			 {/* <Con/> */}
			 {/* <Listing/> */}
			 {/* <Practice/> */}
			 {/* <Styls /> */}
			 {/* <Form/> */}
{/* 			 
			 <UserProvider value="kinglsley">
				<Classic/>
			 </UserProvider>   */}
			 <Request/>
			  
		</div>
	);
}
