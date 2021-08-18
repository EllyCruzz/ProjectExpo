import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View, Alert} from 'react-native';
import {css} from './assets/css/Style.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Rastreio} from './views';
import { BorderlessButton } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "Bem vindo",
          headerStyle:{backgroundColor: "#19e9ee"},
          headerTintColor: '#333',
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}

        }} 
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


