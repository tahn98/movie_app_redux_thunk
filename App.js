import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store'
import DetailMovieScreen from './screens/DetailMovieScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={HomeScreen}
          options={HomeScreen.headerOptions} />
        <Stack.Screen
          name='Detail'
          component={DetailMovieScreen}
          options={DetailMovieScreen}
          options={DetailMovieScreen.headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  const store = configureStore
  return <Provider store={store}>
    <App />
  </Provider>
};