

const PRODUCTS = [
    {id: "Pizza", name: "Pepperoni Pizza", price: 8.49, image: "Mini-ProjectThree/src/assets/PizzaTemp.jpg", desc: "Digorno brand frozen pizza, Pepperoni."},
    {id: "Beef", name: "Ground Beef", price: 6.99, image: "src/assets/Beef.jpg", desc: "1-lb Raw Beef ready-to-cook."},
    {id: "Chicken", name: "Chicken", price: 4.49, image: "src/assets/Chicken.jpg", desc: "1-lb Raw Chicken ready-to-cook."},
    {id: "Grapes", name: "Grapes", price: 3.29, image: "src/assets/Grapes.jpg", desc: "1-lb Green Cotton Candy Grapes."},
    {id: "Lettuce", name: "Lettuce", price: 2.19, image: "src/assets/Lettuce.jpg", desc: "1-lb head of Lettuce."},
    {id: "Tomato", name: "Tomatos", price: 2.79, image: "src/assets/Tomatos.jpg", desc: "1-lb of Cherry Red Tomatos."},
    {id: "Bananas", name: "Bananas", price: 1.29, image: "src/assets/Banana.jpg", desc: "1-lb of Ripe Bananas."},
    {id: "Muffins", name: "Muffins", price: 4.99, image: "src/assets/Muffins.jpg", desc: "6 Pack of Muffins."},
    {id: "Twinkies", name: "Twinkies", price: 5.49, image: "src/assets/Twinkies.jpg", desc: "12 Pack of Twinkies."},
    {id: "Buns", name: "Slider Buns", price: 3.19, image: "src/assets/SliderBuns.jpg", desc: "8 Pack of Slider Buns."},
    {id: "S-Beef", name: "Sliders", price: 7.99, image: "src/assets/Sliders.jpg", desc: "12 Pack of Slider-Sized Beef, Ready-to-Cook."},
    {id: "Condiments", name: "Mustard & Ketchup 2 Pack", price: 4.29, image: "src/assets/KetchupPack.jpg", desc: "2 Pack of Mustard-Ketchup"},
    {id: "IceCream", name: "Vanilla Ice Cream", price: 6.49, image: "src/assets/VanillaIceCream.jpg", desc: "Vanilla Ice Cream, One Gallon."},
    {id: "Filters", name: "Coffee Filters", price: 3.49, image: "src/assets/CoffeFilters.jpg", desc: "Coffee filters pack of 50."}
     ]


export function GenerateCards({ addToCart }) { 
    return(
        <div className="cards">
            {PRODUCTS.map((product => (
                <div className="card" key={product.id}>
                    <img src = {product.image}/>
                        <p>
                        {product.name} - ${product.price.toFixed(2)}
                        <br /><br />
                        {product.desc}
                        </p>
                        <button onClick={() => addToCart(product.id)}>
                            Add This to List
                        </button>
                    </div>
            )))}
        </div>
    );
}

export function getTotal(curCart) {
  return (curCart.reduce((t, id) => {
    const product = PRODUCTS.find(p => p.id === id);
    return t + (product ? product.price : 0);
  }, 0) * 1.07).toFixed(2);
}
