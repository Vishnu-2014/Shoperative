import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import DropdownExample from './CustomComponents/CustomDropDown';

const ShippingAddress = () => {
  const CustomFeilds = (title, placeholderText) => {
    return (
      <View style={styles.feildsContainerStyles}>
        <Text style={styles.feildHeadingStyles}>{title}*</Text>
        <TextInput
          style={styles.inputFeildsStyles}
          placeholder={placeholderText}
          placeholderTextColor={'#999'}
        />
      </View>
    );
  };

  const CustomPaymentFeilds = (priceDetailsFeild, PriceFeild) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.priceDetailsContainer}>{priceDetailsFeild}</Text>
        <Text
          style={{
            fontSize: 14,
            color: '#3f3f3f',
            fontWeight: '600',
          }}>
          {PriceFeild}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Shipping Address'} />

      <ScrollView style={styles.card}>
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
            <Text style={styles.feildHeadingStyles}>state</Text>
            <TextInput
              placeholder="Telangana"
              style={{backgroundColor: '#F3F3F3'}}
            />
          </View>
          <View style={{width: '48%', justifyContent: 'space-between'}}>
            <Text style={styles.feildHeadingStyles}>City</Text>
            <TextInput
              placeholder="Hyderabad"
              style={{backgroundColor: '#F3F3F3'}}
            />
          </View>
        </View>

        {CustomFeilds('Pincode', '500008')}

        <View
          style={{
            width: '100%',
            marginTop: 15,
          }}>
          <Text>Payment Mode</Text>
          <DropdownExample />
        </View>

        <Text style={styles.paymentDetailsHeadingTextStyles}>
          Order Summary
        </Text>

        <View style={styles.PaymentsConatainerStyles}>
          {CustomPaymentFeilds('Total Item Count', 4)}
          {CustomPaymentFeilds('Sub Total', 820)}
          {CustomPaymentFeilds('Service Charge', 0)}
          {CustomPaymentFeilds('Total Savings', 0)}
          {CustomPaymentFeilds('Shipping Charges', 0)}
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
              fontSize: 19,
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
        <Pressable style={[styles.buttonStyles, {backgroundColor: '#ED7421'}]}>
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
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  inputFeildsStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#F3F3F3',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 15,
    color: '#666',
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
