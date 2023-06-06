import React, {useState} from 'react';
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
import {Snackbar} from 'react-native-paper';

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
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('');
  const [income, setIncome] = useState('');
  const [err, setErr] = useState('');
  const [visible, setVisible] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const onDismiss = () => {
    setVisible(false);
  };

  const snackBar = () => {
    return (
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        action={{label: 'Close'}}>
        {err}
      </Snackbar>
    );
  };

  // Handling Functions Of Feilds
  const handleNameFeild = data => {
    setName(data);
  };
  const handleMobileNumberFeild = data => {
    setMobileNumber(data);
  };
  const handleEmailFeild = data => {
    setEmail(data);
  };
  const handlePasswordFeild = data => {
    SetPassword(data);
  };
  const handleConfirmPasswordFeild = data => {
    setConfirmPassword(data);
  };
  const handleCityFeild = data => {
    setCity(data);
  };

  // Register Validation
  const RegisterValidation = () => {
    if (name === '') {
      console.log('Name Is Empty');
      setVisible(true);
      setErr('Name Is Empty');
    } else if (mobileNumber === '') {
      console.log('Mobile Number Empty');
      setVisible(true);
      setErr('Mobile Number Empty');
    } else if (mobileNumber.length < 10) {
      console.log('Enter a 10-Digit Mobile Number');
      setVisible(true);
      setErr('Enter a 10-Digit Mobile Number');
    } else if (mobileNumber[0] < 6) {
      console.log('Enter a Valid Number');
      setVisible(true);
      setErr('Enter a Valid Number');
    } else if (email === '') {
      console.log('Email is Empty');
      setVisible(true);
      setErr('Email is Empty');
    } else if (!emailRegex.test(email)) {
      console.log('Enter a Valid Email');
      setVisible(true);
      setErr('Enter a Valid Email');
    } else if (password === '') {
      console.log('Password Is Empty');
      setVisible(true);
      setErr('Password Is Empty');
    } else if (confirmPassword === '') {
      console.log('ConfirmPassword Is Empty');
      setVisible(true);
      setErr('ConfirmPassword Is Empty');
    } else if (password !== confirmPassword) {
      console.log('Confirm Password Not Matched');
      setVisible(true);
      setErr('Confirm Password Not Matched');
    } else if (city === '') {
      console.log('City Is Empty');
      setVisible(true);
      setErr('City Is Empty');
    } else {
      setVisible(true);
      setErr('Sign Up Successfull');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyles}>Hi!</Text>
      <Text style={styles.headingStyles}>Register a New Account</Text>
      <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
        {/* name */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleNameFeild}
        />

        {/* mobile number */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile Number'}
          placeholderTextColor={placeHolderTextColor}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={handleMobileNumberFeild}
        />

        {/* email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={placeHolderTextColor}
          keyboardType="email-address"
          onChangeText={handleEmailFeild}
        />

        {/* password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Password'}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={true}
          onChangeText={handlePasswordFeild}
        />

        {/* confirm password */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Confirm Passwod'}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordFeild}
        />

        {/* City */}
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleCityFeild}
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
          onPress={() => {
            // navigation.navigate('OtpVerification');
            RegisterValidation();
          }}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </Pressable>
        <Pressable
          style={styles.powerUserButton}
          onPress={() => {
            navigation.navigate('PowerUserRegister');
          }}>
          <Text style={styles.powerUserButtonText}>
            REGISTER AS A POWER USER
          </Text>
        </Pressable>
      </ScrollView>
      {snackBar()}
    </View>
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
