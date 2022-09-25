import React from "react"

const ToDoItem = (props)=>{
    return(
        <div>
            <li><input type='checkbox' onClick={()=>props.onChecked(props.id)}></input>{props.text}</li>
        </div>
    )
}

export default ToDoItem;

