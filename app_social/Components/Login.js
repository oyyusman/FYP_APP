import { View, Text,TouchableOpacity,TextInput,StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import { firebase } from '../config';
import {auth} from '../config'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase_auth } from '../config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin'; 


const Login = () => {
    
GoogleSignin.configure({
  webClientId: '923806776471-ddnu2kcpcrrrp56qbpc6jch502oq4kc0.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
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
      <View style={styles.inputcontainer} >
        <TextInput
         style={styles.input}
  placeholder="Enter your email"
  keyboardType="email-address" // This sets the keyboard to email input type
  autoCapitalize="none" // Prevents automatic capitalization of the first letter
  onChangeText={(email)=>setEmail(email)}
  autoCorrect={false} 
 />
<Icon name="envelope-o" size={18} color="black" style={styles.icon} />

      </View>
      
      </View>
      <View style={styles.dContainer} >
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
       <Icon name="eye-slash" size={18} color="black" style={styles.icon2} />

      </View>
      <TouchableOpacity onPress={()=>forgetpassword()}>
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
            color:'black',
            textDecorationLine:'underline',
        
    },
  inputcontainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
    shadowColor: '#36485f',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
    color: '#36485f',
  },
          icon: {
            marginLeft: 160,
            // textAlign:'right',
          },
          icon2:{
            marginLeft: 155,
            // textAlign:'right',
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