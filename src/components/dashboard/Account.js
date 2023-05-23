/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import profileImage from '../../images/userimag.jpg';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const Account = () => {
  const navigation = useNavigation();
  const loginResult = useSelector(state => state.login);
  const CustomFeilds = ({iconName, title, onPressButton}) => {
    return (
      <Pressable style={styles.boxContainerStyles} onPress={onPressButton}>
        <View style={styles.insideBoxContainerStyles}>
          <FontAwesome name={iconName} size={20} style={styles.boxIconStyles} />
          <Text style={styles.boxTextStyles}>{title}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainerStyles}>
        <Ionicons
          name="arrow-back"
          size={20}
          style={styles.backArrowStyles}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Text style={styles.topHeaddingStyles}>Profile</Text>
      </View>
      <Image source={profileImage} style={styles.userImageStyles} />
      {/* <MaterialCommunityIcons
          name="circle-edit-outline"
          size={25}
          style={styles.userImageEditIconStyles}
        /> */}
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={styles.cardContainer}>
        <Text style={styles.profileNameTextStyles}>{loginResult.name}</Text>
        <Text style={styles.numberTextStyles}>+91-{loginResult.mobile}</Text>

        <CustomFeilds iconName={'user'} title={'My Profile'} />
        <CustomFeilds
          iconName={'shopping-bag'}
          title={'My Orders'}
          onPressButton={() => navigation.navigate('MyOrders')}
        />
        <CustomFeilds iconName={'shopping-cart'} title={'My Shared Cart'} />
        <CustomFeilds
          iconName={'heart'}
          title={'My Wishlist'}
          onPressButton={() => navigation.navigate('MyWishlist')}
        />
        <CustomFeilds
          iconName={'shopping-basket'}
          title={'My Regular Basket'}
        />
        <CustomFeilds iconName={'address-book-o'} title={'Address Book'} />
        <CustomFeilds
          iconName={'help-circle'}
          title={'Help'}
          onPressButton={() => navigation.navigate('Help')}
        />
        <CustomFeilds
          iconName={'lock'}
          title={'Change Password'}
          onPressButton={() => navigation.navigate('ChangePassword')}
        />
        <CustomFeilds iconName={'power-off'} title={'Logout'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  profileIconStyles: {
    width: 50,
    height: 50,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerStyles: {
    backgroundColor: '#ED7421',
    height: 125,
    width: '100%',
    flexDirection: 'row',
  },
  backArrowStyles: {
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#FFF',
  },
  topHeaddingStyles: {
    marginTop: 20,
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  userImageStyles: {
    width: 90,
    height: 90,
    borderRadius: 80,
    marginTop: -45,
    textAlign: 'center',
  },
  userImageEditIconStyles: {
    marginTop: -60,
    marginRight: -85,
    color: '#FFF',
  },
  cardContainer: {
    flex: 1,
    width: '100%',
  },
  boxContainerStyles: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  insideBoxContainerStyles: {
    flexDirection: 'row',
  },
  boxIconStyles: {
    color: '#000',
    paddingRight: 15,
  },
  boxTextStyles: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
  },
  profileNameTextStyles: {
    fontSize: 24,
    fontWeight: '700',
    color: '#242424',
  },
  numberTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#242424',
  },
});

export {Account};
