/* eslint-disable prettier/prettier */
import React from 'react';
import ButtonComponent from '../component/ButtonComponent';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginLabel}>LOGIN </Text>
      <Text style={styles.inputLabel}>Email : </Text>
      <TextInput style={styles.input} />
      <Text style={styles.passwordLabel}>Password : </Text>
      <TextInput style={styles.input} />
      <Text style={styles.forgotPasswordLabel}>Forgot Password</Text>
      <ButtonComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    // width: 380,
  },
  inputLabel: {
    marginLeft: 10,
    marginTop: 20,
  },
  passwordLabel: {
    marginLeft: 10,
    marginTop: 5,
  },
  forgotPasswordLabel: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
