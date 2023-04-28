import React from 'react';
import {Pressable, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyOrders} from './MyOrders';
import {Profile} from './Profile';
import {Dashboard} from './Dashboard';
const DrawerView = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  return (
    <>
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
    </>
  );
};
export {DrawerView};
