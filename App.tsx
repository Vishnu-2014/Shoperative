import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Register} from './src/components/Register';
import DropdownExample from './src/components/CustomComponents/CustomDropDown';
import {PowerUserRegister} from './src/components/PowerUserRegister';
import {AddFollowers} from './src/components/AddFollowers';
import {Login} from './src/components/Login';
import {Signup} from './src/components/Signup';
import {ForgetPassword} from './src/components/ForgetPassword';
import {OtpVerification} from './src/components/OtpVerification';
import {HomeScreen} from './src/components/HomeScreen';
import {DrawerView} from './src/components/dashboard/DrawerView';
import {DashBoard} from './src/components/DashBoard';
import {ProductDetails} from './src/components/ProductDetails';
import {Account} from './src/components/NavBarComponents/Account';
import {EditProfile} from './src/components/EditProfile';
import {MyOrders} from './src/components/MyOrders';
import {MyWishlist} from './src/components/ProfileComponents/MyWishlist';

const RootStack = createNativeStackNavigator();
const screens = [
  {
    name: 'Register',
    component: Register,
    headerBackTitle: 'Home',
  },
  {
    name: 'DropdownExample',
    component: DropdownExample,
    headerBackTitle: 'Home',
  },
  {
    name: 'PowerUserRegister',
    component: PowerUserRegister,
    headerBackTitle: 'PowerUserRegister',
  },
  {
    name: 'AddFollowers',
    component: AddFollowers,
    headerBackTitle: 'Home',
  },
  {
    name: 'Login',
    component: Login,
    headerBackTitle: 'Home',
  },
  {
    name: 'SignUp',
    component: Signup,
    headerBackTitle: 'Home',
  },
  {
    name: 'ForgetPassword',
    component: ForgetPassword,
    headerBackTitle: 'Home',
  },
  {
    name: 'OtpVerification',
    component: OtpVerification,
    headerBackTitle: 'Home',
  },
  {
    name: 'DrawerView',
    component: DrawerView,
    headerBackTitle: 'Home',
    headerShown: false,
  },
  {
    name: 'DashBoard',
    component: DashBoard,
    headerBackTitle: 'DashBoard',
  },
  {
    name: 'ProductDetails',
    component: ProductDetails,
    headerBackTitle: 'ProductDetails',
  },
  {
    name: 'Account',
    component: Account,
    headerBackTitle: 'Profile',
  },
  {
    name: 'EditProfile',
    component: EditProfile,
    headerBackTitle: 'EditProfile',
  },
  {
    name: 'MyOrders',
    component: MyOrders,
    headerBackTitle: 'MyOrders',
  },
  {
    name: 'MyWishlist',
    component: MyWishlist,
    headerBackTitle: 'MyWishlist',
  },
];
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="HomeScreen">
          <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          {screens.map((item, index) => (
            <RootStack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{
                headerBackTitle: item.headerBackTitle ?? item.name,
                headerShown: item.headerShown ?? true,
                title: item.headerBackTitle,
                headerTintColor: '#FFFFFF',
                headerStyle: {backgroundColor: '#ED7421'},
                headerShown: false,
              }}
            />
          ))}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
