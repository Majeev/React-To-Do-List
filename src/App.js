import './App.css';
import ListItem from "./components/ListItem/ListItem";
import Todos from './components/Todos/Todos'
import React,{useState,useEffect} from "react";

function App() {
    const [items, setItems] = useState([])
    let id = Math.random();

    useEffect(() => {
       setItems(items.sort((a, b) => (a.priority > b.priority) ? 1 : -1))
    },[items])


    const addItemHandler = (itemName,option) => {
        setItems(prevState => ([...prevState, {name: itemName, priority: option, id}]))
    }
    const removeItemHandler = (todo) => {
        return () => {
      setItems(items.filter(item => item.name !== todo.name))}
    }

  return (
    <div className="App">
      <ListItem onAddItem={addItemHandler}/>
        <Todos items={items} onClick={removeItemHandler}/>
    </div>
  );
}

export default App;
