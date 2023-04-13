import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>Login</Text>
      <View style={styles.FeildViewStyles}>
        <Foundation style={styles.iconStylesmobile} name="mobile" size={30} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Mobile Number"
        />
      </View>
      <View style={styles.FeildViewStyles}>
        <AntDesign style={styles.iconStyleslock} name="lock" size={30} />
        <TextInput style={styles.inputFeildStyles} placeholder="Password" />
      </View>

      <Text style={styles.forgetPasswordStyles}>Forget Password?</Text>

      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>LOG IN</Text>
      </Pressable>

      <Text style={styles.bottomTextStyles}>
        Don't Have An Account? <Text style={{color: '#ED7421'}}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headingStyles: {
    marginTop: 260,
    textAlign: 'center',
    color: '#ED7421',
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  FeildViewStyles: {
    height: 55,
    marginLeft: 22,
    marginRight: 22,
    marginTop: 30,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFeildStyles: {
    marginLeft: 2,
    width: '80%',
  },
  iconStylesmobile: {
    padding: 10,
  },
  iconStyleslock: {
    padding: 2,
  },
  forgetPasswordStyles: {
    color: '#ED7421',
    marginTop: 31,
    marginLeft: 271,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  buttonStyles: {
    marginLeft: 22,
    marginRight: 22,
    marginTop: 33,
    backgroundColor: '#ED7421',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyles: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  bottomTextStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000000CC',
    marginLeft: 101.5,
    marginRight: 101.5,
    marginTop: 37.5,
  },
});

export {Login};
