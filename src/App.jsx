import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Todo from './Todo';
const App = () =>{
const [input,setinput] = useState("");
const [items,setitems]=useState([]);

const change =(event) =>{
    setinput(event.target.value);
}

const click=()=>{
setitems((olditems)=>{
    return [...olditems,input];
})
setinput("");
}

return(
<>
<div className="main_div">
<div className="center_div">
<h1> ToDo list </h1>
<br/>
<input type="text" placeholder="Add items" onChange={change} value={input}/>
<Button className="btn" onClick={click}><AddIcon/></Button>
<br/>
<ol>

   { items.map((preval,index)=>{
        return <Todo
            text= {preval}
            key= {index}
        />
    })}

</ol>
</div>

</div>

</>
)
}

export default App;
