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
import {HomeScreen} from './src/components/Home';

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
    headerBackTitle: 'Home',
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
];
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          {screens.map((item, index) => (
            <RootStack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{headerBackTitle: item.headerBackTitle ?? item.name}}
            />
          ))}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
