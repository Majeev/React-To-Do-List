import css from './ListItem.module.css'
import React, {useState} from "react";
import Card from "../UI/Card";

const ListItem = (props) => {

    const [name, setName] = useState('')

    const inputChangeHandler = (e) => {
        setName(e.target.value)
    }
    const addHandler = (e) => {
        e.preventDefault()
        props.onAddItem(name)
        setName('')
    }
    return (
        <Card>
            <input className={css.itemInput} type='text' placeholder='Enter your task'
                   onChange={inputChangeHandler} value={name}/>
            {/*<input className={css.itemInput} type='date' placeholder='Deadline Date' onChange={inputChangeHandler}/>*/}
            <button className={css.submitButton} type='submit' onClick={addHandler}>ADD TASK</button>
        </Card>

    )
}

export default ListItem