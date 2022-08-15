import './App.css';
import veri from './data.js';
import Card from './Card';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState(veri);

  return (
    <div className="App">
      <div id="panel">
        <span id="header">{items.length} birthdays today</span> 
        {items.map((item, index)=>{return <Card key={index} imgUrl={item.image} name={item.name} age={item.age}  />})}
        <button id="clearBtn" onClick={()=>{setItems([])}}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
