import React,{useState} from "react";
import Markdown from 'react-markdown';
const Markdowns = () =>{
    const [value,setvalue] = useState("");
return(
    <div>
      <div>
        <textarea onChange={(e)=>setvalue(e.target.value)} className="first"></textarea>
      </div>
      <div className="second">
        <Markdown>{value}</Markdown>
      </div>
   </div>
)
}
export default Markdowns;