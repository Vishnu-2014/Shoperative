import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ClosingDate = () => {
  return (
    <View style={{styles}}>
      <Text>Closing Date</Text>
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

export {ClosingDate};
