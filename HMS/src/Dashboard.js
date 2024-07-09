import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { REACT_APP_API_URL } from '@env';



const Dashboard = ({ navigation }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        navigation.navigate('Login');
      } else {
        const userRole = await AsyncStorage.getItem('userRole');
        console.log('User Role from AsyncStorage:', userRole);
        setRole(userRole);
      }
    };

    checkToken();
  }, [navigation]);

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        console.log('Logging out with token:', token);
        await axios.post(`${REACT_APP_API_URL}/api/logout`, { token });
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('userRole');
        console.log('Successfully logged out');
        navigation.navigate('Login');
      } else {
        console.log('No token found');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const buttons = [
    { name: 'Add Hotel', icon: 'bed', color: '#4682B4', screen: 'ManagerSignUp', roles: ['admin','manager'] },
    { name: 'Room Book', icon: 'bed', color: '#4682B4', screen: 'RoomBookPage', roles: ['admin','manager'] },
    { name: 'Manage Room', icon: 'build', color: '#8A2BE2', screen: 'ManageRoomPage', roles: ['admin','manager'] },
    { name: 'Regular Customers', icon: 'people', color: '#32CD32', screen: 'RegularCustomersPage', roles: ['admin','manager'] },
    { name: 'Files', icon: 'document', color: '#FFD700', screen: 'FileManager', roles: ['admin','manager'] },
    { name: 'House Keeping', icon: 'home', color: '#FF4500', screen: 'HouseKeepingScreen', roles: ['admin','manager', 'employee'] },
    { name: 'Events', icon: 'calendar', color: '#FF6347', screen: 'EventPage', roles: ['admin','manager'] },
    { name: 'Chats', icon: 'chatbubbles', color: '#1E90FF', screen: 'ChatPage', roles: ['admin','manager', 'employee'] },
    { name: 'Invoice', icon: 'receipt', color: '#FF1493', screen: 'Invoice', roles: ['admin','manager'] },
    { name: 'Settings', icon: 'settings', color: '#4B0082', screen: 'SettingsPage', roles: ['admin','manager',] },
    { name: 'Order Products', icon: 'cart', color: '#2E8B57', screen: 'StockCheckScreen', roles: ['admin','manager', 'employee'] },
    { name: 'Landry Info', icon: 'shirt', color: '#2E8B57', screen: 'LaundryPage', roles: ['admin','manager', 'employee'] },
    { name: 'Add Room', icon: 'shirt', color: '#2E8B57', screen: 'AddRoomScreen', roles: ['admin','manager'] },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header1}>
          <View style={styles.header}>
            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.hotelName}>Premium Hotel</Text>
          </View>
          <View style={styles.header2}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.gradientButton}
              >
                <Image source={require('../assets/logout.png')} style={styles.icon} resizeMode="contain" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.grid}>
          {buttons.filter(button => button.roles.includes(role)).map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(button.screen)}
            >
              <Ionicons name={button.icon} size={30} color={button.color} />
              <Text style={styles.buttonText}>{button.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FD',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  header2: {
    flex: 0,
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4B0082',
    
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    width: 140,
    height: 130,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  gradientButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  loginButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#4B0082',
  
  },
  icon: {
    width: 30,
    height: 40,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    objectFit: 'contain',
  },
});

export default Dashboard;
