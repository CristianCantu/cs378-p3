import './App.css';
import React, { useState } from 'react';
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];




function App() {

  const [cartItems, setCartItems] = useState({});
  

    const handleAddToCart = (itemId) => {
      setCartItems((prevCart) => {
        const updatedCart = { ...prevCart };
        updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
        return updatedCart;
      });
    };

    const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCart) => {
        const updatedCart = { ...prevCart };
        if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
        }
        return updatedCart;
    });
    };


    const getTotalAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
        const menuItem = menuItems.find((item) => item.id.toString() === itemId);
        return total + (menuItem ? menuItem.price * cartItems[itemId] : 0);
    }, 0).toFixed(2);
    };

    const handleOrder = () => {
      const orderDetails = Object.keys(cartItems)
        .map((itemId) => {
          const menuItem = menuItems.find((item) => item.id.toString() === itemId);
          return `${menuItem.title}: ${cartItems[itemId]}`;
        })
        .join('\n');
  
      alert(`Order details:\n${orderDetails}`);
    };
      
    const handleClearAll = () => {
      setCartItems({});
      getTotalAmount();
    };

  return (
    <div>
      
      <img src={"logo192.png"} alt={"logo"} width="250" height="200" />
      <h1 class="advertise">J2, the freshest</h1>
      <h2 class="slogan">Best japanese restaurant in town</h2>

      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map((item) => (
          <MenuItem 
          key={item.id}
          title = {item.title}
          description={item.description}
          imageName={item.imageName}
          price={item.price}
          count={cartItems[item.id] || 0}
          onAddToCart={() => handleAddToCart(item.id)}
          onRemoveFromCart={() => handleRemoveFromCart(item.id)}
          />))}  {}
      </div>

      <div className="row">
          <div className="col">
              <p>Subtotal: ${getTotalAmount()}</p>
          </div>
          <div className="col">
              <button onClick={handleOrder} type="button" className="btn btn-primary"> Order </button>
          </div>

          <div className="col">
              <button onClick={handleClearAll} type="button" className="btn btn-primary"> Clear All </button>
          </div>
      </div>

    </div>
  );
}

export default App;
