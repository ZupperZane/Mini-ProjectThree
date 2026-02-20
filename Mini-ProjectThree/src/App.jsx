import { useState } from 'react'
import './App.css'
import { GenerateCards } from './Cards.jsx'

function App() {
  // Cart Variables
    const [curCart, setCurCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  let CartCounter = curCart.length;

  //Cart Functions 
  function addToCart(ID){
     setCurCart(prev => [...prev, ID]);
     }

 function removeAllFromCart(ID){
     setCurCart(prev => prev.filter(a => a !== ID));
     }
     //May implement remove 1
     // GetCartItems is a vauge implementation of https://stackoverflow.com/questions/76088436/find-the-number-of-occurrences-in-an-array-using-reduce-in-javascript
    function getCartItems() {
    return curCart.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});
  }

  function removeOneFromCart(ID){
    setCurCart(prev => {
    const index = prev.indexOf(ID);
    return prev.filter((_, i) => i !== index);
    });
  }

  // Consts/ vars go here
  return (
    <div className = "FullPage">

      {cartOpen && (
    <div className="cart-overlay" onClick={() => setCartOpen(false)} />)}
      <div className={`cart-panel ${cartOpen ? 'open' : ''}`}>
        <h2>Your Cart ({CartCounter})</h2>

        <hr />

        {CartCounter === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          Object.entries(getCartItems()).map(([id, count]) => (
            <div key={id} className ='cartItem' >
              <strong>{id}</strong> x{count}

              <button onClick={() => addToCart(id)}>
                +1
              </button>
              
              <button onClick={() => removeOneFromCart(id)}>
                -1
              </button>

              <button className="removeAll" onClick={() => removeAllFromCart(id)}>
              Remove All
              </button>
            </div>
          ))
        )}
                <button onClick={() => setCartOpen(false)}>
          X Close
          </button>
      </div>
      <div className="Header">
        <h1>
          Grocery Store Shopper
        </h1>
        <button onClick={() => setCartOpen(true)}>
          Display Cart: {CartCounter}
        </button>
      </div>
      <div>
          <GenerateCards addToCart={addToCart}/>          
      </div>
    </div>
  )
}

export default App
