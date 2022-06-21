import css from './ListItem.module.css'
import React, {useState} from "react";
import Card from "../UI/Card";

const ListItem = (props) => {

    const [task, setTask] = useState('')

    const inputChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const addHandler = (e) => {
        e.preventDefault()
        if(task.trim().length === 0){
            return;
        }
        props.onAddItem(task)
        setTask('')
    }
    return (
        <Card>
            <input className={css.itemInput} type='text' placeholder='Enter your task'
                   onChange={inputChangeHandler} value={task}/>
            {/*<input className={css.itemInput} type='date' placeholder='Deadline Date' onChange={inputChangeHandler}/>*/}
            <button className={css.submitButton} type='submit' onClick={addHandler}>ADD TASK</button>
        </Card>

    )
}

export default ListItem