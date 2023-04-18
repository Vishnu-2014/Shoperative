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
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.FeildViewStyles}>
        <AntDesign style={styles.iconStyleslock} name="lock" size={25} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Password"
          secureTextEntry={true}
        />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyles: {
    color: '#ED7421',
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  FeildViewStyles: {
    height: 50,
    width: '90%',
    marginTop: 15,
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
    width: '90%',
    marginTop: 60,
    backgroundColor: '#ED7421',
    height: 50,
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
    marginTop: 30,
  },
});

export {Signup};
