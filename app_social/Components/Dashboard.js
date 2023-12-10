import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import {firebase_auth} from '../config';
import { firebase_db } from '../config';
import { doc,getDoc} from 'firebase/firestore';

const Dashboard = () => {
    const [user, setUser] = useState('');
    
    //  change password
    const changepassword=()=>{
        firebase_auth.sendPasswordResetEmail(firebase_auth.currentUser.email)
        .then(()=>{
            Alert.alert('Password reset email sent')
        })
        .catch((error)=>{
            Alert.alert(error.message)
        })
    }

    // forget password
    

    useEffect(() => {

        const userRef = doc(firebase_db, 'users', firebase_auth.currentUser.uid);

getDoc(userRef)
  .then((querySnapshot) => {
    if (querySnapshot.exists()) {
      setUser(querySnapshot.data());
    } else {
      console.log('User does not exist');
    }
  })
  .catch((error) => {
    console.error('Error fetching user data:', error.message);
  });

    }, [])


    return(
        <SafeAreaView>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#0FA055'}}>
        <Text style={{fontSize:20,color:'white'}}>Welcome {user.name}</Text>
        <TouchableOpacity onPress={()=> {firebase_auth.signOut()}}>
        <Text style={{fontSize:20,color:'white'}}>Logout</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Welcome to the Dashboard</Text>
        </View>
        </SafeAreaView>
    )



 
}

export default Dashboard