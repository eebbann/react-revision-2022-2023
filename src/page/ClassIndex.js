import React, { Component } from "react";

class ClassIndex extends Component {
	constructor(){
		super();
		this.state = {
     message : "Emmanuel"
		}
	
}
	onChangeHandle(){
		this.setState({
			message : "davis" 
	})
}
static getDerivedStateFromProps(){
  console.log("hello derive State From Props")
	return null;
}

componentDidMount(){  
	console.log("hello componentDidMount")
}

	render() {
		return <div>Welcome to the platform {this.state.message} 
		<button onClick={()=>this.onChangeHandle(this.bind)}> change </button>
		</div>
	}
}

export default ClassIndex;
