import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';

import DropdownExample from './CustomComponents/CustomDropDown';

const PowerUserRegister = () => {
  const CustomInputFeild = input => {
    return (
      <View style={styles.card}>
        <TextInput
          style={styles.feildStles}
          placeholder={input}
          placeholderTextColor={'#000000CC'}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logoStyles}>Power User</Text>
      <Text style={styles.headingStyles}>Registration</Text>
      <ScrollView style={styles.card}>
        {/* name */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={'#000000CC'}
        />

        {/* mobile number */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Name Of The Food Co-Operative'}
          placeholderTextColor={'#000000CC'}
        />

        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Mobile'}
            placeholderTextColor={'#000000CC'}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Email'}
            placeholderTextColor={'#000000CC'}
          />
        </View>

        {/* email */}
        <TextInput
          style={styles.feildStles}
          placeholder={'Area'}
          placeholderTextColor={'#000000CC'}
        />

        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'City'}
            placeholderTextColor={'#000000CC'}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'state'}
            placeholderTextColor={'#000000CC'}
          />
        </View>

        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
            },
          ]}>
          {/* city */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Password'}
            placeholderTextColor={'#000000CC'}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Confirm Password'}
            placeholderTextColor={'#000000CC'}
          />
        </View>

        <TextInput
          style={styles.feildStles}
          placeholder={'DropDown'}
          placeholderTextColor={'#000000CC'}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'DropDown'}
          placeholderTextColor={'#000000CC'}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Add Elements'}
          placeholderTextColor={'#000000CC'}
        />

        <TextInput
          style={styles.feildStles}
          placeholder={'GST Number'}
          placeholderTextColor={'#000000CC'}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'PAN Number'}
          placeholderTextColor={'#000000CC'}
        />

        <TextInput
          style={styles.feildStles}
          placeholder={'Address'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />

        <Pressable style={styles.powerUserButton}>
          <Text style={styles.powerUserButtonText}>+ Choose ID Proof</Text>
        </Pressable>

        <Pressable style={styles.powerUserButton}>
          <Text style={styles.powerUserButtonText}>+ Upload Logo</Text>
        </Pressable>

        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
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
    fontSize: 48,
    color: '#ED7421',
    fontFamily: 'Nunito-Bold',
    marginTop: 30.28,
    marginLeft: 22,
  },
  headingStyles: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 22,
  },
  card: {
    marginLeft: 22,
    marginTop: 12,
    marginRight: 22,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 55,
    marginTop: 16.96,
  },
  signUpButton: {
    height: 55,
    backgroundColor: '#ED7421',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  powerUserButton: {
    height: 55,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ED7421',
  },
  powerUserButtonText: {
    color: '#ED7421',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export {PowerUserRegister};
