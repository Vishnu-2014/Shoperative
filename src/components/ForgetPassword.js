import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>Forget Password</Text>
      <View style={styles.FeildViewStyles}>
        <Foundation style={styles.iconStylesmobile} name="mobile" size={30} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Mobile Number"
          keyboardType="number-pad"
        />
      </View>

      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>SEND OTP</Text>
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyles: {
    textAlign: 'center',
    color: '#ED7421',
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
  },
  FeildViewStyles: {
    height: 50,
    width: '90%',
    marginTop: 30,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFeildStyles: {
    marginLeft: 2,
    width: '80%',
    fontFamily: 'Poppins-Medium',
  },
  iconStylesmobile: {
    padding: 10,
  },
  buttonStyles: {
    width: '90%',
    marginTop: 33,
    backgroundColor: '#ED7421',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyles: {
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  bottomTextStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000000CC',
    marginTop: 37.5,
  },
});

export {ForgetPassword};
