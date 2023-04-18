import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';

const EditProfile = () => {
  const CustomFeilds = (textFeild, placeholderFeild) => {
    return (
      <View style={styles.elementsContainerStyles}>
        <Text style={styles.textStyles}>{textFeild}</Text>
        <TextInput
          placeholder={placeholderFeild}
          style={styles.inputFeildsStyles}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Edit Profile'} />

      {CustomFeilds('Name*', 'Vishnu')}
      {CustomFeilds('Mobile Number*', '9988223377')}
      {CustomFeilds('Email Id*', 'Vishnu@gmail.com')}

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
            style={{
              backgroundColor: '#F3F3F3',
              marginTop: 5,
              paddingHorizontal: 20,
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
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  inputFeildsStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#F3F3F3',
    marginTop: 5,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
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
