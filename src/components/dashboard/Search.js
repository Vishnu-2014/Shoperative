import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
const Search = () => {
  return (
    <>
      <HeaderComponent title={'Search'} />
      <View style={ss.container}>
        <Text>Search page</Text>
      </View>
    </>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Search};
