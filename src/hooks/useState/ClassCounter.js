import React, { Component } from "react";
class ClassCounter extends Component {
	constructor(){
		super();
    this.state = {
      counter: 0
    }
	}
	
increment(){
	this.setState({
		counter: this.state.counter+1
	})
}
	render() {
		return <div>ClassCounter {this.state.counter}<button onClick={()=>this.increment()}>increase</button> </div>;
	}
}

export default ClassCounter;
