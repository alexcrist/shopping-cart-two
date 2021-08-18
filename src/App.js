
import { useEffect, useState } from 'react';
import api from './api';
import Cart from './components/Cart';
import Inventory from './components/Inventory';
import _ from "lodash";

function App() {

  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  const refreshInventory = async () => {
    console.log('refresh');
    const newInventory = await api.getInventory();
    setInventory(newInventory);
  };

  const addToCart = (name) => {
    const item = _.find(inventory, { name });
    if (item.instock === 0) {
      alert('There are no more of that item in stock.');
    } else {
      const newInventory = inventory.map(item => {
        if (item.name === name) {
          return {
            ...item,
            instock: item.instock - 1
          };
        }
        return item;
      });
      setInventory(newInventory);
      const newCart = cart;
      newCart.push(item);
      setCart(newCart);
    }
  };

  const removeFromCart = (name) => {
    let index;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      if (item.name === name) {
        index = i;
        break;
      }
    }
    const newCart = cart;
    _.pullAt(newCart, index);
    setCart(newCart);

    const newInventory = inventory.map(item => {
      if (item.name === name) {
        return {
          ...item,
          instock: item.instock + 1
        };
      }
      return item;
    });
    setInventory(newInventory);
  };

  useEffect(() => {
    refreshInventory();
  }, []);

  return (
    <div className="app">
      <Inventory
        addToCart={addToCart}
        inventory={inventory} 
        refreshInventory={refreshInventory} 
      />
      <Cart
        inventory={inventory}
        cart={cart} 
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
