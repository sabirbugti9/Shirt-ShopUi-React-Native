import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen';
const Routes = () => {
    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ headerShown: false }}
            />
           
        </RootStack.Navigator>
    );
}
export default Routes;