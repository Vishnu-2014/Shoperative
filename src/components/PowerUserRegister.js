/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {placeHolderTextColor} from '../theme/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
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

const PowerUserRegister = () => {
  const navigation = useNavigation();
  const [resourcePath, SetResourcePath] = useState(null);
  const [filename, setFilename] = useState(null);

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [income, setIncome] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [address, setAddress] = useState('');
  const [idProof, setIdProof] = useState(false);
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
  const handleAreaFeild = data => {
    setArea(data);
  };
  const handleCityFeild = data => {
    setCity(data);
  };
  const handleStateFeild = data => {
    setState(data);
  };
  const handlePasswordFeild = data => {
    SetPassword(data);
  };
  const handleConfirmPasswordFeild = data => {
    setConfirmPassword(data);
  };
  const handleFacebookLinkFeild = data => {
    setFacebookLink(data);
  };
  const handleAddressFeild = data => {
    setAddress(data);
  };

  const PowerUserRegisterValidation = () => {
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
    } else if (area === '') {
      setVisible(true);
      setErr('Please Enter Area');
    } else if (city === '') {
      setVisible(true);
      setErr('Please Enter City');
    } else if (state === '') {
      setVisible(true);
      setErr('Please Enter State');
    } else if (password === '') {
      setVisible(true);
      setErr('Please Enter Password');
    } else if (confirmPassword === '') {
      setVisible(true);
      setErr('Please Enter ConfirmPassword');
    } else if (password !== confirmPassword) {
      setVisible(true);
      setErr('Confirm Password Not Matched');
    } else if (facebookLink === '') {
      setVisible(true);
      setErr('Please Enter FaceBookLink');
    } else if (address === '') {
      setVisible(true);
      setErr('Please Enter Address');
    } else if (resourcePath === null) {
      setVisible(true);
      setErr('Select idProof');
    } else {
      console.log(resourcePath);
      setVisible(true);
      setErr('Power User Register Successfull');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyles}>Power User</Text>
      <Text style={styles.headingStyles}>Registration</Text>
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
          onChangeText={handleMobileNumberFeild}
          maxLength={10}
        />

        {/* Email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleEmailFeild}
        />

        {/* Area */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Area'}
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleAreaFeild}
        />

        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
              paddingHorizontal: 0,
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'City'}
            placeholderTextColor={placeHolderTextColor}
            onChangeText={handleCityFeild}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'state'}
            placeholderTextColor={placeHolderTextColor}
            onChangeText={handleStateFeild}
          />
        </View>

        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
              paddingHorizontal: 0,
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Password'}
            placeholderTextColor={placeHolderTextColor}
            secureTextEntry={true}
            onChangeText={handlePasswordFeild}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Confirm Password'}
            placeholderTextColor={placeHolderTextColor}
            secureTextEntry={true}
            onChangeText={handleConfirmPasswordFeild}
          />
        </View>

        <DropdownExample
          titleInput={'-- Select Your Proffession --'}
          data={ProfessionData}
        />
        <DropdownExample
          titleInput={'-- Monthly Household Income --'}
          data={IncomeData}
        />

        <TextInput
          style={styles.feildStles}
          placeholder={'Facebook Link'}
          placeholderTextColor={placeHolderTextColor}
          onChangeText={handleFacebookLinkFeild}
        />

        <TextInput
          style={[styles.feildStles, {height: 100, textAlignVertical: 'top'}]}
          placeholder={'Address'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
          onChangeText={handleAddressFeild}
        />

        <Pressable
          style={styles.powerUserButton}
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              response => {
                SetResourcePath(response.assets[0].uri);
                setIdProof(true);
              },
            )
          }>
          <Text style={styles.powerUserButtonText}>
            {idProof === true ? resourcePath : '+ Choose Id Proof'}
          </Text>
        </Pressable>

        <Pressable
          style={styles.AddButton}
          onPress={() => {
            // navigation.navigate('AddFollowers');
            PowerUserRegisterValidation();
          }}>
          <Text style={styles.AddButtonText}>ADD</Text>
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
    marginTop: 10,
    marginLeft: '5%',
  },
  headingStyles: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    marginLeft: '5%',
    marginTop: 5,
  },
  card: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 50,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 45,
    marginTop: 12,
    paddingHorizontal: 15,
    fontSize: 13,
    fontWeight: '500',
  },
  AddButton: {
    height: 50,
    backgroundColor: '#ED7421',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  powerUserButton: {
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7F7F7F',
  },
  powerUserButtonText: {
    color: '#7F7F7F',
    fontSize: 16,
    fontWeight: '500',
  },
});

export {PowerUserRegister};
