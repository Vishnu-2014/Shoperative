import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchFollowers = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Search Followers'} />
      <View style={styles.searchContainerStyles}>
        <TextInput
          placeholder="Search by name/mobile/city"
          style={styles.textInputContainerStyles}
          placeholderTextColor={'#3F3F3F80'}
        />
        <FontAwesome name="search" size={22} style={{fontWeight: '800'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  searchContainerStyles: {
    width: '95%',
    height: 50,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  textInputContainerStyles: {
    width: '80%',
    color: '#3F3F3F80',
    fontSize: 16,
    fontWeight: '500',
  },
});

export {SearchFollowers};
