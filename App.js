import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screen/StartScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';
import BurgerMenu from './screen/BurgerMenu';
import MycartScreen from './screen/MycartScreen';
import CheckoutScreen from './screen/CheckoutScreen';
import OrderDoneScreen from './screen/OrderDoneScreen';
import DeliveryScreen from './screen/DeliveryScreen';
import LogoutScreen from './screen/LogoutScreen';
import myScreen  from './screen/myScreen';
import { CartProvider } from './context/CartContext';
import CartScreen from './screen/CartScreen';


import 'react-native-gesture-handler';

const Stack = createStackNavigator();

// Common header options
const headerOptions = {
  headerStyle: { backgroundColor: '#235346' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

const App = () => {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* Start Screen */}
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }} // Hide the header on the Start screen
        />

        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ ...headerOptions, title: 'Welcome Screen' }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ ...headerOptions, title: 'Login Screen' }}
        />

        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ ...headerOptions, title: 'Signup Screen' }}
        />

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ ...headerOptions, title: 'Home Screen' }}
        />

        {/* Burger Menu Screen */}
        <Stack.Screen
          name="BurgerMenu"
          component={BurgerMenu}
          options={{ ...headerOptions, title: 'Burger Menu' }}
        />

        {/* My Cart Screen */}
        <Stack.Screen
          name="MycartScreen"
          component={MycartScreen}
          options={{ ...headerOptions, title: 'My Cart' }}
        />

        {/* Checkout Screen */}
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{ headerShown: true, title: 'Checkout' }}
        />

        {/* Order Done Screen */}
        <Stack.Screen
          name="OrderDoneScreen"
          component={OrderDoneScreen}
          options={{ headerShown: true, title: 'Order Confirmation' }}
        />

        {/* Delivery Screen */}
        <Stack.Screen
          name="DeliveryScreen"
          component={DeliveryScreen}
          options={{ headerShown: false }} // Hide header if needed
        />

        {/* Next Screen (e.g. confirmation) */}
        <Stack.Screen
          name="LogoutScreen"
          component={LogoutScreen}
          options={{ headerShown: false }} // Hide header if needed
        />

<Stack.Screen
          name="myScreen"
          component={myScreen}
          options={{ headerShown: false }} // Hide header if needed
        />
     <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }} // Hide header if needed
        /> 
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App;
