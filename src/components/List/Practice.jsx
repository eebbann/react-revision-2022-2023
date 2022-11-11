import React,{useState} from "react";
import Display from "./Display";

function Practice() {
 const [pro, setPro] = useState([{
	dat : 0
 }])

 
const list = pro.map(x => <Display key={x.id} data={x}/>)
	return <div>{list} 
 
	<button onClick={()=>setPro(x.dat + 1)}>click</button>
	</div>;

}

export default Practice;