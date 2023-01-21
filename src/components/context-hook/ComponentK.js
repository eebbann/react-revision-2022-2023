import React,{useContext} from "react";
import {ComponentB }from "../../page/ContextParent";
import ComponentA from "./ComponentA";

function ComponentK() {
	const context = useContext(ComponentB);
  return (
    <div>
      {context} 
			<ComponentA/>
    </div>
  ); 
}
export default  ComponentK