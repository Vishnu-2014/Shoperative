import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ShoperativeLogo from '../images/logo.png';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Splash = () => {
  // const navigation = useNavigation();
  // const loginResult = useSelector(state => state.login);
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('HomeScreen');
  //     // handleGetToken();
  //   }, 2000);
  // });

  // const handleGetToken = () => {
  //   const dataToken = loginResult.token;
  //   if (!dataToken) {
  //     navigation.navigate('Login');
  //   } else {
  //     navigation.navigate('HomeScreen');
  //   }
  // };

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
