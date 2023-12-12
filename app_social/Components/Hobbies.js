import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';



const Hobbies = () => {
    const [selectedButtons, setSelectedButtons] = useState([]);
    const handleButtonPress = (buttonText) => {
        // Check if the button is already selected
        if (selectedButtons.includes(buttonText)) {
            // Button is already selected, remove it from the selectedButtons array
            setSelectedButtons(selectedButtons.filter((button) => button !== buttonText));
        } else {
            // Button is not selected, add it to the selectedButtons array
            setSelectedButtons([...selectedButtons, buttonText]);
        }
    };
    const [selectedButtons1, setSelectedButtons1] = useState([]);
    const handleButtonPress1 = (buttonText1) => {
        // Check if the button is already selected
        if (selectedButtons1.includes(buttonText1)) {
            // Button is already selected, remove it from the selectedButtons array
            setSelectedButtons1(selectedButtons1.filter((button1) => button1 !== buttonText1));
        } else {
            // Button is not selected, add it to the selectedButtons array
            setSelectedButtons1([...selectedButtons1, buttonText1]);
        }
    };
    const [selectedButtons2, setSelectedButtons2] = useState([]);
    const handleButtonPress2 = (buttonText2) => {
        // Check if the button is already selected
        if (selectedButtons2.includes(buttonText2)) {
            // Button is already selected, remove it from the selectedButtons array
            setSelectedButtons2(selectedButtons2.filter((button2) => button2 !== buttonText2));
        } else {
            // Button is not selected, add it to the selectedButtons array
            setSelectedButtons2([...selectedButtons2, buttonText2]);
        }
    };

    const navigation = useNavigation();
  return (
    <View>
          <Text style={styles.mtext} >Add Passion & Interests</Text>
          <View style={styles.m1} >
            <Text style={styles.ntext}>Hobbies and Interests</Text>
              
              <View style={styles.inputcontainer2}>
                  <TouchableOpacity style={[styles.t1, selectedButtons.includes('Button 1') && styles.selectedButton]}
                      onPress={() => handleButtonPress('Button 1')}
                  >
                      <Text>Sports</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity style={[styles.t1, selectedButtons.includes('Button 2') && styles.selectedButton]}
                      onPress={() => handleButtonPress('Button 2')}
                  >
                      <Text>Technology</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons.includes('Button 3') && styles.selectedButton]}
                      onPress={() => handleButtonPress('Button 3')}
                  >
                      <Text>fashion</Text>
                  </TouchableOpacity>  

                </View>
              <View style={styles.inputcontainer2}>
                  <TouchableOpacity style={[styles.t1, selectedButtons.includes('Button 4') && styles.selectedButton]}
                      onPress={() => handleButtonPress('Button 4')}
                  >
                      <Text>travelling</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons.includes('Button 5') && styles.selectedButton]}
                      onPress={() => handleButtonPress('Button 5')}
                  >
                      <Text>Reading</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons.includes('Button 6') && styles.selectedButton]}
                      onPress={() => handleButtonPress('Button 6')}
                  >
                      <Text>painting</Text>
                  </TouchableOpacity>

              </View>
              
          </View>
          <View style={styles.m1} >
              <Text style={styles.ntext}>Personality and Mood</Text>

              <View style={styles.inputcontainer2}>
                  <TouchableOpacity style={[styles.t1, selectedButtons1.includes('Button 1') && styles.selectedButton]}
                      onPress={() => handleButtonPress1('Button 1')}
                  >
                      <Text>Adventure</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons1.includes('Button 2') && styles.selectedButton]}
                      onPress={() => handleButtonPress1('Button 2')}
                  >
                      <Text>Funny</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons1.includes('Button 3') && styles.selectedButton]}
                      onPress={() => handleButtonPress1('Button 3')}
                  >
                      <Text>Caring</Text>
                  </TouchableOpacity>

              </View>
              <View style={styles.inputcontainer2}>
                  <TouchableOpacity style={[styles.t1, selectedButtons1.includes('Button 4') && styles.selectedButton]}
                      onPress={() => handleButtonPress1('Button 4')}
                  >
                      <Text>Energetic</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons1.includes('Button 5') && styles.selectedButton]}
                      onPress={() => handleButtonPress1('Button 5')}
                  >
                      <Text>Charming</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons1.includes('Button 6') && styles.selectedButton]}
                      onPress={() => handleButtonPress1('Button 6')}
                  >
                      <Text>dashing</Text>
                  </TouchableOpacity>

              </View>

          </View>
          <View style={styles.m1} >
              <Text style={styles.ntext}>Skills</Text>

              <View style={styles.inputcontainer2}>
                  <TouchableOpacity style={[styles.t1, selectedButtons2.includes('Button 1') && styles.selectedButton]}
                      onPress={() => handleButtonPress2('Button 1')}
                  >
                      <Text>Tech</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons2.includes('Button 2') && styles.selectedButton]}
                      onPress={() => handleButtonPress2('Button 2')}
                  >
                      <Text>Art</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons2.includes('Button 3') && styles.selectedButton]}
                      onPress={() => handleButtonPress2('Button 3')}
                  >
                      <Text>Sales</Text>
                  </TouchableOpacity>

              </View>
              <View style={styles.inputcontainer2}>
                  <TouchableOpacity style={[styles.t1, selectedButtons2.includes('Button 4') && styles.selectedButton]}
                      onPress={() => handleButtonPress2('Button 4')}
                  >
                      <Text>Design</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons2.includes('Button 5') && styles.selectedButton]}
                      onPress={() => handleButtonPress2('Button 5')}
                  >
                      <Text>Business</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.t1, selectedButtons2.includes('Button 6') && styles.selectedButton]}
                      onPress={() => handleButtonPress2('Button 6')}
                  >
                      <Text>Graphics</Text>
                  </TouchableOpacity>

              </View>

          </View>
          <TouchableOpacity onPress={() => (navigation.navigate('Explore'))} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    mtext: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',

    },
    t1: {
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 10,
        backgroundColor: '#C4C0BF', // Change the background color when selected
        borderColor: '#C4C0BF', // Change the border color when selected
        borderRadius: 10,
        borderWidth: 10,
        width: 100,


    },
    button: {
        backgroundColor: 'black',
        paddin: 10,
        height: 50,
        borderRadius: 10,
        margin: 14,
        marginTop: 28,
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
    selectedButton: {
        backgroundColor: '#32ABAB', // Change the color to the desired selected color
        borderColor: '#32ABAB', 
    },
    inputcontainer2: {
        flexDirection: 'row',
        height: 48,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        borderRadius: 10,
        marginHorizontal: 8,
        marginTop: 20,
    },
    ntext:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black',
        marginTop: 4,
        marginHorizontal: 20,
    },
    m1:{
        marginTop: 10,
        marginHorizontal: 20,

        

    },
})
    

export default Hobbies