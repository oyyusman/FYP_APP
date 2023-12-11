import { View, Text,TouchableOpacity,TextInput,StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase_auth } from '../config';
import { firebase_db } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Registration = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    registerUser= async (email,password)=>{
        if(password!==confirmPassword){
            Alert.alert('Password does not match')
            return
        }
        await createUserWithEmailAndPassword(firebase_auth,email,password)
        .then(()=>{
            firebase_auth.currentUser.sendEmailVerification({
                handleCodeInApp:true,
                url:'https://test-661bc.firebaseapp.com',

            })
            .then(()=>{ 
                Alert.alert('A verification link has been sent to your email')

            }).catch((error)=>{
                Alert.alert(error.message)
            })
            .then(()=>{
                firebase_db.collection('users')
                .doc(firebase_auth.currentUser.uid)
                .set({
                    password,
                    email,
                
                })
            })
            .catch((error)=>{
                Alert.alert(error.message)
            })
                


            
        })
        .catch((error)=>{
            Alert.alert(error.message)
        })
        
    }
    return(
        <View style={styles.container}>
        
      <Text style={styles.mtext}>Hello There👋</Text>
      <Text style={styles.dtext} >Please Enter your Details to Create an Account</Text>
      <View style={styles.mContainer}>
      <View style={styles.inputcontainer} >
        <TextInput
         style={styles.input}
  placeholder="Enter your email"
  keyboardType="email-address" // This sets the keyboard to email input type
  autoCapitalize="none" // Prevents automatic capitalization of the first letter
    autoCorrect={false}
    onChangeText={(email)=>setEmail(email)}
 />

      </View>
      
      </View>
      <View style={styles.dContainer} >
      <View style={styles.inputcontainer} >
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true} // Mask the text for password input
        keyboardType="default" // Use the default keyboard type
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(password)=>setPassword(password)}
       />

      </View>
    </View>
     <View style={styles.dContainer} >
      <View style={[styles.inputcontainer, { borderColor: confirmPassword === password ? 'black' : 'red' }]} >
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true} // Mask the text for password input
        keyboardType="default" // Use the default keyboard type
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}       />

      </View>
      {confirmPassword !== password && (
          <Text style={{ color: 'red', marginTop: 5 }}>Passwords do not match</Text>
        )}
    </View>
    <TouchableOpacity  onPress={() => registerUser(email,password)} style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.faccount}>Already Have an account? <Text style={styles.Naccount} >Sign up</Text> </Text>
     </TouchableOpacity>


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
        marginTop:60,
        marginLeft:20

    },
    inputcontainer1: {
        width: '18%', // Adjust the width as needed
        height:50,
        borderRadius: 20, // Adjust the borderRadius to make it round
        borderWidth: 1,
        borderColor: 'gray',
        color:'',
        margin:10,
        padding: 10,

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
            color:'black'
    },
    
        inputcontainer: {
            flexDirection: 'row',
            alignItems:'center',
            borderBottomWidth: 1,
            borderTopWidth:1,
            borderLeftWidth:1,
            borderRightWidth:1,
            borderRadius:10,
            borderColor: 'black',
          },
        
          icon: {
            marginLeft: 190,
            textAlign:'right',
          },
          icon2:{
            marginLeft: 10,
            textAlign:'right',
          },
          input: {
            flex: 1,
            // height: 10,
            paddingLeft: 10,
            borderColor: 'gray',
            borderWidth: 1, 
            
            backgroundColor:'black',
            borderRadius:10
          },

    
    faccount:{
        textAlign:'center',
        marginTop:10,
        fontSize:14,
   },
   Naccount:{
    color:'black',
    fontSize:14,
    fontWeight:'bold',
    textDecorationLine:'underline',
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

export default Registration