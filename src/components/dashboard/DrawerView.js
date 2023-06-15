import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyOrders} from '../ProfileComponents/MyOrders';
import {Profile} from './Profile';
import {Dashboard} from './Dashboard';
import profileReducer from '../../store/reducers/profileReducers';
import {useDispatch} from 'react-redux';
import {profile} from '../../store/actions/profileActions';

const DrawerView = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  });
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DashBoard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrders}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export {DrawerView};
