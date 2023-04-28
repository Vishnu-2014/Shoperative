import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Account = () => {
  return (
    <View style={ss.container}>
      <Text>Account page</Text>
    </View>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Account};
