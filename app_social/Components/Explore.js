import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Searchbar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
                        <Text style={{ marginLeft: 20, marginTop: 10 }}>John William</Text>
                        <Text style={{ marginLeft: 20, marginTop: 10 }}>Urdu</Text>
                    </View>
                    <TouchableOpacity style={styles.b1}>
                        <Text style={styles.f1} >Follow</Text>
                    </TouchableOpacity>

                </View>
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
        // marginTop: 30,
    },
    img: {
        width: 80,
        height: 80,
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