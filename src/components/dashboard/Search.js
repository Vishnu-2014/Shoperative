import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View style={ss.container}>
      <Text>Search page</Text>
    </View>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Search};
