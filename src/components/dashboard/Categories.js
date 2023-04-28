import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Categories = () => {
  return (
    <View style={ss.container}>
      <Text>Categories page</Text>
    </View>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Categories};
