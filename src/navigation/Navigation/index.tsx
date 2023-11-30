import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import MapCar from '../../screens/MapCar';
import Login from '../../screens/Login';
import ListParking from '../../screens/ListParking';

const Stack = createNativeStackNavigator();

function Navigation() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: '#fff',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CarDetail" component={MapCar} />
        <Stack.Screen name="ListParking" component={ListParking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
