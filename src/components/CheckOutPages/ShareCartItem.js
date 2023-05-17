import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShareCartItem = () => {
  return (
    <View style={{styles}}>
      <Text>ShareCartItem</Text>
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

export {ShareCartItem};
