import { View, Text,TouchableOpacity,TextInput,StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import { firebase } from '../config';
import {auth} from '../config'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase_auth } from '../config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = firebase_auth;
    const forgetpassword=()=>{
         auth.sendPasswordResetEmail(auth.currentUser.email)
        .then(()=>{
            Alert.alert('Password reset email sent')
        })
        .catch((error)=>{
            Alert.alert(error.message)
        })
    }

    const loginUser= async(email,password)=>{
        try{
            await signInWithEmailAndPassword(auth,email,password);
        }catch(error){
            Alert.alert(error.message);
        }


    }
    return (
        <View style={styles.container}>
      <Text style={styles.mtext}>Welcome Back👋</Text>
      <Text style={styles.dtext} >Please Enter your Email and Password to Sign in</Text>
      <View style={styles.mContainer}>
      <Text style={styles.label}>Email Address</Text>
      <View style={styles.inputcontainer} >
        <TextInput
         style={styles.input}
  placeholder="Enter your email"
  keyboardType="email-address" // This sets the keyboard to email input type
  autoCapitalize="none" // Prevents automatic capitalization of the first letter
  onChangeText={(email)=>setEmail(email)}
  autoCorrect={false} 
 />
           <Icon name="envelope-o" size={18} color="#0FA055" style={styles.icon} />

      </View>
      
      </View>
      <View style={styles.dContainer} >
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputcontainer} >
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true} // Mask the text for password input
        keyboardType="default" // Use the default keyboard type
        onChangeText={(password)=>setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
       />
       <Icon name="eye-slash" size={18} color="#0FA055" style={styles.icon2} />

      </View>
      <TouchableOpacity>
                <Text style={styles.fpassword}> forget Password?</Text>
            </TouchableOpacity>

      
    </View>
    <TouchableOpacity  onPress={() => loginUser(email,password)} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Registration')} style={styles.button}>
                    <Text style={styles.buttonText}> Register</Text>
    </TouchableOpacity>
    
    {/* <Text style={styles.faccount}></Text> </Text> */}


    </View>


) 
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    mContainer:{
        marginHorizontal:10,
        marginVertical:20

    },
    dContainer:{
        marginHorizontal:10,
        marginVertical:8
    },
    mtext:{
        fontWeight:"bold",
        color:'#010C06',
        fontSize:20,
        marginTop:140,
        marginLeft:20

    },
    button: {
        backgroundColor: 'black',
        paddin: 10,
        height:50,
        borderRadius: 10,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
        
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center',
        alignItems:'center'
      },
    fpassword:{
            textAlign:'right',
            marginRight:4,
            color:'#0FA055'
    },
    
        inputcontainer: {
            flexDirection: 'row',
            alignItems:'center',
            borderBottomWidth: 1,
            borderColor: '#0FA055',
          },
          icon: {
            marginLeft: 190,
            textAlign:'right',
          },
          icon2:{
            marginLeft: 165,
            textAlign:'right',
          },
          input: {
            flex: 1,
            // height: 10,
            paddingLeft: 10,
            borderColor: 'gray',
            borderWidth: 1, 
            
            backgroundColor:'#C9D0CC',
            borderRadius:10
          },

    
    faccount:{
        textAlign:'center',
        marginTop:10,
   },
   Naccount:{
    color:'#0FA055'
},
    dtext:{
        marginLeft:20,
        marginTop:10

    },
    label:{
        fontSize: 16,
    // marginBottom: 4,
    marginLeft:2
  },
  input: {
    

  
    }

})


export default Login