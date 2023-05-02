import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchFollowers = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Search Followers'} />
      <View style={styles.searchContainerStyles}>
        <TextInput placeholder="Search by name/mobile/city" />
        <EvilIcons name="search" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchContainerStyles: {
    width: '95%',
    height: 60,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export {SearchFollowers};
