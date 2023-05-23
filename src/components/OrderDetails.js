/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import Product from '../images/Product.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from '@react-native-material/core';

const OrderDetails = () => {
  const navigation = useNavigation();
  const ProductContainer = () => {
    return (
      <View style={styles.ProductContainer}>
        <View style={styles.ProductContentContainer}>
          <Image source={Product} style={styles.ProductImageStyles} />
          <View
            style={{
              height: '100%',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.keyTextStyles}>
                Order ID -{' '}
                <Text style={styles.valueTextStyles}>178523995ADS</Text>
              </Text>
              <Text style={[styles.valueTextStyles, {marginLeft: 30}]}>
                05-10-2023
              </Text>
            </View>
            <Text style={styles.keyTextStyles}>
              Tracking Number :{' '}
              <Text style={styles.valueTextStyles}>RF8523995ADS</Text>
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.keyTextStyles}>
                Quantity : <Text style={styles.valueTextStyles}>3</Text>
              </Text>
              <Text style={styles.keyTextStyles}>
                Total Amount : <Text style={styles.valueTextStyles}>594</Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 25,
            marginBottom: 5,
          }}>
          <Text style={styles.DetailsButtonStyles}>Details</Text>
          <Text style={styles.DeliveredTextStyles}>Delivered</Text>
        </View>
      </View>
    );
  };
  const ReturnConatiner = () => {
    return (
      <View style={styles.ReturnContainer}>
        <Text style={styles.ContainersHeadingStyles}>
          Need Help With Your Item ?
        </Text>
        <View>
          <Pressable
            style={styles.ReturnContentViewContainer}
            onPress={() => navigation.navigate('ReturnProduct')}>
            <View style={{justifyContent: 'space-evenly', height: '70%'}}>
              <Text style={styles.ReturnContainerMainTextStyles}>
                Return Or Replace Items
              </Text>
              <Text style={styles.ReturnContainerSubTextStyles}>
                Eligible through March 10, 2023
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={25} />
          </Pressable>
        </View>
      </View>
    );
  };
  const ReviewContainer = () => {
    return (
      <View style={styles.ReviewContainer}>
        <Text style={styles.ContainersHeadingStyles}>How's your item?</Text>
        <View style={styles.ReviewContainerViewStyles}>
          <Text style={styles.ReviewContainerSubTextStyles}>
            Write a Product Review
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={25} />
        </View>
      </View>
    );
  };
  const OrderInfoContainer = () => {
    return (
      <View style={styles.OrderInfoContainer}>
        <Text style={styles.ContainersHeadingStyles}>Order Info</Text>
        <View style={styles.OrderInfoContainerViewStyles}>
          <View style={styles.OrderInfoContentConatinerStyles}>
            <Text style={styles.ReviewContainerSubTextStyles}>
              Write a Product Review
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={25} />
          </View>
          <View style={styles.ViewLineStyles} />
          <View style={styles.OrderInfoContentConatinerStyles}>
            <Text style={styles.ReviewContainerSubTextStyles}>
              Share Gift Receipt
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={25} />
          </View>
          <View style={styles.ViewLineStyles} />
          <View style={styles.OrderInfoContentConatinerStyles}>
            <Text style={styles.ReviewContainerSubTextStyles}>
              Download Invoice
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={25} />
          </View>
        </View>
        <Text style={styles.OrderInfoDateStyles}>Ordered on March 5, 2023</Text>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title={'Order Details'} />
      {ProductContainer()}
      {ReturnConatiner()}
      {ReviewContainer()}
      {OrderInfoContainer()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ProductContainer: {
    width: '95%',
    height: 145,
    marginTop: 10,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  ReturnContainer: {
    width: '95%',
    height: 150,
    marginTop: 10,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  ReviewContainer: {
    width: '95%',
    height: 145,
    marginTop: 10,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  OrderInfoContainer: {
    width: '95%',
    height: 250,
    marginTop: 10,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  ProductContentContainer: {
    width: '95%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ProductImageStyles: {
    height: 95,
    width: 90,
  },
  keyTextStyles: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  valueTextStyles: {
    fontSize: 13,
    color: '#666',
    fontWeight: '400',
  },
  DetailsButtonStyles: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#707070',
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  DeliveredTextStyles: {
    color: '#ED7421',
    fontSize: 14,
    fontWeight: '600',
  },

  ReturnContentViewContainer: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#ED7421',
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  ContainersHeadingStyles: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000000CC',
  },
  ReturnContainerMainTextStyles: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  ReturnContainerSubTextStyles: {
    fontSize: 14,
    fontWeight: '700',
    color: '#999',
  },

  ReviewContainerViewStyles: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  ReviewContainerSubTextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },

  OrderInfoContainerViewStyles: {
    width: '100%',
    height: 160,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',
  },
  OrderInfoContentConatinerStyles: {
    width: '95%',
    height: '33%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  OrderInfoDateStyles: {
    fontSize: 14,
    fontWeight: '700',
    color: '#00000080',
  },
  ViewLineStyles: {
    height: 1,
    width: '100%',
    backgroundColor: '#333',
  },
});

export {OrderDetails};
