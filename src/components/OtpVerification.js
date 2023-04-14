import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import OtpLock from '../images/OtpPageLock.png';

const OtpVerification = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.OtpLockImageStyles} source={OtpLock} />
      <Text style={styles.headingStyle}>OTP VERIFICATION</Text>
      <Text style={styles.numberTextStyle}>
        Code Sent To{' '}
        <Text style={{fontFamily: 'Poppins-Medium', color: '#000'}}>
          +91 8833229798
        </Text>
      </Text>

      <View style={styles.inputFeildsViewStyle}>
        <TextInput style={styles.inputFeildStyle} />
        <TextInput style={styles.inputFeildStyle} />
        <TextInput style={styles.inputFeildStyle} />
        <TextInput style={styles.inputFeildStyle} />
      </View>

      <Text style={styles.resendTextStyles}>
        Didn't Receive Otp ? <Text style={{color: '#ED7421'}}>Resend OTP!</Text>
      </Text>

      <Pressable style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>VERIFY AND PROCEED</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  OtpLockImageStyles: {
    marginTop: 252,
    width: 100,
    height: 100,
  },
  headingStyle: {
    marginTop: 15,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    color: '#ED7421',
  },
  numberTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  inputFeildsViewStyle: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    marginTop: 38,
  },
  inputFeildStyle: {
    borderWidth: 1,
    width: 46,
    borderColor: '#70707080',
    textAlign: 'center',
    color: '#ED7421',
    fontFamily: 'Poppins-Bold',
    textAlignVertical: 'center',
  },
  resendTextStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#242424CC',
    marginTop: 45,
  },
  buttonStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#ED7421',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});

export {OtpVerification};
