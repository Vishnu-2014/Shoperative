import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
const Offers = () => {
  return (
    <>
      <HeaderComponent title={'Offers'} />
      <View style={ss.container}>
        <Text>Offers page</Text>
      </View>
    </>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Offers};
