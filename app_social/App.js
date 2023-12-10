// App.js

import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './config';  
import { createStackNavigator } from '@react-navigation/stack';

import React, {useState, useEffect} from 'react';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import FrontScreen from './Components/FrontScreen';


const Stack = createStackNavigator();
function  App () {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (loading) setLoading(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (loading) return null;
  if (!user) {
    return (
      
      <Stack.Navigator>
      <Stack.Screen name="FrontScreen" component={FrontScreen} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      

  
    )
};
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />


    </Stack.Navigator>
  );
}


export default ()=>{
  return(
    <NavigationContainer>
    <App />
      
    </NavigationContainer>
  )
};
