import { View, Text,Button,StyleSheet,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {
    const navigation = useNavigation();
    const Dots = ({selected}) => {
        let backgroundColor;
        backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
        return(
            <View
            style={{
                width:6,
                height:6,
                marginHorizontal:3,
                backgroundColor
            }}
            />
        );
    }
    const Skip = ({...props}) => (
        <Button
        title='Skip'
        color='#000000'
        {...props}
    
        />
    );
    const Next = ({...props}) => (
        <Button
        title='Next'
        color='#000000'
        {...props}
    
        />
    );
    const Done = ({...props}) => (
        <Button
        title='Done'
        color='#000000'
        {...props}
    
        />
    );



  return (
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={() => navigation.replace("FrontScreen")}
    onDone={() => navigation.navigate("FrontScreen")}
    contentContainerStyles={{ paddingBottom: 600 }}

  pages={[
    {
      backgroundColor: '#FAF8F7',
      title: 'Connect with family and friends around the world with Social App',
      image: <Image source={require('../pictures/f3.png')} style={{width:'100%',height:'60%'}} />,
      titleStyles: {fontSize:18 , }, // overwrite default color

    },
    {
      backgroundColor: '#FAF8F7',
      image: <Image source={require('../pictures/f14.png')} style={{width:'100%',height:'60%'}} />,
      title: 'Realtime Chat with your friends and family with Social App',
      titleStyles: {fontSize:18 }, // overwrite default color
    },
    {
      backgroundColor: '#FAF8F7',
      image: <Image source={require('../pictures/f15.jpg')} style={{width:'100%',height:'60%'}} />,
      title: 'Connect with family and friends around the world with Social App',
      titleStyles: {fontSize:18 }, // overwrite default color
    },
    
  ]}
      bottomBarHighlight={false}
      bottomBarHeight={100}


      

      
      

/>
  )
}

export default OnboardingScreen