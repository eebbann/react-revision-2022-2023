import React, { Component } from "react";

  class Counter extends Component {
		constructor(){
			super( );
			this.state ={
				count:0
			}
		}
		increment(){
    this.setState({count: this.state.count + 5});
		}
	render() {
		return <div>{this.state.count}
			<button onClick={()=> this.increment()} >go up</button>
		</div>
	
	}
}

export default Counter;
