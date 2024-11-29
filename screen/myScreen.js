import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const myScreen = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <View>
      {cartItems.map((item, index) => (
        <Text key={index}>{item.name} - Rs.{item.price}</Text>
      ))}
    </View>
  );
};

export default myScreen;
