import React, { useReducer } from 'react';
// hook used for state management
//alternative to useState
// primitive compared to useState
const initialState = 0;
const reducer = (state, action)=>{
	switch (action) {
		case increment:
			return state + 1;
		case increment:
			return state - 1;
		case reset:
			return initialState;
		default:
			return State;
	}
};
function useDispatch() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<>
		<div className="csk">count: {count}</div>
			<div> 
				<button onClick={()=>dispatch('increment')}>Increment
				</button>
				<button onClick={()=>dispatch('decrement')}>Decrement
				</button>
				<button onClick={()=>dispatch('reset')}>Reset
				</button>
				</div></>

	);
}

export default useDispatch();