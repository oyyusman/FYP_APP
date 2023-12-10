import { View, Text,TouchableOpacity,TextInput,StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase } from '../config';
import { firebase_auth } from '../config';
import { firebase_db } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); 
    const [phone, setPhone] = useState('');
    

    registerUser= async (email,password,name,phone)=>{
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
                    name,
                    email,
                    phone,
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
      <Text style={styles.label}>Name</Text>
      <View style={styles.inputcontainer} >
        <TextInput
         style={styles.input}
  placeholder="Enter your Name"
  keyboardType="email-address" // This sets the keyboard to email input type
  autoCapitalize="none" // Prevents automatic capitalization of the first letter
  autoCorrect={false}
  onChangeTextT={(name)=>setName(name)}
 />

      </View>
      
      </View>
      <View style={styles.mContainer}>
      <Text style={styles.label}>Email Address</Text>
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
      <View style={styles.mContainer}>
      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.inputcontainer} >
        <TextInput
         style={styles.input}
  placeholder="Enter your phone number"
  keyboardType="numeric" // This sets the keyboard to email input type
  autoCapitalize="none" // Prevents automatic capitalization of the first letter
    autoCorrect={false}
    onChangeText={(phone)=>setPhone(phone)}
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
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(password)=>setPassword(password)}
       />

      </View>
    </View>
    <TouchableOpacity  onPress={() => registerUser(email,password,name,phone)} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
    <Text style={styles.faccount}>Already Have an account<Text style={styles.Naccount} >Sign up</Text> </Text>


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
        backgroundColor: '#0FA055',
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

export default Registration