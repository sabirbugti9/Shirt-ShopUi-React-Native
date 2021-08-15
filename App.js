

import React from 'react';
import { StatusBar, } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/components/Routes/index';

const App = () => {


  return (

    <NavigationContainer>
      {/* <HomeScreen /> */}
      <StatusBar barStyle="default" />
      <Route />
    </NavigationContainer>

  );
}
export default App;
