import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Update quantity if item exists
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Add new item
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Function to update item quantity
  const updateQuantity = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };
    // Function to remove item from cart
    const removeItem = (itemId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId)); // Remove item based on id
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity , removeItem}}>
      {children}
    </CartContext.Provider>
  );
};
