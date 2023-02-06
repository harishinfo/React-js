import './App.css';
import { useState,useEffect } from 'react';
  function App() { 
    const [user, setUser] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((response) => setUser(response));
    },[])
    
  console.log(user, "USEEEE")

  return (
    
    <div className="App">
      {
        user.map((e) => {
         <li>{e.name}</li> 
        })
      }
    </div>
  );
  }

export default App;
