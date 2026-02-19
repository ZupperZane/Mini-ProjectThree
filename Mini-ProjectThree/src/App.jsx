import { useState } from 'react'
import './App.css'
import { GenerateCards, } from './Cards.jsx'

function App() {
  // Cart Variables
    const [curCart,setCurCart] = useState([]);
    let CartCounter =0;
  //Cart Functions 
  function addToCart(AnID){
     setCurCart(prev => [...prev, AnID]);
     
     }

 function removeAllFromCart(AnID){
     setCurCart(prev => prev.filter(a => a !== AnID));
     }
     //May implement remove 1

  // Consts/ vars go here
  return (
    <div>
      <div className ="NavBar">
        PlaceHolder
        <button>
          Display Cart: {CartCounter}
        </button>
      </div>
      <div>
        <h1>
          Grocery Store Shopper
        </h1>
      </div>
      <div>
        <h3>
          Available Items
        </h3>
          <GenerateCards addToCart={addToCart}/>          
      </div>
    </div>
  )
}

export default App
