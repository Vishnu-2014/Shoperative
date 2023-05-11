import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DropdownExample from './CustomComponents/CustomDropDown';

const Register = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.logoStyles}>Hi!</Text>
      <Text style={styles.headingStyles}>Register a New Account</Text>
      <View style={styles.card}>
        {/* name */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={'#666666'}
        />

        {/* mobile number */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile Number'}
          placeholderTextColor={'#666666'}
          keyboardType="number-pad"
        />

        {/* email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={'#666666'}
          keyboardType="email-address"
        />

        {/* password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Password'}
          placeholderTextColor={'#666666'}
          secureTextEntry={true}
        />

        {/* confirm password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Confirm Passwod'}
          placeholderTextColor={'#666666'}
          secureTextEntry={true}
        />
        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 0,
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'City'}
            placeholderTextColor={'#666666'}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'State'}
            placeholderTextColor={'#666666'}
          />
        </View>

        <DropdownExample />
        <DropdownExample />

        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </Pressable>
        <Pressable
          style={styles.powerUserButton}
          onPress={() => navigation.navigate('PowerUserRegister')}>
          <Text style={styles.powerUserButtonText}>
            REGISTER AS A POWER USER
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  logoStyles: {
    fontSize: 38,
    color: '#ED7421',
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
    marginLeft: 12,
  },
  headingStyles: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '500',
    marginLeft: 12,
  },
  card: {
    margin: 12,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 50,
    marginTop: 12,
    paddingHorizontal: 15,
  },
  signUpButton: {
    height: 50,
    backgroundColor: '#ED7421',
    marginTop: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  powerUserButton: {
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ED7421',
  },
  powerUserButtonText: {
    color: '#ED7421',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export {Register};
