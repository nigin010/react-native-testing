/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ButtonComponent = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState<number>(0);

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log("You Have Clicked " + count + " Times!")
    navigation.navigate('LandingPage', {});
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#24a0ed',
    padding: 10,
    margin: 20,
    // width: 380,
  },
});

export default ButtonComponent;
