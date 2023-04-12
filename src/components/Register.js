import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';

import DropdownExample from './CustomComponents/CustomDropDown';

const Register = () => {
  const CustomInputFeild = input => {
    return (
      <View style={styles.card}>
        <TextInput
          style={styles.feildStles}
          placeholder={input}
          placeholderTextColor={'#000000CC'}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logoStyles}>Hi!</Text>
      <Text style={styles.headingStyles}>Register a New Account</Text>
      <View style={styles.card}>
        {/* name */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={'#000000CC'}
        />

        {/* mobile number */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile Number'}
          placeholderTextColor={'#000000CC'}
        />

        {/* email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={'#000000CC'}
        />

        {/* password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Password'}
          placeholderTextColor={'#000000CC'}
        />

        {/* confirm password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Confirm Passwod'}
          placeholderTextColor={'#000000CC'}
        />
        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'City'}
            placeholderTextColor={'#000000CC'}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'state'}
            placeholderTextColor={'#000000CC'}
          />
        </View>

        <DropdownExample />
        <Text>{''}</Text>
        <DropdownExample />

        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </Pressable>
        <Pressable style={styles.powerUserButton}>
          <Text style={styles.powerUserButtonText}>
            REGISTER AS A POWER USER
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  logoStyles: {
    fontSize: 48,
    color: '#ED7421',
    fontFamily: 'Nunito-Bold',
    marginTop: 31.28,
    marginLeft: 22,
  },
  headingStyles: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 22,
  },
  card: {
    marginLeft: 22,
    marginTop: 12,
    marginRight: 22,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 55,
    marginTop: 16.96,
  },
  signUpButton: {
    height: 55,
    backgroundColor: '#ED7421',
    marginTop: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  powerUserButton: {
    height: 55,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ED7421',
  },
  powerUserButtonText: {
    color: '#ED7421',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export {Register};
