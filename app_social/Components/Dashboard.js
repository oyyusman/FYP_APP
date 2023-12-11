// import { View, Text,SafeAreaView,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
// import React, {useState,useEffect} from 'react'
// import {firebase_auth} from '../config';
// import { firebase_db } from '../config';
// import { doc,getDoc} from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import DateTimePicker from '@react-native-community/datetimepicker';



// const Dashboard = () => {
//   const navigation = useNavigation();
//   const [selectedButton,setSelectedButton]=useState(null);

//   const handleButtonPress = (button) => {
//     setSelectedButton(button);
//   };
//   const DatePickerExample = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   }

//   const handleDateChange = (event, date) => {
//     setShowDatePicker(Platform.OS === 'ios'); // On iOS, use the native date picker
//     if (date) {
//       setSelectedDate(date);
//     }
//   };

//   const showDatePickerModal = () => {
//     setShowDatePicker(true);
//   };
 



//   return(
//         <View>
//           <Text style={styles.mtext}>Lets set You up</Text>
//           <View style={styles.mcontainer}>
//           <View style={styles.inputcontainer} >
//         <TextInput
//          style={styles.input}
//               placeholder="Enter your name"
//               keyboardType="default" // This sets the keyboard to email input type
//               autoCapitalize="none" // Prevents automatic capitalization of the first letter
//               // onChangeText={(email)=>setEmail(email)}
//               autoCorrect={false} 
//             />

//       </View>
//       <View style={styles.inputcontainer2} >
//                <TouchableOpacity style={[styles.t1, selectedButton === 'Male' && styles.selectedButton]}
//         onPress={() => handleButtonPress('Male')}>
//                 <Text>Male</Text>
//                </TouchableOpacity>
//                <TouchableOpacity style={[styles.t1, selectedButton === 'Female' && styles.selectedButton]}
//         onPress={() => handleButtonPress('Female')}>
//                 <Text>Female</Text>
//                </TouchableOpacity>
//                <TouchableOpacity style={[styles.t1, selectedButton === 'Other' && styles.selectedButton]}
//         onPress={() => handleButtonPress('Other')}>
//                 <Text>Other</Text>
//                </TouchableOpacity>
//       </View>
//       <View style={styles.inputcontainer2} >
//             <TouchableOpacity onPress={showDatePickerModal}>
//         <Text style={styles.label}>Select Date</Text>
//       </TouchableOpacity>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
//           onChange={handleDateChange}
//         />
//       )}
//       <Text style={styles.label}>Selected Date: {selectedDate.toDateString()}</Text>
        



//       </View>

//           </View>
//         </View>
//     )



 
// }
// const styles = StyleSheet.create({
//   mtext:{
//     marginTop: 100,
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'black',

//   },
//   selectedButton: {
//     backgroundColor: '#32ABAB', // Change the background color when selected
//     borderColor: '#32ABAB', // Change the border color when selected
//     borderRadius: 10,
//     borderWidth: 8,

//   },
//   mcontainer:{
//     marginTop: 80,
    
    
//   },
//   inputcontainer: {
//             flexDirection: 'row',
//             alignItems:'center',
//             borderBottomWidth: 1,
//             borderColor: 'black',
//             borderTopWidth:1,
//             borderLeftWidth:1,
//             borderRightWidth:1,
//             borderRadius:10,
//             marginHorizontal: 8,
//           },
//   inputcontainer2:{
//     flexDirection: 'row',
//     height:48,
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     alignItems:'center',
//     borderTopWidth:1,
//     justifyContent:'space-between',
//     borderLeftWidth:1,
//     borderRightWidth:1,
//     borderRadius:10,
//     marginHorizontal: 8,
//     marginTop: 24,
// },
// t1:{
//   alignItems:'center',
//   justifyContent:'space-between',
//   marginHorizontal: 40,


// },


// })

// export default Dashboard