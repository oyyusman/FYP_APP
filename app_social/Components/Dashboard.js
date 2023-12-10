import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import { firebase} from '../config';


const Dashboard = () => {
    const [user, setUser] = useState('');
    
    //  change password
    const changepassword=()=>{
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
        .then(()=>{
            Alert.alert('Password reset email sent')
        })
        .catch((error)=>{
            Alert.alert(error.message)
        })
    }

    // forget password
    

    useEffect(() => {

        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then((documentSnapshot)=>{
            if(documentSnapshot.exists){
                setUser(documentSnapshot.data())
            }
            else{
                console.log('user does not exist')
            }

            
        })

    }, [])


    return(
        <SafeAreaView>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#0FA055'}}>
        <Text style={{fontSize:20,color:'white'}}>Welcome {user.name}</Text>
        <TouchableOpacity onPress={()=> {firebase.auth().signOut()}}>
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