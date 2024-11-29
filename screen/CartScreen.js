import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext); // Added removeItem
  const navigation = useNavigation(); // Use navigation

  const deliveryCharge = 5; // Fixed delivery charge
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + deliveryCharge;

  return (
    <View style={styles.container}>
      {/* Title with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text> {/* Back Arrow */}
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>

      {/* Cart Items with Scroll */}
      <ScrollView>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrement')}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'increment')}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.actions}>
              <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>Delivery Charges: ${deliveryCharge.toFixed(2)}</Text>
        <Text>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('CheckoutScreen')} // Navigate to checkout
        >
          <Text style={styles.proceedText}>PROCEED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Reduced space between header and cart items
    marginTop: 20, // Added top margin to move header down
  },
  backButton: {
    marginRight: 20, // Space between arrow and title
  },
  backArrow: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#235346',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  deleteText: {
    color: '#fff',
    fontSize: 12,
  },
  footer: {
    marginTop: 'auto', // Push footer to bottom
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff', // Optional, to match container
  },
  proceedButton: {
    backgroundColor: '#235346',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  proceedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
