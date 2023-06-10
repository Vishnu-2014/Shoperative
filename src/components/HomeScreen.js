import * as React from 'react';
import {StyleSheet, View, Button, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EditProfile} from './EditProfile';
import {profile} from '../store/actions/profileActions';

//We can remove once all the screens developed
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loginResult = useSelector(state => state.login);
  const [Token, setToken] = React.useState('');
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
      title: 'ShippingAddress',
      target: 'ShippingAddress',
    },
    {
      title: 'OtpVerification',
      target: 'OtpVerification',
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
      <Button
        title="EditProfile"
        onPress={() => {
          setToken(loginResult.token);
          dispatch(profile(Token));
          navigation.navigate('EditProfile');
        }}
      />
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
