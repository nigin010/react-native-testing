/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import Login from './src/screens/Login';
import InstagramUI from './src/screens/InstagramUI';
import { HomeStackNavigation } from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigation/>
    </NavigationContainer>
  );
};

export default App;
