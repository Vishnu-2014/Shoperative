import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShareWithFollowers = () => {
  return (
    <View style={{styles}}>
      <Text>ShareWithFollowers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {ShareWithFollowers};
