import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Offers = () => {
  return (
    <View style={ss.container}>
      <Text>Offers page</Text>
    </View>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Offers};
