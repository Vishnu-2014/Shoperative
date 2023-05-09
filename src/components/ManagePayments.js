import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import HDFC from '../images/Payments/HDFC.png';
import ICICI from '../images/Payments/icici.png';
import SBI from '../images/Payments/SBI.png';
import Gpay from '../images/Payments/Gpay.png';
import PhonePe from '../images/Payments/phonepe.png';
import Paytm from '../images/Payments/paytm.png';
import Card from '../images/Payments/Card.png';
import {ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ManagePayments = () => {
  const ImageComponent = image => {
    return (
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageStyles} />
      </View>
    );
  };

  const FeildsContainer = (imageSource, title) => {
    return (
      <View style={styles.feildsContainerStyles}>
        {ImageComponent(imageSource)}
        <Text style={styles.textStyles}>{title}</Text>
      </View>
    );
  };

  const NetBankingBox = () => {
    return (
      <View style={styles.NetBankingCardStyles}>
        <Text style={styles.headingTextStyles}>Net Banking</Text>
        {FeildsContainer(HDFC, 'HDFC Bank')}
        {FeildsContainer(ICICI, 'ICICI Bank')}
        {FeildsContainer(SBI, 'SBI Bank')}
      </View>
    );
  };

  const cardsBox = () => {
    return (
      <View style={[styles.NetBankingCardStyles]}>
        <Text style={styles.headingTextStyles}>Cards</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {FeildsContainer(Card, 'New Cards')}
          <MaterialIcons name="arrow-forward-ios" size={25} />
        </View>
      </View>
    );
  };

  const walletBox = () => {
    return (
      <View style={styles.NetBankingCardStyles}>
        <Text style={styles.headingTextStyles}>Wallet</Text>
        {FeildsContainer(Paytm, 'Paytm Wallet')}
        {FeildsContainer(PhonePe, 'PhonePe Wallet')}
      </View>
    );
  };

  const upiBox = () => {
    return (
      <View style={styles.NetBankingCardStyles}>
        <Text style={styles.headingTextStyles}>UPI</Text>
        {FeildsContainer(Gpay, 'Gpay')}
        {FeildsContainer(Paytm, 'Paytm')}
        {FeildsContainer(PhonePe, 'PhonePe')}
      </View>
    );
  };

  return (
    <>
      <HeaderComponent title={'Manage Payments'} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {NetBankingBox()}
        {cardsBox()}
        {walletBox()}
        {upiBox()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headingTextStyles: {
    fontSize: 16,
    color: '#3F3F3F',
    fontWeight: '700',
  },
  textStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3F3F3F',
    marginLeft: 20,
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#FDEDE3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 30,
    height: 30,
  },
  NetBankingCardStyles: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
  },
  feildsContainerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
});

export {ManagePayments};
