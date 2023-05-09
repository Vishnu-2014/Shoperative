import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import discountIcon from '../images/discountIcon.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';

const ShoppingCart = () => {
  const productCartDetails = (productName, qty, price) => {
    return (
      <View style={styles.productContainerStyles}>
        <View style={styles.circleContainerStyles}>
          <View style={styles.circleStyles} />
        </View>
        <View style={styles.productDetailsContainerStyles}>
          <Text style={styles.productNameStyles}>{productName}</Text>
          <Text style={{fontSize: 12}}>{qty}</Text>
        </View>
        <View style={styles.qtyChangerContainerStyles}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 75,
              height: 30,
              justifyContent: 'space-evenly',
              borderRadius: 30,
              borderWidth: 1.5,
              borderColor: '#ccc',
            }}>
            <MaterialCommunityIcons
              name="minus"
              size={18}
              color={'#999'}
              style={styles.iconStyles}
            />
            <Text style={styles.qtyTextStyles}>1</Text>
            <MaterialCommunityIcons
              name="plus"
              size={18}
              color={'#999'}
              style={styles.iconStyles}
            />
          </View>
        </View>

        <View style={styles.priceContainerStyles}>
          <Text style={{color: '#3f3f3f', fontWeight: '500'}}>₹ {price}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <HeaderComponent title={'Shopping Cart'} />
      <View style={styles.container}>
        <View style={styles.offerContainerStyles}>
          <Text style={styles.monerSavedTextStyles}>
            ₹ 16 saved on this order
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={discountIcon} style={styles.discountImageStyls} />
            <Text style={styles.myOfferTextStyles}>
              You have <Text style={{fontWeight: '500'}}>FREE</Text> delivery
            </Text>
          </View>
        </View>

        {productCartDetails('Green Mirchi', '100 gms', 12)}
        <View style={styles.planeLineStyles} />
        {productCartDetails('Potatao', '10 kgs', 12)}
        <View style={styles.planeLineStyles} />
        {productCartDetails('Tomato', '5 kgs', 12)}
        <View style={styles.planeLineStyles} />
        {productCartDetails('onion', '300 gms', 12)}

        <View style={styles.coupanContainerStyles}>
          <Image source={discountIcon} style={styles.coupanCodeImageStyles} />
          <Text style={styles.coupanCodeTextStyles}>Add a Coupon Code</Text>
        </View>

        <View style={styles.paymentsDetailsContainer}>
          <Text style={styles.headingPaymentDetailsStyle}>PAYMENT DETAILS</Text>
          <View style={styles.boxPaymentDetailsStyles}>
            <Text style={styles.textStyles}>Item Total</Text>
            <Text style={styles.pricePaymentStyles}>₹ 54</Text>
          </View>
          <View style={styles.planeLineStyles} />
          <View style={styles.boxPaymentDetailsStyles}>
            <Text style={styles.textStyles}>Partner Delivery Fee</Text>
            <Text style={styles.pricePaymentStyles}>₹ 10</Text>
          </View>
          <View style={styles.planeLineStyles} />
          <View style={styles.boxPaymentDetailsStyles}>
            <Text style={styles.textStyles}>
              Cash Discount{'\n'}20% off upto 100
            </Text>
            <Text style={styles.pricePaymentStyles}>₹ 14</Text>
          </View>
          <View style={styles.planeLineStyles} />
          <View style={styles.boxPaymentDetailsStyles}>
            <Text style={styles.textStyles}>To Pay</Text>
            <Text style={[styles.pricePaymentStyles, {color: '#ED7421'}]}>
              ₹ 44
            </Text>
          </View>
        </View>

        <Pressable style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>PROCEED TO CHECKOUT</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  offerContainerStyles: {
    width: '100%',
    height: 70,
    backgroundColor: '#FDEDE3',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  monerSavedTextStyles: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ED7421',
  },
  discountImageStyls: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  myOfferTextStyles: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ED7421',
  },
  productContainerStyles: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleContainerStyles: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
  },
  circleStyles: {
    width: 10,
    height: 10,
    backgroundColor: '#ED7421',
    borderRadius: 30,
  },
  productDetailsContainerStyles: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  productNameStyles: {
    fontSize: 14,
    // fontFamily: 'Poppins-Medium',
    color: '#3F3F3F',
    fontWeight: '500',
  },
  qtyTextStyles: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  priceContainerStyles: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyChangerContainerStyles: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
  },
  coupanContainerStyles: {
    width: '100%',
    height: 55,
    backgroundColor: '#FDEDE3',
    alignItems: 'center',
    flexDirection: 'row',
  },
  coupanCodeTextStyles: {
    color: '#ED7421',
    fontSize: 16,
    fontWeight: '500',
  },
  coupanCodeImageStyles: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  paymentsDetailsContainer: {
    width: '100%',
    marginTop: 10,
  },
  boxPaymentDetailsStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    height: 60,
    alignItems: 'center',
  },
  headingPaymentDetailsStyle: {
    marginHorizontal: '5%',
    color: '#3F3F3F',
    fontSize: 16,
    fontWeight: '500',
  },
  pricePaymentStyles: {
    fontSize: 15,
    fontWeight: '500',
    color: '#3f3f3f',
  },
  buttonStyles: {
    backgroundColor: '#ED7421',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'bottom',
  },
  buttonTextStyles: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  planeLineStyles: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#707070',
  },
  textStyles: {
    fontWeight: '500',
    color: '#707070',
    fontSize: 14,
  },
});

export {ShoppingCart};
