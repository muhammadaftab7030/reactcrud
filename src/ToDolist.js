import React, { useState } from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
let ToDolist = (props)=>{
   const [line, setLine]=useState(false);
   let cutIt=()=>{
      setLine(true);
   }
    return (<React.StrictMode>
         <div className="list_items">
         <span onClick={cutIt}><DeleteOutlineIcon className="delete_btn" /></span>
         <li style={{textDecoration: line? 'line-through':'none'}}>  {props.item_values}</li></div>
         </React.StrictMode>);
}
export default ToDolist;