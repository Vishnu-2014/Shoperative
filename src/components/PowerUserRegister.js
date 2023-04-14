/* eslint-disable prettier/prettier */
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
            keyboardType="number-pad"
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Email'}
            placeholderTextColor={'#000000CC'}
            keyboardType="email-address"
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
            secureTextEntry={true}
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Confirm Password'}
            placeholderTextColor={'#000000CC'}
            secureTextEntry={true}
          />
        </View>

        <DropdownExample />
        <DropdownExample />

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
          style={[styles.feildStles, {height: 90, textAlignVertical: 'top'}]}
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
    fontSize: 38,
    color: '#ED7421',
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
    marginLeft: 22,
  },
  headingStyles: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 22,
  },
  card: {
    marginLeft: 22,
    marginTop: 10,
    marginRight: 22,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 45,
    marginTop: 12,
  },
  signUpButton: {
    height: 45,
    backgroundColor: '#ED7421',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  powerUserButton: {
    height: 45,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
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

export {PowerUserRegister};
