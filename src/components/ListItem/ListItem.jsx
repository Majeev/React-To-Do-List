import css from './ListItem.module.css'
import React, {useState} from "react";
import Card from "../UI/Card";

const ListItem = (props) => {

    const [task, setTask] = useState('')
    const [option, setOption] = useState('3')

    const selectHandler = (e) => {
        setOption(e.target.value)
    }

    const inputChangeHandler = (e) => {
        setTask(e.target.value)

    }
    const addHandler = (e) => {
        e.preventDefault()
        if(task.trim().length === 0){
            return;
        }
        props.onAddItem(task, option)
        setTask('')
    }
    return (
        <Card>
            <input className={css.itemInput} type='text' placeholder='Enter your task'
                   onChange={inputChangeHandler} value={task}/>
            <label htmlFor='priority'>Priority</label>
            <select id='priority' name='priority' onChange={selectHandler}>
                <option className={css.low} value='3'>3 - Low</option>
                <option className={css.moderate} value='2'>2 - Moderate</option>
                <option className={css.high} value='1'>1 - High</option>
            </select>
            <button className={css.submitButton} type='submit' onClick={addHandler}>ADD TASK</button>
        </Card>

    )
}

export default ListItem