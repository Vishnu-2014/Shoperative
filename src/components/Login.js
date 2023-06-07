/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {placeHolderTextColor} from '../theme/colors';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native';
import ActivityStatus from '../components/shared/ActivityStatus';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/actions/loginActions';
import {useNavigation} from '@react-navigation/native';
import {Snackbar} from 'react-native-paper';

const dummyusername = '9000365957';
const dummypassword = '123123';

const Login = () => {
  //below two lines will bring the data from API
  const dispatch = useDispatch();
  const loginResult = useSelector(state => state.login);

  const navigation = useNavigation();
  const [email, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [activity, SetActivity] = useState(false);
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const onDismiss = () => {
    setVisible(false);
  };

  // Handling Input Functions
  const handleEmailInput = data => {
    SetUsername(data);
  };
  const handlePasswordInput = data => {
    SetPassword(data);
  };

  //Validations Of Both Inputs
  const Validation = () => {
    if (email !== dummyusername) {
      setVisible(true);
    } else if (password !== dummypassword) {
      setVisible(true);
    } else {
      if (loginResult.description === 'You are logged in successfully') {
        navigation.navigate('DrawerView');
      }
    }
  };

  const LoginValidation = () => {
    if (email === '') {
      // console.log('Empty Username Feild');
      setVisible(true);
      setErr('Please Enter Email');
    } else if (!emailRegex.test(email)) {
      // console.log('Please Enter a valid 10-Digit Mobile Number');
      setVisible(true);
      setErr('Please Enter a valid Email');
    } else if (password === '') {
      // console.log('Empty Password Feild');
      setVisible(true);
      setErr('Please Enter Password');
    } else if (password.length < 6) {
      // console.log('Password Must Contain 6 Letters');
      setVisible(true);
      setErr('Password Must Contain 6 Letters');
    } else {
      setVisible(true);
      setErr('Login Successfull');
    }
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

  const activityIndicator = () => {
    SetActivity(true);
    setTimeout(() => {
      SetActivity(false);
      if (loginResult.description === 'You are logged in successfully') {
        // navigation.navigate('Register');
        // Alert.alert('Hello');
        setVisible(false);
      }
    }, 500);
  };

  //
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>Login</Text>
      <View style={styles.FeildViewStyles}>
        <Foundation style={styles.iconStylesmobile} name="mobile" size={25} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleEmailInput}
        />
      </View>
      <View style={styles.FeildViewStyles}>
        <AntDesign style={styles.iconStyleslock} name="lock" size={20} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Password"
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={true}
          onChangeText={handlePasswordInput}
        />
      </View>

      <Text
        style={styles.forgetPasswordStyles}
        onPress={() => navigation.navigate('ForgetPassword')}>
        Forget Password?
      </Text>

      <Pressable
        style={styles.buttonStyles}
        onPress={() => {
          //get username and password and pass this method instead of hardcoded values
          dispatch(login(email, password));
          LoginValidation();
          // passwordValidation();
          // Validation();
          // activityIndicator();
        }}>
        <Text style={styles.buttonTextStyles}>LOG IN</Text>
      </Pressable>

      <Text style={styles.bottomTextStyles}>
        Don't Have An Account ?{' '}
        <Text
          style={{color: '#ED7421'}}
          onPress={() => navigation.navigate('Register')}>
          Register
        </Text>
      </Text>

      {/* {loginResult.loginStarted && (
        <ActivityStatus message={'Login inprogress'} />
      )} */}

      {snackBar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyles: {
    textAlign: 'center',
    color: '#ED7421',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  FeildViewStyles: {
    width: '90%',
    height: 50,
    marginTop: 30,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputFeildStyles: {
    marginLeft: 5,
    flex: 15,
    color: '#000',
    fontWeight: '500',
  },
  iconStylesmobile: {
    flex: 1,
    width: '100%',
    height: '100%',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  iconStyleslock: {
    flex: 1,
    width: '100%',
    height: '100%',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  forgetPasswordStyles: {
    color: '#ED7421',
    marginTop: 30,
    alignSelf: 'flex-end',
    marginRight: '5%',
    fontSize: 14,
    fontWeight: '500',
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
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },
  bottomTextStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000CC',
    marginTop: 27,
  },
});

export {Login};
