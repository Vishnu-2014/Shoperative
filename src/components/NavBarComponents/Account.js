import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topColorBoxStyles}>
        <Text>Profile</Text>
      </View>
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
    height: 136,
  },
});

export {Account};
