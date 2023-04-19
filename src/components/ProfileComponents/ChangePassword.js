/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ChangePassword = () => {
  const CustomFeilds = PlaceHolderInput => {
    return (
      <View style={styles.feildsContainerStyles}>
        <AntDesign name="lock" size={15} style={styles.iconStyles} />
        <TextInput
          style={styles.inputFeildStyle}
          placeholder={PlaceHolderInput}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title={'Change Password'} />
      {CustomFeilds('Old Password')}
      {CustomFeilds('New Password')}
      {CustomFeilds('Confirm Password')}

      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>CHANGE PASSWORD</Text>
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
  feildsContainerStyles: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 15,
  },
  inputFeildStyle: {
    height: '100%',
    width: '100%',
    color: '#383838',
  },
  iconStyles: {
    paddingHorizontal: 5,
  },
  buttonStyles: {
    backgroundColor: '#ED7421',
    height: 55,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonTextStyles: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});

export {ChangePassword};
