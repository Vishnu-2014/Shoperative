/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {OrderData} from '../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
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
      <ScrollView style={styles.card}>
        <View style={styles.InsideCardView1}>
          <Text style={styles.OrdersTextStyles}>{`Order ID -${orderId}`} </Text>
          <Text>{time}</Text>
        </View>
        <Text style={{alignSelf: 'flex-start', marginTop: 5}}>
          Tracking Number: <Text style={styles.TrackingText}>{trackId}</Text>
        </Text>
        <View style={styles.InsideCardView2}>
          <Text>
            Quantity: <Text style={styles.TrackingText}>{quntity}</Text>
          </Text>
          <Text>
            Total Amount: <Text style={styles.TrackingText}>{totalAmount}</Text>
          </Text>
        </View>
        <View style={styles.InsideCardView3}>
          <View style={styles.DetailsButtonStyles}>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              {leftTitle}
            </Text>
          </View>
          <Text style={styles.DeliveredTextStyles}>{rightTitle}</Text>
        </View>
      </ScrollView>
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

      <Tab.Navigator>
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
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: 'black',
    marginVertical: 8,
    marginHorizontal: 6,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 16,
    minHeight: 140,
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
    fontFamily: 'Poppins-Medium',
  },
  TrackingText: {
    fontSize: 13,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
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
