import { View, Text,TouchableOpacity,TextInput,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library


const FrontScreen = () => {
        const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.picContainer}>
            <Image source={require('../pictures/f1jpg.jpg')} style={{width:'100%', height:"50%",marginTop:30}} />
            <Text style={styles.ttext}>Connect.Translate.Bridge</Text>
            {/* <Text style={styles.ttext}>and Family</Text> */}
            {/* <Text style={styles.dtext}>from all over the world</Text> */} 
        <View style={styles.bcontainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('Registration')} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.ftext}>-------------------- or ------------------------</Text> 
            <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={styles.button1}>
              <View style={styles.gcontainer}>
                {/* <Icon name="google-plus" size={20} color="black" style={styles.icon} /> */}
                <Text style={styles.buttonText1}>Login </Text>

              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={styles.b1}>
                    <Text style={styles.buttonText3}>Already have an Account?Login</Text>
            </TouchableOpacity> */}
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
        marginTop:10,
        fontFamily:'normal',
        color:'black'
    },
    ftext:{
        fontSize:14,
        marginLeft:30,
        fontFamily:'normal',
        marginTop:10,
        textAlign:'center'

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
     marginTop:20
     
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
    b1:{
     backgroundColor: 'white',
     color:'black',
      paddin: 10,
      height:50,
      borderRadius: 10,
      margin:10,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText3:{
     color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      // marginLeft:20,
      textAlign:'center',
      alignItems:'center'
    },
    
    button1:{
    backgroundColor: 'white',
      paddin: 10,
      height:50,
      borderRadius: 10,
      borderColor:'black',
      borderWidth:2,
      margin:10,
      alignItems:'center',
      justifyContent:'center'},

      gcontainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'

      },
    buttonText1: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      // marginLeft:20,
      textAlign:'center',
      alignItems:'center'
    },
    icon:{
        marginRight:60,
        marginLeft:-70},
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign:'center',
      alignItems:'center'
    },

  });

export default FrontScreen