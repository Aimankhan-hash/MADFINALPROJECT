import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Back icon (Install via npm if not done already)
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Authentication methods
import { useNavigation } from '@react-navigation/native'; // To navigate after logout

const LogoutScreen = () => {
  const navigation = useNavigation(); // Hook for navigation

  // Define your image URL
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKGYWcLYOPoKMBrF1cS_xVflRYeb0qv1K3VtOXkg7XLHDENQ6JDXCimd7TGxsxymkqEk&usqp=CAU'; // Replace with your image URL

  // Logout functionality
  const handleLogout = async () => {
    try {
      const auth = getAuth(); // Get Firebase Auth instance
      await signOut(auth); // Log the user out
      console.log('Logged out!'); // Log out success

      // Navigate to the login screen (you can replace 'LoginScreen' with your actual login screen name)
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error logging out:', error.message); // Log out failure
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>LogoutScreen</Text>
      </View>

      {/* Image Section */}
      <Image
        source={{ uri: imageUrl }} // Using image URL
        style={styles.image}
      />

      {/* Text below the image */}
      <Text style={styles.thankYouText}>Thank you for ordering with us!</Text>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between', // Ensures that the content is spaced evenly
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center', // Center title horizontally
  },
  image: {
    width: 200, // Increase the width to make the image larger
    height: 200, // Increase the height to match width
    borderRadius: 100, // Half of the width/height for a round image
    resizeMode: 'cover', // Ensure the image maintains aspect ratio
    marginBottom: 5,  // Reduce margin below the image
    alignSelf: 'center', // Center the image horizontally
  },
  thankYouText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10, // Reduce margin before the button
  },
  logoutButton: {
    backgroundColor: '#0B2B26', // Change button color to #0B2B26
    paddingVertical: 8, // Reduced vertical padding to make the button smaller
    paddingHorizontal: 30, // Reduced horizontal padding to make the button smaller
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20, // Add margin to ensure button is not too close to the bottom
  },
  
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;
