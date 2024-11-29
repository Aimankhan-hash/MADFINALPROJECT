import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For back arrow icons (install via expo or npm)

const DeliveryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#235347" style={styles.backIcon} /> {/* Updated Color */}
        </TouchableOpacity>
        <Text style={styles.title}>DELIVERY</Text>
      </View>

      {/* Circle Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/07/28/74/96/360_F_728749694_lqMomfIcjhyeJhSXxmsmC9UB4KBmMVZC.jpg', // Replace with your image URL
          }}
          style={styles.image}
        />
      </View>

      {/* Main Content */}
      <Text style={styles.mainText}>WE DELIVER WITHIN 40 MINUTES</Text>
      <Text style={styles.subText}>
        If You Don't Get What You Ordered WithIn 40 Minutes Then The Food Will Be Free Of CoST ....
      </Text>

      {/* Done Button */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate('LogoutScreen')} // Navigate to next screen
      >
        <Text style={styles.doneButtonText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#8EB69B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  doneButton: {
    backgroundColor: '#235347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40, // Increased margin to move button lower
    width: '60%',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeliveryScreen;

