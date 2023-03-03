import { SafeAreaView, Text, View, StyleSheet, Image, Animated} from "react-native";
import React, {useState, useEffect, useRef} from 'react';

const HomeScreen = () => {
const [name, setName] = useState('Thomas')
const spinValue = useRef(new Animated.Value(0)).current;


useEffect(() => {
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1, 
        duration: 2000,
        useNativeDriver: true,
      }
    )
  ).start();
}, [spinValue]);

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
  return (
    <SafeAreaView style={styles.container}>
    <Text onPress={() => setName(name== 'Thomas'? 'Jean' : 'Thomas')} style={styles.text}>PROJET REACT NATIVE : {name} </Text>
    <Animated.Image
        style={[styles.image, { transform: [{ rotate: spin }] }]}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png'}}
      />
      <Text>COUCOU</Text>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    marginTop: 20,
    width: 140,
    height: 130,
    
  },
});

export default HomeScreen;