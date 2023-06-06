/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {placeHolderTextColor} from '../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CustomTextInput = feildName => {
  return (
    <TextInput
      style={styles.feildStles}
      placeholder={feildName}
      placeholderTextColor={placeHolderTextColor}
    />
  );
};

const AddFollowers = () => {
  const navigation = useNavigation();
  const [value, SetValue] = useState([1, 2]);
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>
        Add Followers{' '}
        <Text style={{fontSize: 16}}>(Members of Food Co-op)</Text>
      </Text>
      <ScrollView style={styles.card}>
        {value.map((number, index) => (
          <View style={{flex: 1}}>
            <View style={styles.FollowerContentStyles}>
              <Text style={styles.FollowerContentTextStyles}>
                Follower {number}
              </Text>
              {number > 2 && (
                <Entypo
                  name="cross"
                  size={25}
                  color={'#ED7421'}
                  onPress={() => {
                    if (index > -1) {
                      // only splice array when item is found
                      value.splice(index, 1); // 2nd parameter means remove one item only
                    }
                    SetValue([...value]);
                  }}
                />
              )}
            </View>
            {CustomTextInput('Name')}
            {CustomTextInput('Email')}
            {CustomTextInput('Mobile')}
            {CustomTextInput('City')}
          </View>
        ))}

        <Pressable
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('OtpVerification')}>
          <Text style={styles.buttonTextStyles}>ADD</Text>
        </Pressable>
      </ScrollView>
      <MaterialIcons
        name="add"
        size={50}
        color={'#ED7421'}
        style={styles.addButtonStyles}
        onPress={() => {
          SetValue([...value, value.length + 1]);
        }}
      />
      {console.log(value)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
  },
  headingStyles: {
    fontSize: 18,
    color: '#ED7421',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: '2.5%',
    marginTop: 30,
    marginBottom: 10,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight: '500',
    fontSize: 14,
  },
  buttonStyles: {
    height: 50,
    backgroundColor: '#ED7421',
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonTextStyles: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  addButtonStyles: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#FFF',
    borderRadius: 40,
  },
  FollowerContentStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'flex-end',
  },
  FollowerContentTextStyles: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export {AddFollowers};
