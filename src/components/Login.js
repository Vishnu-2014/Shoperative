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
import DeviceInfo from 'react-native-device-info';

const Login = () => {
  //below two lines will bring the data from API
  const dispatch = useDispatch();
  const loginResult = useSelector(state => state.login);

  const navigation = useNavigation();
  // const [email, SetUsername] = useState('8688941771');
  const [username, setUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [activity, SetActivity] = useState(false);
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');
  const [deviceToken, setDeviceToken] = useState();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const onDismiss = () => {
    setVisible(false);
  };

  // Handling Input Functions
  // const handleEmailInput = data => {
  //   SetUsername(data);
  // };
  const handleMobileNumberInput = data => {
    setUsername(data);
  };
  const handlePasswordInput = data => {
    SetPassword(data);
  };

  //Validations Of Both Inputs

  const LoginValidation = () => {
    if (username === '') {
      setVisible(true);
      setErr('Please Enter Mobile Number');
    } else if (username.length < 10) {
      setVisible(true);
      setErr('Enter a 10-Digit Mobile Number');
    } else if (username[0] < 6) {
      setVisible(true);
      setErr('Enter a Valid Mobile Number');
    } else if (password === '') {
      setVisible(true);
      setErr('Please Enter Password');
    } else if (password.length < 6) {
      setVisible(true);
      setErr('Password Must Contain 6 Letters');
    } else {
      setVisible(true);
      setErr(loginResult.description);
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

  const deviceInfo = () => {
    DeviceInfo.getFirstInstallTime().then(firstInstallTime => {
      setDeviceToken(firstInstallTime);
    });
  };

  //
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>Login</Text>
      <View style={styles.FeildViewStyles}>
        <Foundation style={styles.iconStylesmobile} name="mobile" size={25} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="UserName"
          keyboardType="email-address"
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleMobileNumberInput}
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
          dispatch(login(username, password, deviceToken));
          deviceInfo();
          LoginValidation();
          console.log(loginResult);
          if (loginResult.message === 'success') {
            navigation.navigate('DrawerView');
          } else {
            setVisible(true);
            setErr('Login Failed');
          }
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
