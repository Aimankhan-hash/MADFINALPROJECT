import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        key={i}
        name={i <= rating ? 'star' : 'star-outline'}
        size={16}
        color={i <= rating ? '#FFD700' : '#888'}
      />
    );
  }
  return <View style={styles.starRating}>{stars}</View>;
};

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryImages = [
    { name: 'Pizza', uri: 'https://i.pinimg.com/736x/e6/1c/ef/e61cef37dffe3af9ce48d9e119176203.jpg' },
    { name: 'Pancake', uri: 'https://i.pinimg.com/736x/4f/88/2a/4f882a86fdd2d844fdf7a5a1f04b1600.jpg' },
    { name: 'Sandwich', uri: 'https://i.pinimg.com/736x/93/3f/92/933f921b1e3197e2470140698130c2c7.jpg' },
    { name: 'Ice-cream', uri: 'https://i.pinimg.com/736x/b5/13/16/b513161ae40ee78c62c6ce96eaf963da.jpg' },
    { name: 'Noodles', uri: 'https://i.pinimg.com/736x/31/c3/14/31c314fe64e10d1fa464379b5dacc8b9.jpg' },
  ];

  const restaurantData = [
    {
      name: 'Burger King',
      category: 'Pizza',
      rating: 4.5,
      time: '25-35 mins',
      distance: '8 km',
      imageUri: 'https://i.pinimg.com/736x/85/aa/37/85aa375d2989e494a9ae5f38d4e460e1.jpg',
    },
    {
      name: 'Pizzania',
      category: 'Pizza',
      rating: 4.6,
      time: '20-25 mins',
      distance: '7 km',
      imageUri: 'https://i.pinimg.com/736x/e6/1c/ef/e61cef37dffe3af9ce48d9e119176203.jpg',
    },
    {
      name: 'Pancake Delight',
      category: 'Pancake',
      rating: 4.2,
      time: '30-40 mins',
      distance: '10 km',
      imageUri: 'https://i.pinimg.com/736x/4f/88/2a/4f882a86fdd2d844fdf7a5a1f04b1600.jpg',
    },
     {
      name: 'Sandwich Stop',
      category: 'Sandwich',
      rating: 4.3,
      time: '15-20 mins',
      distance: '5 km',
      imageUri: 'https://i.pinimg.com/736x/93/3f/92/933f921b1e3197e2470140698130c2c7.jpg',
    },
    {
      name: 'Ice Cream Heaven',
      category: 'Ice-cream',
      rating: 4.8,
      time: '10-15 mins',
      distance: '3 km',
      imageUri: 'https://i.pinimg.com/736x/b5/13/16/b513161ae40ee78c62c6ce96eaf963da.jpg',
    },
    {
      name: 'Hotpot.',
      category: 'Noodles',
      rating: 4.4,
      time: '20-30 mins',
      distance: '6 km',
      imageUri: 'https://i.pinimg.com/736x/31/c3/14/31c314fe64e10d1fa464379b5dacc8b9.jpg',},
  ];

  const filteredRestaurants = selectedCategory
    ? restaurantData.filter((restaurant) => restaurant.category === selectedCategory)
    : restaurantData;

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.greeting}>Hello</Text>
        <Text style={styles.location}>
          <Icon name="location-outline" size={16} /> Location, Main City-Islamabad
        </Text>
        
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your Food or Restaurant"
        />
        <TouchableOpacity>
          <Icon name="filter-outline" size={24} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
       {/* Discount Banner */}
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={{
            uri:  'https://i.pinimg.com/736x/a1/d9/69/a1d9693a3474281efb2342b493e5ee21.jpg',
          }}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.discountText}>Get Special Discount</Text>
          <Text style={styles.percentageText}>up to 75%</Text>
          <TouchableOpacity style={styles.voucherButton}>
            <Text style={styles.voucherButtonText}>Claim Voucher</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoryImages.map((category, index) => (
            <TouchableOpacity
              style={styles.category}
              key={index}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Image style={styles.categoryImage} source={{ uri: category.uri }} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Restaurants */}
      <View style={styles.restaurantsContainer}>
        <Text style={styles.sectionTitle}>
        {selectedCategory ? `${selectedCategory} Restaurants` : 'All Restaurants'}


        </Text>
        {filteredRestaurants.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('BurgerMenu', { restaurant })}
          >
            <View style={styles.restaurantCard}>
              <Image style={styles.restaurantImage} source={{ uri: restaurant.imageUri }} />
              <View style={styles.restaurantDetails}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <StarRating rating={restaurant.rating} />
                <Text style={styles.restaurantInfo}>
                  {restaurant.time} • {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 10 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  location: { fontSize: 12, color: '#888' },
  notification: { position: 'relative' },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 1,
  },
  searchInput: { flex: 1, paddingVertical: 8 },
  filterIcon: { marginLeft: 10 },
   banner: {
    position: 'relative',
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  bannerContent: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  discountText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  percentageText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  voucherButton: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  voucherButtonText: {
    color: 'black',
  },
  categoriesContainer: { marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  category: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 60, height: 60, borderRadius: 30 },
  categoryText:
   { marginTop: 5,
    fontSize: 12 },
  restaurantsContainer:
   { marginTop: 20,flex:1 },
  restaurantCard: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 1,
  },
  restaurantImage: { width: 80, height: 80, borderRadius: 10 },
  restaurantDetails: { marginLeft: 10, flex: 1 },
  restaurantName: { fontSize: 16, fontWeight: 'bold' },
  restaurantInfo: { fontSize: 12, color: '#888', marginTop: 5 },
  starRating: { flexDirection: 'row', marginVertical: 5 },
});

export default HomeScreen;