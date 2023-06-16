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
import {useDispatch, useSelector} from 'react-redux';

import DropdownExample from './CustomComponents/CustomDropDown';
import {register} from '../store/actions/registerActions';

const Register = () => {
  const dispatch = useDispatch();
  const professionListResult = useSelector(state => state.professionList);
  // console.log(professionListResult.income_list[1]);

  // const ProfessionData = [
  //   {
  //     id: 1,
  //     label: professionListResult.profession_result[0].profession,
  //     value: 'employee',
  //   },
  //   {
  //     id: 2,
  //     label: professionListResult.profession_result[1].profession,
  //     value: 'entrherprenuer',
  //   },
  //   {
  //     id: 3,
  //     label: professionListResult.profession_result[2].profession,
  //     value: 'housewife',
  //   },
  //   {
  //     id: 4,
  //     label: professionListResult.profession_result[3].profession,
  //     value: 'Professional(doctor)',
  //   },
  //   {
  //     id: 5,
  //     label: professionListResult.profession_result[4].profession,
  //     value: 'Professional(Other)',
  //   },
  // ];
  // const IncomeData = [
  //   {
  //     id: 1,
  //     label: professionListResult.income_list[0],
  //     value: 'Below 10000',
  //   },
  //   {id: 2, label: professionListResult.income_list[1], value: 'Below 10000'},
  //   {id: 3, label: professionListResult.income_list[2], value: '10000 - 20000'},
  //   {id: 4, label: professionListResult.income_list[3], value: '20000 - 50000'},
  //   {id: 5, label: professionListResult.income_list[4], value: 'Above 50000'},
  // ];
  // const IncomeData = [professionListResult.income_result];

  const ProfessionData = [
    {
      id: 1,
      label: 'employee',
      value: 'employee',
    },
    {id: 2, label: 'entraprenuer', value: 'entraprenuer'},
    {id: 3, label: 'HouseWife', value: 'HouseWife'},
    {id: 4, label: 'professional(Doctor)', value: 'Professional(Doctor)'},
    {id: 5, label: 'proffesional(others)', value: 'Professional(Others)'},
  ];

  const IncomeData = [
    {
      id: 1,
      label: 'Below 10000',
      value: 'Below 10000',
    },
    {id: 2, label: '10000 - 20000', value: '10000 - 20000'},
    {id: 3, label: '20000 - 50000', value: '20000 - 50000'},
    {id: 4, label: 'Above 50000', value: 'Above 50000'},
  ];

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  // Register Validation
  const RegisterValidation = () => {
    if (name === '') {
      setVisible(true);
      setErr('Please Enter Name');
    } else if (mobileNumber === '') {
      setVisible(true);
      setErr('Please Enter Mobile Number');
    } else if (mobileNumber.length < 10) {
      setVisible(true);
      setErr('Enter a 10-Digit Mobile Number');
    } else if (mobileNumber[0] < 6) {
      setVisible(true);
      setErr('Enter a Valid Number');
    } else if (email === '') {
      setVisible(true);
      setErr('Please Enter Email');
    } else if (!emailRegex.test(email)) {
      setVisible(true);
      setErr('Enter a Valid Email');
    } else if (password === '') {
      setVisible(true);
      setErr('Please Enter Password');
    } else if (confirmPassword === '') {
      setVisible(true);
      setErr('Please Enter ConfirmPassword');
    } else if (password !== confirmPassword) {
      setVisible(true);
      setErr('Confirm Password Not Matched');
    } else {
      navigation.navigate('Login');
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

        <DropdownExample
          titleInput={'-- Select Your Profession --'}
          data={ProfessionData}
          selectedValue={profession}
          setDropdownValue={setProfession}
        />
        <DropdownExample
          titleInput={'-- Monthly HouseHold Income --'}
          data={IncomeData}
          selectedValue={income}
          setDropdownValue={setIncome}
        />

        {/* Buttons */}
        <Pressable
          style={styles.signUpButton}
          onPress={() => {
            dispatch(
              register(
                name,
                mobileNumber,
                email,
                password,
                confirmPassword,
                profession,
                income,
              ),
            );
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
