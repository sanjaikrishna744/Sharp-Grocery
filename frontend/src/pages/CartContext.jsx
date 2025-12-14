import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart(prev => {
      const found = prev.find(x => x._id === p._id);
      if (found) return prev.map(x => x._id === p._id ? {...x, qty: x.qty+1} : x);
      return [...prev, {...p, qty: 1}];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(x => x._id !== id));
  const clearCart = () => setCart([]);
  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
    {children}
  </CartContext.Provider>
}
