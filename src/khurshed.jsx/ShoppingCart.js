import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = () => {
    if (itemName && itemPrice) {
      setCart([...cart, { name: itemName, price: Number(itemPrice) }]);
      setItemName('');
      setItemPrice('');
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price.toFixed(2)}{' '}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Cost: {totalCost.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingCart;
