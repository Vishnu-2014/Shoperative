import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import {useSelector, useDispatch} from 'react-redux';
import {placeHolderTextColor} from '../theme/colors';
import {updateUserDetails} from '../store/actions/loginActions';

const EditProfile = () => {
  const {user_details: loginResult} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const CustomFeilds = (textFeild, placeholderFeild, key) => {
    return (
      <View style={styles.elementsContainerStyles}>
        <Text style={styles.textStyles}>{textFeild}</Text>
        <TextInput
          placeholder={placeholderFeild}
          value={placeholderFeild}
          onChangeText={t => {
            dispatch(updateUserDetails(key, t));
          }}
          placeholderTextColor={placeHolderTextColor}
          style={styles.inputFeildsStyles}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Edit Profile'} />

      {CustomFeilds('Name*', loginResult.user_name, 'user_name')}
      {CustomFeilds('Mobile Number*', loginResult.mobile, 'mobile')}
      {CustomFeilds('Email Id*', loginResult.email, 'email')}

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View style={{width: '48%'}}>
          <Text style={styles.textStyles}>State</Text>
          <TextInput
            placeholder="Telangana"
            placeholderTextColor={placeHolderTextColor}
            style={{
              backgroundColor: '#F3F3F3',
              marginTop: 5,
              paddingHorizontal: 20,
              fontWeight: '500',
            }}
          />
        </View>
        <View style={{width: '48%'}}>
          <Text style={styles.textStyles}>City</Text>
          <TextInput
            style={{
              backgroundColor: '#F3F3F3',
              marginTop: 5,
              paddingHorizontal: 20,
              fontWeight: '500',
            }}
          />
        </View>
      </View>

      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>SAVE CHANGES</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  topBarStyles: {
    flexDirection: 'row',
    backgroundColor: '#ED7421',
    height: 60,
    alignItems: 'center',
    width: '100%',
  },
  backArrowStyles: {
    paddingHorizontal: 15,
    color: '#FFF',
  },
  headingTextStyles: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
  },
  elementsContainerStyles: {
    width: '90%',
    height: 70,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000CC',
  },
  inputFeildsStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#F3F3F3',
    marginTop: 5,
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: '500',
  },
  buttonStyles: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED7421',
    marginTop: 75,
    height: 50,
  },
  buttonTextStyles: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});

export {EditProfile};
