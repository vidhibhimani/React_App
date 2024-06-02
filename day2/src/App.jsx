import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [state,setstate] = useState(0)

  function  plus() {
    
    setstate(state +1)
    
     if (state<=1){

      var button =document.getElementById('f')
     
     
      button.disabled = false;
      
     }

  }
  function increse() {
    

    if (state<=0) {
     var button =document.getElementById('f')
     
     
     button.disabled = true;

    }
    else{
      setstate(state -1)

    }
  }

 
  return (
    <div className="App">
      <div className='main'>
      <img src="https://www.mumkins.in/cdn/shop/products/frock-for-kids-gs172758-purple-1.jpg?v=1685606505&width=1800" alt="" />
      </div>

      <div className='head'>
      <p className='color'>COLOR</p>
      <button className='purple'>Purple</button>
      <p className='size'>SIZE</p>
      <button className='y'>7-8 Y</button><br></br>
      <p className='quanty'>QUANTITY</p>
      <div className='add'>
      <button onClick={plus}>+</button>
      <h3 className='number'>{state}</h3>
      <button id='f' onClick={increse}>-</button>
      </div>
      </div>
    </div>
  );
}

export default App;
