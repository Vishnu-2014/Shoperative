import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import homeIcon from '../../images/home.png';
import accountIcon from '../../images/account.png';
import categoriesIcon from '../../images/categories.png';
import searchIcon from '../../images/search.png';
import offerIcon from '../../images/offer.png';
import {Home} from './Home';
import {Account} from './Account';
import {Categories} from './Categories';
import {Offers} from './Offers';
import {Search} from './Search';
import {Image} from 'react-native';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#E26712',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = homeIcon;
            } else if (route.name === 'Categories') {
              iconName = categoriesIcon;
            } else if (route.name === 'Search') {
              iconName = searchIcon;
            } else if (route.name === 'Offers') {
              iconName = offerIcon;
            } else if (route.name === 'Account') {
              iconName = accountIcon;
            }
            return (
              <Image
                source={iconName}
                style={{height: 24, width: 24, tintColor: color}}
              />
            );
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Offers" component={Offers} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export {BottomTabs};
