import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import WelcomePage from './src/screens/WelcomeScreen';
import SignUp from './src/SignUp';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'; // Import the AuthLoadingScreen
import EventPage from './src/screens/EventPage';
import ChatPage from './src/screens/ChatPage';
import Invoice from './src/screens/Invoice'; 
import FileManager from './src/screens/FileManager';
import HouseKeepingInfoScreen from './src/screens/HouseKeepingInfoScreen';
import HouseKeepingScreen from './src/screens/HouseKeepingScreen';
import LaundryPage from './src/screens/LaundryPage';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import OrderProductScreen from './src/screens/OrderProductScreen';
import StockCheckScreen from './src/screens/StockCheckScreen';
import AddRoomScreen from './src/screens/AddRoomScreen';
import ManagerSignUp from './src/ManagerSignUp';
import AdminLogin from './src/AdminLogin';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
     
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="EventPage" component={EventPage} options={{ headerShown: true }} />
            <Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: true }} />
            <Stack.Screen name="Invoice" component={Invoice} options={{ headerShown: true }} />     
            <Stack.Screen name="FileManager" component={FileManager} options={{ headerShown: true }} />
            <Stack.Screen name="HouseKeepingInfoScreen" component={HouseKeepingInfoScreen} options={{ headerShown: true }} />
            <Stack.Screen name="HouseKeepingScreen" component={HouseKeepingScreen} options={{ headerShown: true }} />
            <Stack.Screen name="LaundryPage" component={LaundryPage} options={{ headerShown: true }} />
            <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} options={{ headerShown: true }} />
            <Stack.Screen name="OrderProductScreen" component={OrderProductScreen} options={{ headerShown: true }} />
            <Stack.Screen name="StockCheckScreen" component={StockCheckScreen} options={{ headerShown: true }} />
            <Stack.Screen name="AddRoomScreen" component={AddRoomScreen} options={{headerShown: true }} />
            <Stack.Screen name="ManagerSignUp" component={ManagerSignUp} options={{ headerShown: true }} />
            <Stack.Screen name='AdminLogin' component={AdminLogin} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default App;
