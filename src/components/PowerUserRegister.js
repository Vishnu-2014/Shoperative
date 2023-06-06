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
  const [resourcePath, SetResourcePath] = useState();
  const [state, setState] = useState({
    Name: '',
    MobileNumber: '',
    Email: '',
    Area: '',
    City: '',
    State: '',
    Password: '',
    ConfirmPassword: '',
    Profession: '',
    Income: '',
    FacebookLink: '',
    Address: '',
    IdProof: null,
  });
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
        />

        {/* mobile number */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile Number'}
          placeholderTextColor={placeHolderTextColor}
        />

        {/* Email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={placeHolderTextColor}
          keyboardType="number-pad"
        />

        {/* Area */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Area'}
          placeholderTextColor={placeHolderTextColor}
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
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'state'}
            placeholderTextColor={placeHolderTextColor}
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
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Confirm Password'}
            placeholderTextColor={placeHolderTextColor}
            secureTextEntry={true}
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
        />

        <TextInput
          style={[styles.feildStles, {height: 100, textAlignVertical: 'top'}]}
          placeholder={'Address'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
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
                console.log(response.assets[0].uri);
              },
            )
          }>
          <Text style={styles.powerUserButtonText}>+ Choose Id Proof</Text>
        </Pressable>

        <Pressable
          style={styles.AddButton}
          onPress={() => navigation.navigate('AddFollowers')}>
          <Text style={styles.AddButtonText}>ADD</Text>
        </Pressable>
      </ScrollView>
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
