/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileIconStyles}>
        <EvilIcons
          name="user"
          size={220}
          style={{
            backgroundColor: 'yellow',
            borderRadius: 1000,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  topColorBoxStyles: {
    backgroundColor: '#ED7421',
    width: '100%',
    height: '30%',
  },
  profileIconStyles: {
    width: 250,
    height: 250,
    marginTop: 90,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Account};
