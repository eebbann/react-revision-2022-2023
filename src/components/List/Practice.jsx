import React,{useState} from "react";
import Display from "./Display";

function Practice() {
 const [pro, setPro] = useState([{
	dat : "hello my name is eban emmanuel from nigeria",
   name: "yes you speak : "
 }])

 
const list = pro.map(x => <Display key={x.id} data={x}/>)
	return <div>{list}  
	</div>;

}

export default Practice;
