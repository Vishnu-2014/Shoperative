/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topColorBoxStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  topColorBoxStyles: {
    backgroundColor: '#ED7421',
    width: '100%',
    height: 85,
  },
});

export {Account};
