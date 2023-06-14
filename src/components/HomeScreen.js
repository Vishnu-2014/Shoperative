import * as React from 'react';
import {StyleSheet, View, Button, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {profile} from '../store/actions/profileActions';

//We can remove once all the screens developed
const HomeScreen = ({navigation}) => {
  const targetsButtons = [
    {
      title: 'AddFollowers',
      target: 'AddFollowers',
    },
    {
      title: 'Login',
      target: 'Login',
    },
    {
      title: 'Dashboard',
      target: 'DrawerView',
    },
    {
      title: 'ProductDetails',
      target: 'ProductDetails',
    },
    {
      title: 'EditProfile',
      target: 'EditProfile',
    },
    {
      title: 'SearchBar',
      target: 'SearchBar',
    },
    {
      title: 'SearchFollowers',
      target: 'SearchFollowers',
    },
    {
      title: 'OrderDetails',
      target: 'OrderDetails',
    },
    {
      title: 'DropdownExample',
      target: 'DropdownExample',
    },
    {
      title: 'ForgetPassword',
      target: 'ForgetPassword',
    },
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
