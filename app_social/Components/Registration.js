import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { firebase } from '../config';
import LinearGradient from 'react-native-linear-gradient';
import { firebase_auth } from '../config';
import { firebase_db } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');



    registerUser = async (email, password, name) => {

        if (password !== repeatPassword) {
            Alert.alert('Passwords do not match');
            return;
        }
        await createUserWithEmailAndPassword(firebase_auth, email, password)
            .then(() => {
                firebase_auth.currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://test-661bc.firebaseapp.com',

                })
                    .then(() => {
                        Alert.alert('A verification link has been sent to your email')

                    }).catch((error) => {
                        Alert.alert(error.message)
                    })
                    .then(() => {
                        firebase_db.collection('users')
                            .doc(firebase_auth.currentUser.uid)
                            .set({
                                name,
                                email,
                            })
                    })
                    .catch((error) => {
                        Alert.alert(error.message)
                    })



            })
            .catch((error) => {
                Alert.alert(error.message)
            })

    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Create Account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#8e93a1"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={setName}
                />
                <Icon name="user" size={18} color="black" style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#8e93a1"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setEmail}
                />
                <Icon name="envelope" size={18} color="black" style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#8e93a1"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setPassword}
                />
                <Icon name="lock" size={18} color="black" style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Repeat Password"
                    placeholderTextColor="#8e93a1"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setRepeatPassword}
                />
                <Icon name="lock" size={18} color="black" style={styles.icon} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={registerUser} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff', // Set your desired background color
    },
    headerText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700',
        // Adjust the weight as needed
        marginBottom: 50,

    },
    inputContainer: {
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
        marginLeft: 10,
    },
    button: {
        width: '100%', // Full width of the screen container
        backgroundColor: '#000', // Button color
        padding: 12, // Button size
        borderRadius: 30, // Rounded corners
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        // Spacing from the last element
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 4.65, // Shadow spread
        elevation: 4, // Elevation for Android
    },
    buttonText: {
        color: '#fff', // Text color
        fontSize: 18, // Text size
        fontWeight: '600', // Text weight
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust this to increase or decrease space below the button
    },
    footerText: {
        fontSize: 14,
        color: '#8e93a1',
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b5998',
        marginLeft: 5,
    },


});

export default Registration;