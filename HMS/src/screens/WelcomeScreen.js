import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>HMS APP</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AuthLoading')}>
        <Text style={styles.buttonText}>Welcome</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8E3E63',
    marginBottom: 100,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#F1BBE0',
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default WelcomeScreen;
