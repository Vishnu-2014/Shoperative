import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchView} from '../CustomComponents/SearchView';
import {MapLocationComponent} from '../CustomComponents/MapLocationComponent';
import {NavigationBar} from '../CustomComponents/NavigationBar';
const Home = () => {
  return (
    <>
      <NavigationBar />
      <SearchView />
      <MapLocationComponent />
      <View style={ss.container}>
        <Text>Dashboard Home page</Text>
      </View>
    </>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Home};
