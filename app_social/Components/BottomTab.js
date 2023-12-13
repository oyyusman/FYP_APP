import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library



const BottomTab = () => {
    return (
        <View>
        <TouchableOpacity>
                <Icon name="envelope-o" size={18} color="black" style={styles.icon} />
        </TouchableOpacity>

        </View>
    )
}
const styles=StyleSheet.create({})
    
export default BottomTab