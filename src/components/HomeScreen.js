import * as React from 'react';
import {StyleSheet, View, Button, ScrollView} from 'react-native';

//We can remove once all the screens developed
const HomeScreen = ({navigation}) => {
  const targetsButtons = [
    {
      title: 'Register',
      target: 'Register',
    },
    {
      title: 'DropdownExample',
      target: 'DropdownExample',
    },
    {
      title: 'PowerUserRegister',
      target: 'PowerUserRegister',
    },
    {
      title: 'AddFollowers',
      target: 'AddFollowers',
    },
    {
      title: 'Login',
      target: 'Login',
    },
    {
      title: 'SignUp',
      target: 'SignUp',
    },
    {
      title: 'ForgetPassword',
      target: 'ForgetPassword',
    },
    {
      title: 'OtpVerification',
      target: 'OtpVerification',
    },
    {
      title: 'DashBoard',
      target: 'DashBoard',
    },
    {
      title: 'ProductDetails',
      target: 'ProductDetails',
    },
    {
      title: 'Account',
      target: 'Account',
    },
    {
      title: 'EditProfile',
      target: 'EditProfile',
    },
    {
      title: 'MyOrders',
      target: 'MyOrders',
    },
    {
      title: 'MyWishlist',
      target: 'MyWishlist',
    },
    {
      title: 'MyWallet',
      target: 'MyWallet',
    },
    {
      title: 'Help',
      target: 'Help',
    },
    {
      title: 'ChangePassword',
      target: 'ChangePassword',
    },
    {
      title: 'AllCategories',
      target: 'AllCategories',
    },
    {
      title: 'SearchBar',
      target: 'SearchBar',
    },
    {
      title: 'ShoppingCart',
      target: 'ShoppingCart',
    },
    {
      title: 'SearchFollowers',
      target: 'SearchFollowers',
    },
    {
      title: 'ShippingAddress',
      target: 'ShippingAddress',
    },
    {
      title: 'CheckOut',
      target: 'CheckOut',
    },
    {
      title: 'OrderDetails',
      target: 'OrderDetails',
    },
    {
      title: 'RadioButtons',
      target: 'RadioButtons',
    },
    {
      title: 'ReturnProduct',
      target: 'ReturnProduct',
    },
    {
      title: 'ReturnProduct2',
      target: 'ReturnProduct2',
    },
    {
      title: 'ReturnProduct3',
      target: 'ReturnProduct3',
    },
    {title: 'Dashboard', target: 'DrawerView'},
  ];

  return (
    <ScrollView style={ss.container}>
      {targetsButtons.map(({target, title}, index) => {
        return (
          <View style={ss.button}>
            <Button
              title={title ?? target}
              onPress={() => {
                navigation.navigate(target);
              }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const ss = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginVertical: 6,
  },
});

export {HomeScreen};
