import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';

const Help = () => {
  return (
    <>
      <HeaderComponent title={'Help'} />
      <View style={styles.container}>
        <View style={styles.contentContainerStyles}>
          <Text style={styles.textFeildStyles}>Subject</Text>
          <TextInput style={styles.inputFeilds1} />
          <Text style={styles.textFeildStyles}>Message</Text>
          <TextInput style={styles.inputFeilds2} multiline={true} />
          <Pressable style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>REQUEST SUPPORT</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contentContainerStyles: {
    width: '90%',
  },
  textFeildStyles: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    marginTop: 25,
    marginBottom: 5,
  },
  inputFeilds1: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    height: 55,
    paddingHorizontal: 10,
  },
  inputFeilds2: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    height: 130,
    alignSelf: 'flex-start',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
  buttonStyles: {
    backgroundColor: '#ED7421',
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonTextStyles: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export {Help};
