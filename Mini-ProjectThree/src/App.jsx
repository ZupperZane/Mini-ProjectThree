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

    function getCartItems() {
    return curCart.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});
  }

  // Consts/ vars go here
  return (
    <div>

      {cartOpen && (
    <div className="cart-overlay" onClick={() => setCartOpen(false)} />)}
      <div className={`cart-panel ${cartOpen ? 'open' : ''}`}>
        <h2>Your Cart ({CartCounter})</h2>
        <button onClick={() => setCartOpen(false)}>
          X Close
          </button>
        <hr />

        {CartCounter === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          Object.entries(getCartItems()).map(([id, count]) => (
            <div key={id} >
              <strong>{id}</strong> x{count}
              <button onClick={() => removeAllFromCart(id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className ="NavBar">
        PlaceHolder
        <button onClick={() => setCartOpen(true)}>
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
