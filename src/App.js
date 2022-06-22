import './App.css';
import ListItem from "./components/ListItem/ListItem";
import Todos from './components/Todos/Todos'
import React,{useState,useEffect} from "react";

function App() {
    const [items, setItems] = useState([])
    let id = Math.random();


    const addItemHandler = (itemName,option) => {
        setItems(prevState => ([...prevState, {name: itemName, priority: option, id}]))
        console.log(items)

    }

  return (
    <div className="App">
      <ListItem onAddItem={addItemHandler}/>
        <Todos items={items}/>
    </div>
  );
}

export default App;
