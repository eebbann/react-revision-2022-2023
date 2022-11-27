import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

 class PagerA extends Component {
	render() {
		return <UserConsumer>{username =>{
			return <div>hello {username }  is nice </div>
			}}
			</UserConsumer>;
	}
}
export default PagerA