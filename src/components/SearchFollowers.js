import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';

const SearchFollowers = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Search Followers'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export {SearchFollowers};
