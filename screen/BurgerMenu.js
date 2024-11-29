import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext'; // Import CartContext

const BurgerMenu = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);
  
  const data = {
    Burger: [
      { id: '1', name: 'Chicken Burger', price: 7, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4kmRq92ECw6KxUJtITnRrxzOQY9XfL5l6w&s' },
     { id: '2', name: 'Beef Burger', price: 8, rating: 4.0, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
      { id: '3', name: 'Hamburger', price: 8, rating: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxmbwaGQRO7KGj9H_PcoeW-GLp_ifTDDE3A&s' },
      { id: '4', name: 'Lamb Burger', price: 8, rating: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzWnNvWWMZ7ZMLkjnBkh2SvcNVW55iTygTQ&s' },
      { id: '5', name: 'Olive Burger', price: 8, rating: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvaU7qsUU6kqF_XAGkiCM5BFvFugoqQoHZg&s' },
      { id: '6', name: 'Nutburger', price: 8, rating: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiP64i9xjUBUcS26WwO8Tsn39DMce77j936Q&s' },
      { id: '7', name: 'Shawarma Burger', price: 8, rating: 4.0, image: 'https://bbq-heroes.com/wp-content/uploads/shawarma-smashburger-with-cheese-feature.jpg' },
    ],
    Fries: [
      { id: '8', name: 'Classic Fries', price: 4, rating: 4.1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraRuu-7LhI7XeHdISwtY_roFUYkx460djXA&s' },
      { id: '9', name: 'Curly Fries', price: 5, rating: 4.3, image: 'https://cdn.theliveinkitchen.com/wp-content/uploads/2022/05/03140844/Frozen-Curly-Fries-Air-Fryer-The-Live-In-Kitchen-4.jpg' },
      { id: '10', name: 'Tornado potato', price: 5, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUtlPB2GkJvhpBTTHQJWEbhWncnXSWYZliA&s' },
      { id: '11', name: 'Garlic fries', price: 5, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcGMVDABaesWGwlJnvVTPtHcaNtqlXEDC7Q&s' },
      { id: '12', name: 'Chili cheese fries', price: 5, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvMm0dXBY_V72VIUAh8GeAEKHMfr3auCD8Q&s' },
      { id: '13', name: 'Sweet potato fries', price: 5, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2GjtOKnhNsEPKn_qZSZ06OJl6dkQx4kpog&s' },
      { id: '14', name: 'Loaded fries', price: 5, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8DjPX18CYjzrUOiigjUny6TLwm7DOD7X3Q&s' },
    ],
    Coke: [
      { id: '15', name: 'Coca Cola', price: 2, rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2VnqW1rdHwdOBz2_tA9sSRIaFdkgSz_8Rg&s' },
      { id: '16', name: 'Sprite', price: 2, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Tu1tklAPw-D74IubrNjyDxvd49UqoP_arQ&s' },
      { id: '17', name: 'Fanta', price: 2, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFOGp2YganK4uerPeew4QZPD_ZNqqF8JPQw&s' },
      { id: '18', name: 'Diet Coke', price: 2, rating: 4.5, image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FEdit%2F2024-08-dressed-up-diet-coke%2Fdressed-up-diet-coke-3' },
      { id: '19', name: 'Coca-Cola Zero', price: 2, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PGo3cASfmZw-d6JEi_auQiIJ0ol-GI_szw&s' },
      { id: '20', name: 'Water', price: 2, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryl1CEe5knDAFfdiWrpIGDPm8zjnzFSl1MA&s' },
    ],
    Meals: [
      { id: '21', name: 'Combo Meal 1', price: 10, rating: 4.6, image: 'https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1720487884-Family-Combo-01%20(1).jpg%3Fq%3D10&w=3840&q=75' },
      { id: '22', name: 'Brunch', price: 12, rating: 4.7, image: 'https://bakingwithaimee.com/wp-content/uploads/2021/02/IMG_9528-500x375.jpg' },
      { id: '23', name: 'Supper', price: 12, rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEV9S8NdDlwJmnvKyUDhPwz35LDsr4bH34A&s' },
      { id: '24', name: 'High tea', price: 12, rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ASClXZpnlVBAIHlJLBN1t_CiLDxawuoNuw&s' },
      { id: '25', name: 'Snack', price: 12, rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHCMFxhoGYpr8A03ZwhAzvyMX3PPXRguDcQ&s' },
      { id: '26', name: 'Fish', price: 12, rating: 4.7, image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/02/fish-fry-1.jpeg ' },
    ],Taco: [
      { id: '27', name: 'Chicken Taco', price: 6, rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZD1ytr61c6PI5nFV5ATVmt1aVLpOOSQimw&s' },
      { id: '28', name: 'Beef Taco', price: 7, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZZ2CyIz6hiwMuudloMFOPFsmKkmhqO-WJw&s' },
      { id: '29', name: 'Mexican rice and beef Taco', price: 7, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRha4YdyVoyOxMWUjKbR6f6FklSFIO-TWji3Q&s' },
      { id: '30', name: 'Steak Taco', price: 7, rating: 4.3, image: 'https://www.cookingclassy.com/wp-content/uploads/2022/06/steak-tacos-19.jpg' },
      { id: '31', name: 'BlackBeen Taco', price: 7, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0fNDIQPS2md0nDcU3Mmtw-Re5Qdsjrzv0Q&s' },
    ],
    Burrito: [
      { id: '32', name: 'Chicken Burrito', price: 8, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlDy_C7mf_5txP28Q0U3-jouUkhCC67YkYA&s' },
      { id: '33', name: 'Beef Burrito', price: 9, rating: 4.4, image: 'https://i.ytimg.com/vi/krkf7ObsTM4/maxresdefault.jpg' },

      { id: '34', name: 'Been & Cheese Burrito', price: 9, rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQOqwN5BEgfovYawZonG97G3fBSBY9u4cnQ&s' },
      { id: '35', name: 'Vegetarian Burrito', price: 9, rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBqXPcytm6UtrudpBbgMLWcwwTpgOz5oWag&s' },
      { id: '36', name: ' Chipotle Chicken Burrito', price: 9, rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuBHBLAitfIzD6FBQRxr4rP-4tQPHocj6iw&s' },
    ],
     Sandwich: [
      { id: '37', name: 'Chicken Sandwich', price: 5, rating: 4.6, image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D' },
      { id: '38', name: 'Veggie Sandwich', price: 4, rating: 4.2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjq2PCECX0N-IDY0JoBcNa6JGLbRAKZdEs_A&s' },
      { id: '39', name: 'Club Sandwich', price: 4, rating: 4.2, image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D' },
      { id: '40', name: 'Cheese Sandwich', price: 4, rating: 4.2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkKgbGcLZXWy8Bf1gM7w90EZkn0gm1i2ang&s' },
      { id: '41', name: 'Egg & Mayonnaise  Sandwich', price: 4, rating: 4.2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoC-nhjAS8sLhZLain7cDCDFLlZhZgdB9uA&s' },
    ],
    Pizza: [
      { id: '42', name: 'Cheese Pizza', price: 10, rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s' },
      { id: '43', name: 'Pepperoni Pizza', price: 12, rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwONdy1qWRnSR2s5NpVw1AV9ohx6JQZV8E7w&s' },
      { id: '44', name: 'BBQ Pizza', price: 12, rating: 4.8, image: 'https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg' },
      { id: '45', name: 'Chicken Pizza', price: 12, rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gxxkKHYgPqnKzDoWXVtXhZDBXhENEwyYSw&s' },
      { id: '46', name: 'Chicken Cheese  Pizza', price: 12, rating: 4.8, image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: '47', name: 'Crown Crust Pizza', price: 12, rating: 4.8, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    FriedChicken: [
      { id: '49', name: 'Fried Chicken 1', price: 6, rating: 4.4, image: 'https://plus.unsplash.com/premium_photo-1683657860968-7474e7ea2d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww' },
      { id: '50', name: ' Korean Fried Chicken ', price: 7, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQ-2yEXlDUyeL99niejDax4LRnJbBPdIQOg&s' },
      { id: '51', name: ' Masala Fried Chicken ', price: 7, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQPM27aofAdL1-M-nMfpldctSbXX2SKd9Rg&s' },
      { id: '52', name: ' Honey Butter Fried Chicken ', price: 7, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAvcLA20vRpQfoyqOd_IvKpoPAMyHNLVfcA&s' },
      { id: '53', name: ' ButterMilk Fried Chicken ', price: 7, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1tOH-qB7AbgwZWmHrOo67hspSR6Fdfdf8w&s' },
      { id: '54', name: ' Air Fryer Fried Chicken 2', price: 7, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTig6BnyOjbRAsBHZkFWuaxbJg07PiwGGz7sQ&s' },

    ],
  };

  const [selectedTab, setSelectedTab] = useState('Burger');
  const [items, setItems] = useState(data[selectedTab]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setItems(data[tab]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemRating}>⭐ {item.rating}</Text>
      </View>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Top Image Section */}
      <View>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyJTIwcG5nfGVufDB8fDB8fHww' }} style={styles.topImage} />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Burger King</Text>
          <Text style={styles.overlayText}>⭐ 4.5 • 25-35 mins • </Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        {Object.keys(data).map((tab) => (
          <TouchableOpacity key={tab} onPress={() => handleTabClick(tab)} style={styles.tabButton}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </ScrollView>
      <ScrollView style={styles.container}>
      
<TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('CartScreen')}>
  <View style={styles.cartButtonContent}>
    <Text style={styles.cartButtonText}>View Cart</Text>
    <Ionicons name="arrow-forward-circle" size={24} color="#fff" style={styles.arrowIcon} />
  </View>
</TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderRadius: 8,
  },
  overlayText: {
    color: '#fff',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  tabButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  tabText: {
    color: '#000',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd ',
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
  itemRating: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#235346',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  arrowButton: {
    alignSelf: 'flex-end',
    margin: 20,
  },
});

export default BurgerMenu;