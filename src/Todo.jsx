import React , {useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const Todo =(props)=>{
    const [line,setline]= useState(false);
const cut =()=>{
    setline(true);
}
    return(
        <>
        <div className="todo_style">
        <span onClick={cut}><DeleteIcon className="delete"/></span>
        <li style={{textDecoration:line?"line-through":"none" }}>{props.text}</li>
        </div>
    </>);
}

export default Todo;