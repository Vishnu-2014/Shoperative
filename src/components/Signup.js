import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>SIGN UP</Text>

      <View style={styles.FeildViewStyles}>
        <AntDesign style={styles.iconStylesUser} name="user" size={25} />
        <TextInput style={styles.inputFeildStyles} placeholder="Full Name" />
      </View>

      <View style={styles.FeildViewStyles}>
        <Foundation style={styles.iconStylesmobile} name="mobile" size={30} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Mobile Number"
        />
      </View>
      <View style={styles.FeildViewStyles}>
        <AntDesign style={styles.iconStyleslock} name="lock" size={25} />
        <TextInput style={styles.inputFeildStyles} placeholder="Password" />
      </View>

      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>SIGN UP</Text>
      </Pressable>

      <Text style={styles.bottomTextStyles}>
        Already Have An Account? <Text style={{color: '#ED7421'}}>Login</Text>
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
    color: '#ED7421',
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  FeildViewStyles: {
    height: 55,
    marginLeft: 22,
    marginRight: 22,
    marginTop: 17.3,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFeildStyles: {
    marginLeft: 2,
    width: '80%',
  },
  iconStylesUser: {
    padding: 5,
  },
  iconStylesmobile: {
    padding: 10,
  },
  iconStyleslock: {
    padding: 2,
  },
  buttonStyles: {
    marginLeft: 22,
    marginRight: 22,
    marginTop: 60,
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
    marginTop: 29.5,
  },
});

export {Signup};
