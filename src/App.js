import './App.css';
import ListItem from "./components/ListItem/ListItem";
import Todos from './components/Todos/Todos'
import React,{useState,useEffect} from "react";

function App() {
    const [items, setItems] = useState([])
    const [completedTasks, setCompletedTasks] = useState(0)
    let id = Math.random();

    useEffect(() => {
        const sorted = [...items]
       setItems(sorted.sort((a, b) => (a.priority > b.priority) ? 1 : -1))
    },[])


    const addItemHandler = (itemName,option) => {
        setItems(prevState => ([...prevState, {name: itemName, priority: option, id}]))
    }
    const removeItemHandler = (todo) => {
        return () => {
      setItems(items.filter(item => item.name !== todo.name))
        setCompletedTasks(prevState => prevState +1 )}
    }

  return (
    <div className="App">
      <ListItem onAddItem={addItemHandler} completedTasks={completedTasks}/>
        <Todos items={items} onClick={removeItemHandler}/>
    </div>
  );
}

export default App;
