import React from "react"; 
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
import Request from "./components/react-http/Request";
import ClassCounter from "./hooks/useState/ClassCounter";
import HookCounter from "./hooks/useState/HookCounter";
import StateObj from "./hooks/useState/StateObj";
import Example from "./hooks/useState/Example";
import UseCounter from "./hooks/useEffect/UseCounter"
import SetIn from "./hooks/useEffect/SetIn";
import FetchData from "./hooks/useEffect/FetchData";
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
			{/* <Request/>
			 */}

			{/* //////////////////////////////////////////// */}

			{/* //////////////////////////////////////////// */}
			{/* hoooooks */}

			{/* <ClassCounter /> */}
			{/* <HookCounter/> */}
			{/* <StateObj/>
			here 
			<Example/> */}
			{/* <UseCounter /> */}
			{/* <SetIn/> */}
			<FetchData/>
		</div>
	);
}
