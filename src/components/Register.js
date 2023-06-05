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
import {placeHolderTextColor} from '../theme/colors';

import DropdownExample from './CustomComponents/CustomDropDown';

const ProfessionData = [
  {
    id: 0,
    label: '-- Select Your Profession --',
    value: '-- Select Your Profession --',
  },
  {id: 1, label: 'Employee', value: 'Employee'},
  {id: 2, label: 'entrepreneur', value: 'entrepreneur'},
  {id: 3, label: 'HouseWife', value: 'HouseWife'},
  {id: 4, label: 'Professional(Doctor)', value: 'Professional(Doctor)'},
  {id: 5, label: 'Professional(Others)', value: 'Professional(Others)'},
  {id: 6, label: 'Self Employed', value: 'Self Employed'},
];
const IncomeData = [
  {
    id: 0,
    label: '-- Monthly HouseHold Income --',
    value: '-- Monthly HouseHold Income --',
  },
  {id: 1, label: 'Below 10000', value: 'Below 10000'},
  {id: 2, label: '10000 - 20000', value: '10000 - 20000'},
  {id: 3, label: '20000 - 50000', value: '20000 - 50000'},
  {id: 3, label: 'Above 50000', value: 'Above 50000'},
];

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
          placeholderTextColor={placeHolderTextColor}
        />

        {/* mobile number */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile Number'}
          placeholderTextColor={placeHolderTextColor}
          keyboardType="number-pad"
        />

        {/* email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={placeHolderTextColor}
          keyboardType="email-address"
        />

        {/* password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Password'}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={true}
        />

        {/* confirm password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Confirm Passwod'}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={true}
        />

        {/* City */}
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={placeHolderTextColor}
        />

        <DropdownExample
          titleInput={'-- Select Your Profession --'}
          data={ProfessionData}
        />
        <DropdownExample
          titleInput={'-- Monthly HouseHold Income --'}
          data={IncomeData}
        />

        {/* Buttons */}
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate('OtpVerification')}>
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
    marginLeft: '5%',
  },
  headingStyles: {
    fontSize: 17,
    color: '#000',
    fontWeight: '500',
    marginLeft: '5%',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 50,
    marginTop: 12,
    paddingHorizontal: 15,
    color: '#000',
    fontWeight: '500',
  },
  signUpButton: {
    height: 50,
    backgroundColor: '#ED7421',
    marginTop: 35,
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
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
