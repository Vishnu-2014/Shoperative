import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ShoperativeLogo from '../images/logo.png';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={ShoperativeLogo} style={styles.imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED7421',
  },
  imageStyles: {
    width: 250,
    height: 50,
  },
});

export {Splash};
