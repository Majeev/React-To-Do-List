import css from './ListItem.module.css'
import React, {useState} from "react";

const ListItem = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')

    const inputChangeHandler = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    const addHandler = (e) => {
        e.preventDefault()
        setItems(prevState => ([...prevState, {item: name}]))
        console.log(items)
    }
    return (
        <div className={css.container}>
            <input className={css.itemInput} type='text' placeholder='Enter your task' onChange={inputChangeHandler}/>
            <input className={css.itemInput} type='date' placeholder='Deadline Date' onChange={inputChangeHandler}/>
            <button className={css.submitButton} type='submit' onClick={addHandler}>ADD TASK</button>
            {items.map(item => (
                <div>{item.item}</div>
            ))}
        </div>
    )
}

export default ListItem