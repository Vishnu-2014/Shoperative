/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {placeHolderTextColor} from '../theme/colors';

import DropdownExample from './CustomComponents/CustomDropDown';

const PowerUserRegister = () => {
  const navigation = useNavigation();
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
          placeholder={'Name Of The Food Co-operative'}
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
            placeholder={'Mobile'}
            placeholderTextColor={placeHolderTextColor}
            keyboardType="number-pad"
          />

          {/* state */}
          <TextInput
            style={[styles.feildStles, {width: '48%', marginTop: 0}]}
            placeholder={'Email'}
            placeholderTextColor={placeHolderTextColor}
            keyboardType="email-address"
          />
        </View>

        {/* email */}
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

        <DropdownExample />
        <DropdownExample />

        <TextInput
          style={styles.feildStles}
          placeholder={'Facebook Link'}
          placeholderTextColor={placeHolderTextColor}
        />

        <TextInput
          style={styles.feildStles}
          placeholder={'GST Number'}
          placeholderTextColor={placeHolderTextColor}
        />

        <TextInput
          style={[styles.feildStles, {height: 100, textAlignVertical: 'top'}]}
          placeholder={'Address'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
        />

        <Pressable style={styles.powerUserButton}>
          <Text style={styles.powerUserButtonText}>+ Choose Id Proof</Text>
        </Pressable>

        {/* <Pressable style={styles.powerUserButton}>
          <Text style={styles.powerUserButtonText}>+ Upload Logo</Text>
        </Pressable> */}

        <Pressable
          style={styles.AddButton}
          onPress={() => navigation.navigate('Login')}>
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
