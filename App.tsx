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
import {ProductDetails} from './src/components/ProductDetails';
import {Account} from './src/components/dashboard/Account';
import {EditProfile} from './src/components/EditProfile';
import {MyOrders} from './src/components/MyOrders';
import {MyWishlist} from './src/components/ProfileComponents/MyWishlist';
import {MyWallet} from './src/components/ProfileComponents/MyWallet';
import {Help} from './src/components/ProfileComponents/Help';
import {ChangePassword} from './src/components/ProfileComponents/ChangePassword';
import {AllCategories} from './src/components/AllCategories';
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
import {Provider} from 'react-redux';
import storeConfig from './src/store/configureStore';

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
    name: 'HeaderComponent',
    component: HeaderComponent,
    headerBackTitle: 'HeaderComponent',
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
  {
    name: 'MyWallet',
    component: MyWallet,
    headerBackTitle: 'MyWallet',
  },
  {
    name: 'Help',
    component: Help,
    headerBackTitle: 'Help',
  },
  {
    name: 'ChangePassword',
    component: ChangePassword,
    headerBackTitle: 'ChangePassword',
  },
  {
    name: 'AllCategories',
    component: AllCategories,
    headerBackTitle: 'AllCategories',
  },
  {
    name: 'SearchBar',
    component: SearchBar,
    headerBackTitle: 'SearchBar',
  },
  {
    name: 'ShoppingCart',
    component: ShoppingCart,
    headerBackTitle: 'ShoppingCart',
  },
  {
    name: 'SearchFollowers',
    component: SearchFollowers,
    headerBackTitle: 'SearchFollowers',
  },
  {
    name: 'ShippingAddress',
    component: ShippingAddress,
    headerBackTitle: 'ShippingAddress',
  },
  {
    name: 'CheckOut',
    component: CheckOut,
    headerBackTitle: 'CheckOut',
  },
  {
    name: 'OrderDetails',
    component: OrderDetails,
    headerBackTitle: 'OrderDetails',
  },
  {
    name: 'RadioButtons',
    component: RadioButtons,
    headerBackTitle: 'RadioButtons',
  },
  {
    name: 'ReturnProduct',
    component: ReturnProduct,
    headerBackTitle: 'ReturnProduct',
  },
  {
    name: 'ReturnProduct2',
    component: ReturnProduct2,
    headerBackTitle: 'ReturnProduct2',
  },
  {
    name: 'ReturnProduct3',
    component: ReturnProduct3,
    headerBackTitle: 'ReturnProduct3',
  },
  {
    name: 'ManagePayments',
    component: ManagePayments,
    headerBackTitle: 'ManagePayments',
  },
  {
    name: 'PaymentSuccess',
    component: PaymentSuccess,
    headerBackTitle: 'PaymentSuccess',
  },
  {
    name: 'PaymentFailure',
    component: PaymentFailure,
    headerBackTitle: 'PaymentFailure',
  },
];
const App = () => {
  const renderRootView = () => {
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
  const store = storeConfig();
  return <Provider store={store}>{renderRootView()}</Provider>;
};

export default App;
