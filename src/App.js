import React,{useContext} from 'react';
import './App.css';
import  {Context}  from './ContextApi'



function App() {

  const value = useContext(Context)
  console.log(value)

        return (
          <div className="App">
            <p>{value.name}</p>
            <p>{value.gender}</p>
            <p>{value.address}</p>
          </div>
        );
      



}

export default App;
