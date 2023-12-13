import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 'one',
    title: 'Connect with family and friends around the world with Social App',
    image: require('../pictures/f3.png'),
  },
  {
    key: 'two',
    title: 'Realtime Chat with your friends and family with Social App',
    image: require('../pictures/f14.png'),
  },
  {
    key: 'three',
    title: 'Enjoy connecting in a whole way',
    image: require('../pictures/f15.jpg'),
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [showHomePage, setShowHomePage] = React.useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the onboarding. Navigate to your main screen here
    navigation.navigate("FrontScreen");
  };


  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      showSkipButton={true}
      onSkip={_onDone}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      buttonTextStyle={styles.buttonText}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF8F7',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  title: {
    paddingTop: 25,
    fontSize: 18,
    color: '#21465b',
    textAlign: 'center',
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  activeDotStyle: {
    backgroundColor: '#21465b',
  },
  buttonText: {
    color: '#000000',
  },
});

export default OnboardingScreen;
