/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {OrderData} from '../../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
const Tab = createMaterialTopTabNavigator();
const MyOrders = () => {
  const CustomCards = item => {
    const {
      orderId,
      time,
      trackId,
      quntity,
      totalAmount,
      leftTitle,
      rightTitle,
    } = item;
    return (
      <View style={styles.card}>
        <View style={styles.InsideCardView1}>
          <Text style={styles.OrdersTextStyles}>{`Order ID -${orderId}`} </Text>
          <Text style={{fontWeight: '500'}}>{time}</Text>
        </View>
        <Text
          style={{alignSelf: 'flex-start', marginTop: 5, fontWeight: '500'}}>
          Tracking Number: <Text style={styles.TrackingText}>{trackId}</Text>
        </Text>
        <View style={styles.InsideCardView2}>
          <Text style={{fontWeight: '500'}}>
            Quantity: <Text style={styles.TrackingText}>{quntity}</Text>
          </Text>
          <Text style={{fontWeight: '500'}}>
            Total Amount: <Text style={styles.TrackingText}>{totalAmount}</Text>
          </Text>
        </View>
        <View style={styles.InsideCardView3}>
          <View style={styles.DetailsButtonStyles}>
            <Text
              style={{
                color: '#333',
                fontSize: 12,
                fontWeight: '500',
              }}>
              {leftTitle}
            </Text>
          </View>
          <Text style={styles.DeliveredTextStyles}>{rightTitle}</Text>
        </View>
      </View>
    );
  };

  const YourOrders = () => {
    return (
      <ScrollView style={styles.container}>
        {OrderData.map(item => CustomCards(item))}
      </ScrollView>
    );
  };

  return (
    <>
      <HeaderComponent title={'My Orders'} />

      <Tab.Navigator
        screenOptions={{tabBarLabelStyle: {fontSize: 12, fontWeight: '500'}}}>
        <Tab.Screen name="Delivered" component={YourOrders} />
        <Tab.Screen name="Proecessing" component={YourOrders} />
        <Tab.Screen name="Cancelled" component={YourOrders} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    width: '100%',
    backgroundColor: '#ED7421',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTextStyles: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  headerBackArrowStyles: {
    paddingHorizontal: 15,
    color: '#FFF',
  },
  container: {
    backgroundColor: '#ffffff',
  },
  card: {
    width: '90%',
    height: 140,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: 'black',
    marginVertical: 8,
    marginHorizontal: 6,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  InsideCardView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    fontFamily: 'Poppins-Medium',
  },
  OrdersTextStyles: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  TrackingText: {
    fontSize: 13,
    color: '#000000',
    fontWeight: '500',
  },
  InsideCardView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    width: '100%',
  },
  DetailsButtonStyles: {
    borderWidth: 1,
    height: 25,
    width: 90,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#707070',
  },
  InsideCardView3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  DeliveredTextStyles: {
    fontSize: 13,
    fontWeight: '500',
    color: '#ED7421',
  },
  topNavBarTextStyles: {
    flex: 1,
  },
  topNavBarTextStyles2: {
    flex: 2,
  },
});

export {MyOrders};
