import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Modal,
  ScrollView, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();

  // State for Address and Payment Details
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  // Arrays to hold multiple addresses and payment methods
  const [addresses, setAddresses] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  // State for Modal Visibility
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Validation function for address fields
  const validateAddress = () => {
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Please enter a name.');
      return false;
    }
    if (!address.trim()) {
      Alert.alert('Validation Error', 'Please enter an address.');
      return false;
    }
    if (!phone.trim() || phone.length < 10) {
      Alert.alert('Validation Error', 'Please enter a valid phone number (at least 10 digits).');
      return false;
    }
    return true;
  };

  // Validation function for payment fields (no expiry date validation anymore)
  const validatePaymentMethod = () => {
    if (!paymentMethod.trim()) {
      Alert.alert('Validation Error', 'Please enter a payment method.');
      return false;
    }
    if (!cardHolder.trim()) {
      Alert.alert('Validation Error', 'Please enter the card holder\'s name.');
      return false;
    }
    return true;
  };

  // Add Address
  const addAddress = () => {
    if (validateAddress()) {
      setAddresses([...addresses, { name, address, phone }]);
      setName('');
      setAddress('');
      setPhone('');
      setModalVisible(false);
    }
  };

  // Add Payment Method
  const addPaymentMethod = () => {
    if (validatePaymentMethod()) {
      setPaymentMethods([...paymentMethods, { paymentMethod, cardHolder }]);
      setPaymentMethod('');
      setCardHolder('');
      setPaymentModalVisible(false);
    }
  };

  // Update Address
  const updateAddress = () => {
    if (validateAddress() && editIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = { name, address, phone };
      setAddresses(updatedAddresses);
      setName('');
      setAddress('');
      setPhone('');
      setModalVisible(false);
      setEditIndex(null); // Reset edit index
    }
  };

  // Update Payment Method
  const updatePaymentMethod = () => {
    if (validatePaymentMethod() && editIndex !== null) {
      const updatedPaymentMethods = [...paymentMethods];
      updatedPaymentMethods[editIndex] = { paymentMethod, cardHolder };
      setPaymentMethods(updatedPaymentMethods);
      setPaymentMethod('');
      setCardHolder('');
      setPaymentModalVisible(false);
      setEditIndex(null); // Reset edit index
    }
  };

  // Delete Address
  const deleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  // Delete Payment Method
  const deletePaymentMethod = (index) => {
    const updatedPaymentMethods = paymentMethods.filter((_, i) => i !== index);
    setPaymentMethods(updatedPaymentMethods);
  };

  // Proceed to the order confirmation screen
  const validateAndProceed = () => {
    if (!addresses.length || !paymentMethods.length) {
      Alert.alert('Missing Information', 'Please add an address and payment method');
      return;
    }
    navigation.navigate('OrderDoneScreen'); // Proceed to next screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Shipping Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        {addresses.length > 0 ? (
          addresses.map((addr, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.text}>{addr.name}</Text>
              <Text style={styles.text}>{addr.address}</Text>
              <Text style={styles.text}>Phone: {addr.phone}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteAddress(index)}
              >
                <Text style={styles.deleteButtonText}>Delete Address</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => {
                  setName(addr.name);
                  setAddress(addr.address);
                  setPhone(addr.phone);
                  setEditIndex(index); // Set edit index
                  setModalVisible(true);
                }}
              >
                <Text style={styles.updateButtonText}>Edit Address</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.errorText}>No Address Added</Text>
        )}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setModalVisible(true);
            setEditIndex(null); // Reset edit index for adding new address
          }}
        >
          <Text style={styles.addButtonText}>+ Add Address</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Method Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        {paymentMethods.length > 0 ? (
          paymentMethods.map((pm, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.text}>{pm.paymentMethod}</Text>
              <Text style={styles.text}>Card Holder: {pm.cardHolder}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deletePaymentMethod(index)}
              >
                <Text style={styles.deleteButtonText}>Delete Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => {
                  setPaymentMethod(pm.paymentMethod);
                  setCardHolder(pm.cardHolder);
                  setEditIndex(index); // Set edit index
                  setPaymentModalVisible(true);
                }}
              >
                <Text style={styles.updateButtonText}>Edit Payment</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.errorText}>No Payment Method Added</Text>
        )}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setPaymentModalVisible(true);
            setEditIndex(null); // Reset edit index for adding new payment method
          }}
        >
          <Text style={styles.addButtonText}>+ Add Payment Method</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm to Pay Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={validateAndProceed}>
        <Text style={styles.confirmButtonText}>CONFIRM TO PAY</Text>
      </TouchableOpacity>

      {/* Modal for Adding or Editing Address */}
      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add or Edit Address</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Enter Address"
              style={styles.input}
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              placeholder="Enter Phone Number"
              style={styles.input}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={editIndex !== null ? updateAddress : addAddress}
              >
                <Text style={styles.modalButtonText}>
                  {editIndex !== null ? 'Update' : 'Save'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for Adding or Editing Payment Method */}
      <Modal visible={isPaymentModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add or Edit Payment Method</Text>
            <TextInput
              placeholder="Enter Payment Method (e.g., Visa Debit)"
              style={styles.input}
              value={paymentMethod}
              onChangeText={setPaymentMethod}
            />
            <TextInput
              placeholder="Enter Card Holder Name"
              style={styles.input}
              value={cardHolder}
              onChangeText={setCardHolder}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setPaymentModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={editIndex !== null ? updatePaymentMethod : addPaymentMethod}
              >
                <Text style={styles.modalButtonText}>
                  {editIndex !== null ? 'Update' : 'Save'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    section: {
      marginTop: 20,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#f9f9f9',
      padding: 15,
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      marginBottom: 5,
    },
    errorText: {
      fontSize: 14,
      color: 'red',
    },
    addButton: {
      marginTop: 10,
      alignItems: 'center',
    },
    addButtonText: {
      fontSize: 16,
      color: '#0066cc',
    },
    confirmButton: {
      backgroundColor: '#003d29',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    confirmButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      width: '80%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#ddd',
      flex: 1,
      marginHorizontal: 5,
      alignItems: 'center',
    },
    saveButton: {
      backgroundColor: '#0066cc',
    },
    modalButtonText: {
      color: '#fff',
    },
    deleteButton: {
      backgroundColor: '#8EB69B',
      padding: 8,
      borderRadius: 5,
      marginTop: 5,
      alignItems: 'center',
    },
    deleteButtonText: {
      color: '#fff',
    },
    updateButton: {
      backgroundColor: '#8EB69B',
      padding: 7,
      borderRadius: 5,
      marginTop: 5,
      alignItems: 'center',
    },
    updateButtonText: {
      color: '#fff',
    },
  
});

export default CheckoutScreen;