import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';

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
    // {
    //   title: 'DashBoard',
    //   target: 'DashBoard',
    // },
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
    // {
    //   title: 'MyWishlist',
    //   target: 'MyWishlist',
    // },
  ];

  return (
    <SafeAreaView style={ss.container}>
      {targetsButtons.map(({target, title}, index) => {
        return (
          <View style={ss.button}>
            <Button
              title={title ?? target}
              onPress={() => {
                navigation.navigate(target);
                console.log('check check');
              }}
            />
          </View>
        );
      })}
    </SafeAreaView>
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
