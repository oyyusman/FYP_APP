import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase_auth } from '../config';
import { firebase_db } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';


const Registration2 = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['English', 'Urdu', 'Spanish', 'French', 'German', 'Japanese']);
  const [items, setItems] = useState([
    { label: 'English', value: 'English' },
    { label: 'Urdu', value: 'Urdu', parent: 'English' },
    { label: 'Spanish', value: 'Spanish', parent: 'English' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German', parent: 'French' },
  ]);


  return (
    <View>
      <Text style={styles.mtext} >What language do you Speak</Text>
      <View style={{
        backgroundColor: '#171717',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 30,
        marginTop: 30,
        shadowColor: '#36485f',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,

      }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}

          theme="DARK"
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Hobbies')} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  mtext: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',

  },
  button: {
        backgroundColor: 'black',
        paddin: 10,
        height: 50,
        borderRadius: 10,
        margin: 14,
        marginTop: 260,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },

})
export default Registration2