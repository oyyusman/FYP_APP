import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Searchbar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library

import BottomTab from './BottomTab'

const Explore = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.mtext} >People Nearby</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <View>
                <View style={styles.m1} >
                    <Image style={styles.img} source={require('../pictures/m1.jpg')} />
                    <View>
                        <Text style={{ marginLeft: -30, marginTop: 10, color: 'black' }}>John William</Text>
                        <Text style={{ marginLeft: -30, marginTop: 10 }}>English</Text>
                    </View>
                    <TouchableOpacity style={styles.b1}>
                        <Text style={styles.f1} >Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.m1} >
                    <Image style={styles.img} source={require('../pictures/m2.jpg')} />
                    <View>
                        <Text style={{ marginLeft: -30, marginTop: 10, color: 'black' }}>Ian Smith</Text>
                        <Text style={{ marginLeft: -30, marginTop: 10 }}>Spanish</Text>
                    </View>
                    <TouchableOpacity style={styles.b1}>
                        <Text style={styles.f1} >Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.m1} >
                    <Image style={styles.img} source={require('../pictures/m4.jpg')} />
                    <View>
                        <Text style={{ marginLeft: -30, marginTop: 10, color: 'black' }}>philp Huges</Text>
                        <Text style={{ marginLeft: -30, marginTop: 10 }}>Greek</Text>
                    </View>
                    <TouchableOpacity style={styles.b1}>
                        <Text style={styles.f1} >Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.m1} >
                    <Image style={styles.img} source={require('../pictures/m6.jpeg')} />
                    <View>
                        <Text style={{ marginLeft: -30, marginTop: 10, color: 'black' }}>Muhammad Ali</Text>
                        <Text style={{ marginLeft: -30, marginTop: 10 }}>Urdu</Text>
                    </View>
                    <TouchableOpacity style={styles.b1}>
                        <Text style={styles.f1} >Follow</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Icon name="home" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="envelope-o" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="plus" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="user" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('ChatBot')}>
                    <Icon name="edit" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mtext: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,

    },
    m1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        // backgroundColor: '#171717',
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 2,
        marginTop: 20,
    },
    bottom: {
        backgroundColor: '#D4C9C7',
        marginTop: 120,
        height: 1000,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black",
        marginTop: 20,
        marginLeft: 20,
    },
    f1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    b1: {
        backgroundColor: 'black',
        paddin: 10,
        height: 30,
        borderRadius: 10,
        margin: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        marginLeft: 20,
    },
})

export default Explore