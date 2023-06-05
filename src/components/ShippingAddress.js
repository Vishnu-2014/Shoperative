/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {placeHolderTextColor} from '../theme/colors';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import DropdownExample from './CustomComponents/CustomDropDown';
import {useNavigation} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../images/logo.png';

const ShippingAddress = () => {
  const dispatch = useDispatch();
  //check below two lines will bring th data from api
  const loginResult = useSelector(state => state.login);
  const navigation = useNavigation();
  const CustomFeilds = (title, placeholderText) => {
    return (
      <View style={styles.feildsContainerStyles}>
        <Text style={styles.feildHeadingStyles}>{title}*</Text>
        <TextInput
          style={styles.inputFeildsStyles}
          placeholder={placeholderText}
          placeholderTextColor={placeHolderTextColor}
        />
      </View>
    );
  };

  const CustomPaymentFeilds = (priceDetailsFeild, PriceFeild) => {
    return (
      <View style={styles.CustomPaymentFeildsContainerStyles}>
        <Text style={styles.priceDetailsContainer}>{priceDetailsFeild}</Text>
        <Text style={styles.CustomPaymentFeildsTextStyles}>{PriceFeild}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Shipping Address'} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
        {CustomFeilds('Name', 'Vishnu')}
        {CustomFeilds('Mobile Number', '+91 7788335544')}
        {CustomFeilds('Address', 'Himagiri Nagar')}

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 80,
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View style={{width: '48%', justifyContent: 'space-between'}}>
            <Text style={styles.feildHeadingStyles}>State</Text>
            <TextInput
              placeholder="Telangana"
              placeholderTextColor={placeHolderTextColor}
              style={[styles.inputFeildsStyles, {backgroundColor: '#F3F3F3'}]}
            />
          </View>
          <View style={{width: '48%', justifyContent: 'space-between'}}>
            <Text style={styles.feildHeadingStyles}>City</Text>
            <TextInput
              placeholder="Hyderabad"
              placeholderTextColor={placeHolderTextColor}
              style={[styles.inputFeildsStyles, {backgroundColor: '#F3F3F3'}]}
            />
          </View>
        </View>

        {CustomFeilds('Pincode', '500008')}

        <View
          style={{
            width: '100%',
            marginTop: 15,
          }}>
          <Text style={styles.feildHeadingStyles}>Payment Mode</Text>
          <DropdownExample />
        </View>

        <Text style={styles.paymentDetailsHeadingTextStyles}>
          Order Summary
        </Text>

        <View style={styles.PaymentsConatainerStyles}>
          {CustomPaymentFeilds('Total Item Count', 4)}
          {CustomPaymentFeilds('Sub Total', '₹ 820')}
          {CustomPaymentFeilds('Service Charge', '₹ 0')}
          {CustomPaymentFeilds('Total Savings', '₹ 0')}
          {CustomPaymentFeilds('Shipping Charges', '₹ 0')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              color: '#FF0000',
            }}>
            Grand Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#FF0000',
              fontWeight: '800',
            }}>
            ₹ 892
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.buttonStyles, {backgroundColor: '#337AB7'}]}>
          <Text style={styles.buttonTextStyles}>CONTINUE SHOPPING</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonStyles, {backgroundColor: '#ED7421'}]}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              // image: Logo,
              currency: 'INR',
              key: 'rzp_test_fBPQsOjg7Bt8Xa',
              amount: '20000',
              name: 'Shoperative',
              order_id: '', //Replace this with an order_id created using Orders API.
              prefill: {
                email: 'Shoperative@example.com',
                // contact: loginResult.mobile,
                // name: loginResult.name,
                contact: '8328651345',
                name: 'Shoperative',
              },
              theme: {color: '#ED7421'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          <Text style={styles.buttonTextStyles}>PROCEED TO PAY</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginBottom: 60,
  },
  feildsContainerStyles: {
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  feildHeadingStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000CC',
  },

  inputFeildsStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#F3F3F3',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 15,
  },
  CustomPaymentFeildsContainerStyles: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  CustomPaymentFeildsTextStyles: {
    fontSize: 14,
    color: '#3f3f3f',
    fontWeight: '600',
  },
  PaymentsConatainerStyles: {
    height: 150,
    justifyContent: 'space-between',
  },
  priceDetailsContainer: {
    color: '#3F3F3F',
    fontSize: 14,
    fontWeight: '700',
  },

  paymentDetailsHeadingTextStyles: {
    color: '#3F3F3F',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginVertical: 15,
  },

  //-------------------

  buttonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    width: '100%',
    alignItems: 'center',
    bottom: 0,
  },
  buttonStyles: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },
});

export {ShippingAddress};
