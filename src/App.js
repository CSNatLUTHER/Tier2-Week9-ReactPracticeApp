import { useState, useEffect } from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header';
import axios from 'axios'

function App() {

  const [items, setItems ] = useState([])

  const getItems = () => {
    axios.get( '/items' ).then( (response)=>{
      setItems( response.data );
    }).catch((err)=>{
      alert('nope');
      console.log(err);
    })
  }

  useEffect( ()=> {
    getItems();
    console.log(items);
  },[]);

  return (
    <div className="App">
      <Header />
      <Body items={items} getItems={getItems}/>
    </div>
  );
}

export default App;
