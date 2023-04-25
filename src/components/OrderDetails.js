import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';

const OrderDetails = () => {
  const ProductContainer = title => {
    return (
      <View style={styles.ProductContainer}>
        <Text>{title}</Text>
      </View>
    );
  };
  const ReturnConatiner = title => {
    return (
      <View style={styles.ReturnContainer}>
        <Text>{title}</Text>
      </View>
    );
  };
  const ReviewContainer = title => {
    return (
      <View style={styles.ReviewContainer}>
        <Text>{title}</Text>
      </View>
    );
  };
  const OrderInfoContainer = title => {
    return (
      <View style={styles.OrderInfoContainer}>
        <Text>{title}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title={'Order Details'} />
      {ProductContainer('Order ID - 178523995ADS')}
      {ReturnConatiner('Hell')}
      {ReviewContainer('Hell')}
      {OrderInfoContainer('Hell')}
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
    marginTop: 15,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  ReturnContainer: {
    width: '95%',
    height: 150,
    marginTop: 15,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  ReviewContainer: {
    width: '95%',
    height: 145,
    marginTop: 15,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  OrderInfoContainer: {
    width: '95%',
    height: 310,
    marginTop: 15,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
});

export {OrderDetails};
