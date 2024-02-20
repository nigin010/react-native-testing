/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const ButtonComponent = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
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
    margin: 11,
    width: 300,
  },
});

export default ButtonComponent;
