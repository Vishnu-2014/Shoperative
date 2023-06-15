import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
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
import {ProductDetails} from './src/components/ProductDetails';
import {Account} from './src/components/dashboard/Account';
import {EditProfile} from './src/components/EditProfile';
import {MyOrders} from './src/components/ProfileComponents/MyOrders';
import {MyWishlist} from './src/components/ProfileComponents/MyWishlist';
import {MyWallet} from './src/components/ProfileComponents/MyWallet';
import {Help} from './src/components/ProfileComponents/Help';
import {ChangePassword} from './src/components/ProfileComponents/ChangePassword';
import {SearchBar} from './src/components/SearchPage';
import {ShoppingCart} from './src/components/ShoppingCart';
import {SearchFollowers} from './src/components/SearchFollowers';
import {ShippingAddress} from './src/components/ShippingAddress';
import {CheckOut} from './src/components/CheckOut';
import {OrderDetails} from './src/components/OrderDetails';
import RadioButtons from './src/components/CustomComponents/RadioButton';
import {ReturnProduct} from './src/components/ReturnProduct';
import {ReturnProduct2} from './src/components/ReturnProduct2';
import {ReturnProduct3} from './src/components/ReturnProduct3';
import {ManagePayments} from './src/components/ManagePayments';
import {HeaderComponent} from './src/components/CustomComponents/HeaderComponent';
import {PaymentSuccess} from './src/components/PaymentSuccess';
import {PaymentFailure} from './src/components/PaymentFailure';
import {Splash} from './src/components/Splash';
import {Cosmetics} from './src/components/dashboard/Categories/Cosmetics.js';
import {Provider} from 'react-redux';
import storeConfig from './src/store/configureStore';

const RootStack = createStackNavigator();
const screens = [
  {
    name: 'Register',
    components: Register,
    headerBackTitle: 'Home',
  },
  // {
  //   name: 'DropdownExample',
  //   components: DropdownExample,
  //   headerBackTitle: 'Home',
  // },
  {
    name: 'HeaderComponent',
    components: HeaderComponent,
    headerBackTitle: 'HeaderComponent',
  },
  {
    name: 'PowerUserRegister',
    components: PowerUserRegister,
    headerBackTitle: 'PowerUserRegister',
  },
  {
    name: 'AddFollowers',
    components: AddFollowers,
    headerBackTitle: 'Home',
  },
  // {
  //   name: 'Login',
  //   component: Login,
  //   headerBackTitle: 'Home',
  // },
  {
    name: 'SignUp',
    components: Signup,
    headerBackTitle: 'Home',
  },
  {
    name: 'ForgetPassword',
    components: ForgetPassword,
    headerBackTitle: 'Home',
  },
  {
    name: 'OtpVerification',
    components: OtpVerification,
    headerBackTitle: 'Home',
  },
  {
    name: 'DrawerView',
    components: DrawerView,
    headerBackTitle: 'Home',
    headerShown: false,
  },
  {
    name: 'ProductDetails',
    components: ProductDetails,
    headerBackTitle: 'ProductDetails',
  },
  {
    name: 'Account',
    components: Account,
  },
  {
    name: 'EditProfile',
    components: EditProfile,
    headerBackTitle: 'EditProfile',
  },
  {
    name: 'MyOrders',
    components: MyOrders,
    headerBackTitle: 'MyOrders',
  },
  {
    name: 'MyWishlist',
    components: MyWishlist,
    headerBackTitle: 'MyWishlist',
  },
  {
    name: 'MyWallet',
    components: MyWallet,
    headerBackTitle: 'MyWallet',
  },
  {
    name: 'Help',
    components: Help,
    headerBackTitle: 'Help',
  },
  {
    name: 'ChangePassword',
    components: ChangePassword,
    headerBackTitle: 'ChangePassword',
  },
  {
    name: 'SearchBar',
    components: SearchBar,
    headerBackTitle: 'SearchBar',
  },
  {
    name: 'ShoppingCart',
    components: ShoppingCart,
    headerBackTitle: 'ShoppingCart',
  },
  {
    name: 'SearchFollowers',
    components: SearchFollowers,
    headerBackTitle: 'SearchFollowers',
  },
  {
    name: 'ShippingAddress',
    components: ShippingAddress,
    headerBackTitle: 'ShippingAddress',
  },
  {
    name: 'CheckOut',
    components: CheckOut,
    headerBackTitle: 'CheckOut',
  },
  {
    name: 'OrderDetails',
    components: OrderDetails,
    headerBackTitle: 'OrderDetails',
  },
  {
    name: 'RadioButtons',
    components: RadioButtons,
    headerBackTitle: 'RadioButtons',
  },
  {
    name: 'ReturnProduct',
    components: ReturnProduct,
    headerBackTitle: 'ReturnProduct',
  },
  {
    name: 'ReturnProduct2',
    components: ReturnProduct2,
    headerBackTitle: 'ReturnProduct2',
  },
  {
    name: 'ReturnProduct3',
    components: ReturnProduct3,
    headerBackTitle: 'ReturnProduct3',
  },
  {
    name: 'ManagePayments',
    components: ManagePayments,
    headerBackTitle: 'ManagePayments',
  },
  {
    name: 'PaymentSuccess',
    components: PaymentSuccess,
    headerBackTitle: 'PaymentSuccess',
  },
  {
    name: 'PaymentFailure',
    components: PaymentFailure,
    headerBackTitle: 'PaymentFailure',
  },
  {
    name: 'Splash',
    components: Splash,
    headerBackTitle: 'Splash',
  },
  {
    name: 'Cosmetics',
    components: Cosmetics,
    headerBackTitle: 'Cosmetics',
  },
];
const App = () => {
  const [splash, SetSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetSplash(false);
    }, 2000);
  }, [splash]);

  const renderRootView = () => {
    return (
      <SafeAreaProvider>
        {splash ? (
          <Splash />
        ) : (
          <NavigationContainer>
            <RootStack.Navigator initialRouteName="Login">
              <RootStack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              {screens.map((item, index) => (
                <RootStack.Screen
                  key={index}
                  name={item.name}
                  component={item.components}
                  options={{
                    headerBackTitle: item.headerBackTitle ?? item.name,
                    title: item.headerBackTitle,
                    headerTintColor: '#FFFFFF',
                    headerStyle: {backgroundColor: '#ED7421'},
                    headerShown: false,
                  }}
                />
              ))}
            </RootStack.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    );
  };
  const store = storeConfig();
  return <Provider store={store}>{renderRootView()}</Provider>;
};

export default App;
