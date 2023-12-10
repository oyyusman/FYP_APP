// App.js

import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './config';  
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './config'

import React, {useState, useEffect} from 'react';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import FrontScreen from './Components/FrontScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './Components/OnboardingScreen';
import { firebase_auth } from './config';


const Stack = createStackNavigator();
function  App () {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch]=useState(null);
  const auth = firebase_auth;

  // useEffect(()=>{
  //   AsyncStorage.getItem('alreadyLaunched').then(value=>{
  //     if(value==null){
  //       AsyncStorage.setItem('alreadyLaunched','true');
  //       setIsFirstLaunch(true);
  //     }
  //     else{
  //       setIsFirstLaunch(false);
  //     }
  //   })
  // },[]
  // )
  // if(isFirstLaunch===null){
  //   return null;
  // }
//   else if(isFirstLaunch===true){
//     return(
//       <Stack.Navigator>
//       <Stack.Screen name="Onboarding"  options={{ headerShown: false }} component={OnboardingScreen} />

//       <Stack.Screen name="FrontScreen"  options={{ headerShown: false }} component={FrontScreen} />

//       <Stack.Screen name="Login" options={{ headerShown: false, }} component={Login} />
//       <Stack.Screen name="Registration" options={{ headerShown: false, }} component={Registration} />
//       <Stack.Screen name="Dashboard" options={{ headerShown: false, }} component={Dashboard} />
//       </Stack.Navigator>

//     )
//   }
//   else{
//     return(<Login/>
// )
//   }


  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (loading) setLoading(false);
  }
  useEffect(() => {
    const subscriber =auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (loading) return null;
  if (!user) {
    return (
      
      <Stack.Navigator>
      <Stack.Screen name="Onboarding"  options={{ headerShown: false }} component={OnboardingScreen} />

      <Stack.Screen name="FrontScreen"  options={{ headerShown: false }} component={FrontScreen} />

      <Stack.Screen name="Login" options={{ headerShown: false, }} component={Login} />
      <Stack.Screen name="Registration" options={{ headerShown: false, }} component={Registration} />
      <Stack.Screen name="Dashboard" options={{ headerShown: false, }} component={Dashboard} />
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
