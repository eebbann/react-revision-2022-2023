import React, {useState, createContext } from "react";
import ComponentK from "../components/context-hook/ComponentK";
export const ComponentA = createContext(0);
export const ComponentB = createContext(0);
function ContextParent() {
	const [state, setState] = useState(0);
	return (
		<ComponentA.Provider value={state}>
			<ComponentB.Provider value={state}>
			<ComponentK />
			<button onClick={() => setState((prev)=>prev + 1)}>{state} </button>
			</ComponentB.Provider>
		</ComponentA.Provider>
	);
}

export default ContextParent;
