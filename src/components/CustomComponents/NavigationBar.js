import React from 'react';
import {Pressable, View, Image, StyleSheet, Alert} from 'react-native';
import menuIcon from '../../images/menu.png';
import logo from '../../images/logo.png';
import user from '../../images/user.png';
import cart from '../../images/cart.png';
import {bgColor} from '../../theme/colors';

const NavigationBar = props => {
  const {
    navigation,
    userPress = () => Alert.alert('Under Development'),
    cartPress = () => Alert.alert('Under Development'),
  } = props;
  return (
    <View style={ss.container}>
      <View style={ss.innerContainer}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image source={menuIcon} style={ss.menuIcon} />
        </Pressable>
        <View style={ss.logoContainer}>
          <Image source={logo} style={ss.logoStyle} />
        </View>
        <Pressable style={ss.flexEnd} onPress={userPress}>
          <Image source={user} style={ss.userStyle} />
        </Pressable>
        <Pressable style={ss.flexEnd} onPress={cartPress}>
          <Image source={cart} style={ss.cartStyle} />
        </Pressable>
      </View>
    </View>
  );
};
const ss = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 24,
  },
  menuIcon: {
    height: 18,
    width: 22,
  },
  logoContainer: {flex: 1},
  logoStyle: {
    marginLeft: 6,
    height: 24,
    width: 146,
  },
  userStyle: {
    height: 16,
    width: 16,
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
  cartStyle: {
    height: 18,
    width: 20,
    marginLeft: 12,
  },
});
export {NavigationBar};
