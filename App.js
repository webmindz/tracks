import React,{ useContext, useEffect }  from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SplashScreen from './src/screens/SplashScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';

import {Context as AuthContext} from './src/context/AuthContext';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';

// MENU WHEN NOT SIGNED IN
const LoadingStack = createStackNavigator();
const LoadingStackScreen = () =>{
  return (
    <LoadingStack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <LoadingStack.Screen name="SplashScreen" component={SplashScreen} />
    </LoadingStack.Navigator>
  );
};



// MENU WHEN NOT SIGNED IN
const AuthStack = createStackNavigator();
const AuthStackScreen = () =>{
  return (
    <AuthStack.Navigator initialRouteName="SigninScreen" headerMode="none">
      <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

// MENU SHOW AT THE BOTTOM - SIGNED IN
const TrackBottomStack = createMaterialBottomTabNavigator();
const TrackBottomStackScreen = () => {
  return (
    <TrackBottomStack.Navigator initialRouteName="TrackCreateScreen" headerMode="none">
      <TrackBottomStack.Screen name="TrackListScreen" children={TracksStackScreen} />
      <TrackBottomStack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
      <TrackBottomStack.Screen name="AccountScreen" component={AccountScreen} />
    </TrackBottomStack.Navigator>
  );
};

// MENU SHOW AT THE BOTTOM - SIGNED IN
const TrackStack = createStackNavigator();
const TracksStackScreen = () => {
  return (
    <TrackStack.Navigator headerMode="none">
      <TrackStack.Screen name="TrackListScreen" component={TrackListScreen} />
      <TrackStack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
};

function App() {
  const {state, tryLocalSignin} = useContext(AuthContext);
    
  //When loading the app, check the asyncstorage for a token.
  useEffect(() => {
    tryLocalSignin();
  }, []); 


/*

BIG TODO's:
---------
  - ADD LOADING SCREEN TO HIDE THE SIGNIN SCREEN IN CASE OF AUTOMATIC SIGNING BASED ON STORED TOKEN IN ASYNCSTORAGE 
  - Add SafeAreaView on the Screens
  - 

*/



  return (
       <NavigationContainer>
          {  state.token
              ? <TrackBottomStackScreen />
              : <AuthStackScreen /> }
        </NavigationContainer>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


