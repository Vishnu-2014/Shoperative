import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import {Row, Rows, Table, TableWrapper} from 'react-native-table-component';
import {color} from '@rneui/base';

const headers = [
  'UserDetails',
  'UserName',
  'Total Items',
  'Total Quantity',
  'Total Price',
];
const rows = [
  ['+SF180320586', 'Vishnu', 4, '1 KG', '₹ 450'],
  ['+SF180320586', 'Vishnu', 4, '1 KG', '₹ 450'],
  ['+SF180320586', 'Vishnu', 4, '1 KG', '₹ 450'],
  ['+SF180320586', 'Vishnu', 4, '1 KG', '₹ 450'],
  ['+SF180320586', 'Vishnu', 4, '1 KG', '₹ 450'],
  ['+SF180320586', 'Vishnu', 4, '1 KG', '₹ 450'],
];

const CheckOut = () => {
  const CustomPaymentFeilds = (priceDetailsFeild, PriceFeild) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          alignSelf: 'center',
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
  const CustomButton = buttonTitle => {
    return (
      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>{buttonTitle}</Text>
      </Pressable>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title={'Back'} />
      <View style={styles.buttonsContainerView}>
        <View style={styles.horizontalButtonsView}>
          {CustomButton('Closing Date')}
          {CustomButton('Share With Followers')}
        </View>
        <View style={styles.horizontalButtonsView}>
          {CustomButton('Share Cart - By user')}
          {CustomButton('Share Cart - By Item')}
        </View>
      </View>

      <View style={{width: '100%'}}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#7070703D'}}>
          <Row
            data={headers}
            style={{backgroundColor: '#ED742133', height: 40}}
            flexArr={[1.75, 1.5, 1, 1, 1.25]}
            textStyle={{
              textAlign: 'center',
              color: '#7F7F7F',
              fontSize: 12,
              fontWeight: '700',
            }}
          />
          <TableWrapper style={{flexDirection: 'row'}}>
            <Rows
              data={rows}
              heightArr={[40, 40, 40, 40, 40, 40]}
              flexArr={[1.75, 1.5, 1, 1, 1.25]}
              textStyle={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '700',
                color: '#00000099',
              }}
            />
          </TableWrapper>
        </Table>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '800',
          color: '#3F3F3F',
          marginLeft: '5%',
          marginVertical: 10,
        }}>
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
          width: '90%',
          justifyContent: 'space-between',
          marginVertical: 20,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Bold',
            color: '#ED7421',
          }}>
          Grand Total
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#ED7421',
            fontWeight: '500',
          }}>
          ₹ 892
        </Text>
      </View>

      <Pressable style={styles.checkOutButtonStyles}>
        <Text style={styles.checkOutButtonTextStyles}>
          CONTINUE TO CHECKOUT
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  buttonStyles: {
    width: '48%',
    height: '100%',
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#00000099',
  },
  buttonsContainerView: {
    width: '100%',
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  horizontalButtonsView: {
    flexDirection: 'row',
    width: '95%',
    height: '45%',
    justifyContent: 'space-between',
  },
  priceDetailsContainer: {
    color: '#3F3F3F',
    fontSize: 14,
    fontWeight: '500',
  },
  PaymentsConatainerStyles: {
    height: 150,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  checkOutButtonStyles: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED7421',
  },
  checkOutButtonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
});

export {CheckOut};
