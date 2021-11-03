import { useState, useEffect } from 'react';
import './App.css';
import Body from './components/Body/Body'
import Header from './components/Header/Header';
import axios from 'axios'

function App() {

  const [tasks, setTasks ] = useState([])

  const getTasks = () => {
    axios.get( '/tasks' ).then( (response)=>{
      setTasks( response.data );
    }).catch((err)=>{
      alert('nope');
      console.log(err);
    })
  }

  useEffect( ()=> {
    getTasks();
    console.log(tasks);
  },[]);

  return (
    <div className="App">
      <Header />
      <Body tasks={tasks} />
    </div>
  );
}

export default App;
