import { View, Text,TouchableOpacity,TextInput,StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase_auth } from '../config';
import { firebase_db } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Registration2 = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the registration</Text>
    </View>
  )
}

export default Registration2