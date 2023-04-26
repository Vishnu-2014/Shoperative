/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native';
import oilImage from '../../images/oilimage.jpg';

const MyWishlist = () => {
  const [qty, Setqty] = useState(1);
  const productImage = oilImage;
  const stock = 10;

  const IncreaseQty = () => {
    return qty < stock ? Setqty(qty + 1) : Setqty(stock);
  };
  const DecreaseQty = () => {
    return qty > 1 ? Setqty(qty - 1) : Setqty(1);
  };

  const CustomCard = () => {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainerStyles}>
          <Image
            source={productImage}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={styles.productDetailsStyles}>
          <Text style={styles.productNameStyles}>PRODUCT NAME</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPriceStyles}>MRP</Text>
            <Text style={styles.productStrikePriceStyles}>Rs.400</Text>
            <Text style={styles.productPriceStyles}>Rs.345</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <MaterialCommunityIcons
              name="minus"
              size={25}
              color={'#999'}
              style={styles.iconStyles}
              onPress={DecreaseQty}
            />
            <Text style={styles.qtyTextStyles}>{qty}</Text>
            <MaterialCommunityIcons
              name="plus"
              size={25}
              color={'#999'}
              style={styles.iconStyles}
              onPress={IncreaseQty}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <HeaderComponent title={'My Wishlist'} />

      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTextStyles: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: 'black',
    marginVertical: 8,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    shadowOpacity: 0.8,
    elevation: 6,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainerStyles: {
    width: 90,
    height: 90,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  productNameStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  productStrikePriceStyles: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#999',
    textDecorationLine: 'line-through',
    paddingHorizontal: 5,
    paddingRight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPriceStyles: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'none',
  },
  productDetailsStyles: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 30,
    height: 90,
    width: '60%',
    paddingVertical: 5,
  },
  iconStyles: {
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: '#999',
  },
  qtyTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 15,
    color: '#000',
  },
});

export {MyWishlist};
