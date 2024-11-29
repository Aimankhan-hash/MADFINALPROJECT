import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MycartScreen = ({ navigation }) => {
  // Cart Items State
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Chicken Cheesy Burger',
      description: 'A delicious dish with mouth-watering flavors.',
      price: 8.0,
      image: 'https://i.pinimg.com/736x/43/7c/44/437c447768d443d33d9ee3743e87dd08.jpg',
      quantity: 1,
    },
    {
      id: '2',
      title: 'Chicken Peri Peri Pizza',
      description: 'A delicious dish with mouth-watering flavors.',
      price: 15.0,
      image: 'https://i.pinimg.com/736x/e6/1c/ef/e61cef37dffe3af9ce48d9e119176203.jpg',
      quantity: 1,
    },
  ]);

  const deliveryCharge = 5.0;

  // Function to calculate total price
  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return itemsTotal + deliveryCharge;
  };

  // Function to update quantity of an item
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          
        </TouchableOpacity>
        
      </View>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.itemFooter}>
                <View style={styles.quantityControl}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrement')}>
                    <Icon name="remove-circle" size={24} color="#000" />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, 'increment')}>
                    <Icon name="add-circle" size={24} color="#000" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            </View>
            {/* Remove Button */}
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
              <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Delivery Charges & Total */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Delivery Charges: ${deliveryCharge.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Total: ${calculateTotal().toFixed(2)}</Text>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.navigate('CheckoutScreen')} // Navigating to CheckoutScreen
      >
        <Text style={styles.proceedButtonText}>PROCEED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 10,
  },
  summary: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 5,
  },
  proceedButton: {
    backgroundColor: '#007a33',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MycartScreen;

