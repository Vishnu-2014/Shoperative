import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {placeHolderTextColor} from '../theme/colors';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/actions/loginActions';
import {useNavigation} from '@react-navigation/native';
import {Snackbar} from 'react-native-paper';

const dummyusername = '9000365957';
const dummypassword = '123123';

const Login = () => {
  const navigation = useNavigation();
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');

  const [visible, setVisible] = useState(false);
  const onDismiss = () => {
    setVisible(false);
  };

  const handleUsernameInput = data => {
    SetUsername(data);
  };
  const Validation = () => {
    if (username !== dummyusername) {
      Alert.alert('Wrong Username');
    } else if (password !== dummypassword) {
      Alert.alert('Wrong Password');
    } else {
      // if (loginResult.description === 'You are logged in successfully') {
      //   navigation.navigate('Register');
      // }
      setVisible(true);
    }
  };
  const handlePasswordInput = data => {
    SetPassword(data);
  };

  const dispatch = useDispatch();
  //check below two lines will bring th data from api
  const loginResult = useSelector(state => state.login);
  console.log('the result', loginResult.name, loginResult.description);

  const snackBar = () => {
    return (
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        action={{label: 'Close'}}>
        {loginResult.description}
      </Snackbar>
    );
  };

  //
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>Login</Text>
      <View style={styles.FeildViewStyles}>
        <Foundation style={styles.iconStylesmobile} name="mobile" size={25} />
        <TextInput
          style={styles.inputFeildStyles}
          placeholder="Mobile Number"
          keyboardType="number-pad"
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleUsernameInput}
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

      <Text style={styles.forgetPasswordStyles}>Forget Password?</Text>

      <Pressable
        style={styles.buttonStyles}
        onPress={() => {
          //get username and password and pass this method instead of hardcoded values
          dispatch(login(username, password));
          Validation();
          console.log(loginResult);
        }}>
        <Text style={styles.buttonTextStyles}>LOG IN</Text>
      </Pressable>

      <Text style={styles.bottomTextStyles}>
        Don't Have An Account ?{' '}
        <Text
          style={{color: '#ED7421'}}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </Text>

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
