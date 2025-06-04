import React, { useState } from 'react'

import { MenuList } from '../helpers/MenuList';







const Menu = () => {
    const [orders, setOrders] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  const addToOrder = (item) => {
    const existing = orders.find((order) => order.id === item.id);
    if (existing) {
      setOrders(
        orders.map((order) =>
          order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order
        )
      );
    } else {
      setOrders([...orders, { ...item, quantity: 1}]);
    }
  };

  const updateQuantity = (id, delta) => {
    setOrders(
      orders
        .map((order) =>
          order.id === id ? { ...order, quantity: Math.max(order.quantity + delta, 1) } : order
        )
    );
  };

  const totalPrice = orders.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className={darkTheme ? 'bg-dark text-white p-4' : 'bg-light text-dark p-4'}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Fast-Food Menu</h1>
        <button className="btn btn-secondary" onClick={toggleTheme}>
          {darkTheme ? 'Light' : 'Dark'} 
        </button>
      </div>

      <div className="row">
        {MenuList.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card">
                
              <img src={item.image} className="card-img-top" alt={item.name} />
              
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-primary" onClick={() => addToOrder(item)}>
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5">Your Order</h2>
      <ul className="list-group">
        {orders.map((item) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            <div>
              {item.name} (${item.price}) x {item.quantity}
            </div>
            <div>
              <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => updateQuantity(item.id, -1)}>
                -
              </button>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="mt-3">Total: ${totalPrice.toFixed(2)}</h4>
    </div>
    
     
   
    
    
    
  )
}
export default Menu;
