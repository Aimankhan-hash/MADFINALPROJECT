import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: 'https://i0.wp.com/mossandfog.com/wp-content/uploads/2017/04/black-food-moss-and-fog-2.jpg?resize=1160%2C1547&quality=89&ssl=1',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Content */}
        <View style={styles.contentContainer}>
          {/* Title */}
          <Text style={styles.title}>Ze$TybiTe</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Clean eating with a focus on high-quality, tasty recipes.
          </Text>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')} // Navigate to Welcome Screen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(220, 220, 220, 0.0)',
    borderRadius: 15,
    paddingVertical: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#235346',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StartScreen;
