import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SearchView} from '../CustomComponents/SearchView';
import {MapLocationComponent} from '../CustomComponents/MapLocationComponent';
import {ImageCurousel} from '../CustomComponents/ImageCurousel';
import {imageCourselData} from '../../utils/Constants';
const Home = () => {
  return (
    <>
      <SearchView />
      <MapLocationComponent />
      <ScrollView>
        <>
          <ImageCurousel imageData={imageCourselData} />
          <View style={ss.container}>
            <Text>Dashboard Home page</Text>
          </View>
        </>
      </ScrollView>
    </>
  );
};
const ss = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export {Home};
