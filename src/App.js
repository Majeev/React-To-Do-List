import './App.css';
import ListItem from "./components/ListItem/ListItem";
import Todos from './components/Todos/Todos'
import React,{useState,useEffect} from "react";

function App() {
    const [items, setItems] = useState([])



    const addItemHandler = (itemName) => {
        setItems(prevState => ([...prevState, {name: itemName, id: Math.random()}]))
    }

  return (
    <div className="App">
      <ListItem onAddItem={addItemHandler}/>
        <Todos items={items}/>
    </div>
  );
}

export default App;
