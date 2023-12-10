import { View, Text,TouchableOpacity,TextInput,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const FrontScreen = () => {
        const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.picContainer}>
            <Image source={require('../pictures/fyp1.jpg')} />
            <Text style={styles.ttext}>Connects with Friends</Text>
            <Text style={styles.ttext}>and Family</Text>
            <Text style={styles.ftext}>Connecting with family and friends</Text>
            <Text style={styles.dtext}>from all over the world</Text>
        <View style={styles.bcontainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('Registration')} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
      </View>
      





        </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F6',
    },
    ttext:{
        fontWeight:'bold',
        fontSize:23,
        marginLeft:30,
        fontFamily:'normal'
    },
    ftext:{
        fontSize:14,
        marginLeft:30,
        fontFamily:'normal',
        marginTop:10

   },
    dtext:{
         fontSize:14,
         marginLeft:30,
         fontFamily:'normal'

    },
    picContainer:{
    alignSelf: 'stretch',
    marginBottom: 60,
    flex: 1,
    justifyContent: 'center', // Center vertically
    // alignItems: 'center', // Center horizontally
          
    },
    bcontainer:{
     marginTop:60
     
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
  });

export default FrontScreen