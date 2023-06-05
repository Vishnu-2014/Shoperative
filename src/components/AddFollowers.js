import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {placeHolderTextColor} from '../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';

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
  const [value, SetValue] = useState(2);
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>
        Add Followers{' '}
        <Text style={{fontSize: 16}}>(Members of Food Co-op)</Text>
      </Text>
      <ScrollView style={styles.card}>
        {value.map(number => (
          <View style={{flex: 1}}>
            <Text>Follower {number}</Text>
            {CustomTextInput('Name')}
            {CustomTextInput('Email')}
            {CustomTextInput('Mobile')}
            {CustomTextInput('City')}
          </View>
        ))}
        {/* <View style={{flex: 1}}>
          <Text>Follower 1</Text>
          {CustomTextInput('Name')}
          {CustomTextInput('Email')}
          {CustomTextInput('Mobile')}
          {CustomTextInput('City')}
        </View> */}

        <Entypo name="cross" size={25} color={'#ED7421'} />

        <Pressable style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>ADD</Text>
        </Pressable>
      </ScrollView>
      <MaterialIcons
        name="add"
        size={50}
        color={'#ED7421'}
        style={styles.addButtonStyles}
        onPress={() => {
          SetValue(value + 1);
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
});

export {AddFollowers};
