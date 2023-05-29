import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';

const ManagePayments = () => {
  const navigation = useNavigation();
  const ImageComponent = image => {
    return (
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageStyles} />
      </View>
    );
  };

  const FeildsContainer = (imageSource, title, onPress) => {
    return (
      <Pressable style={styles.feildsContainerStyles} onPress={onPress}>
        {ImageComponent(imageSource)}
        <Text style={styles.textStyles}>{title}</Text>
      </Pressable>
    );
  };

  const NetBankingBox = () => {
    return (
      <View style={styles.NetBankingCardStyles}>
        <Text style={styles.headingTextStyles}>Net Banking</Text>
        {FeildsContainer(HDFC, 'HDFC Bank', () =>
          navigation.navigate('PaymentSuccess'),
        )}
        {FeildsContainer(ICICI, 'ICICI Bank', () =>
          navigation.navigate('PaymentSuccess'),
        )}
        {FeildsContainer(SBI, 'SBI Bank', () =>
          navigation.navigate('PaymentSuccess'),
        )}
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
        {FeildsContainer(Gpay, 'Gpay', () =>
          navigation.navigate('PaymentFailure'),
        )}
        {FeildsContainer(Paytm, 'Paytm', () =>
          navigation.navigate('PaymentFailure'),
        )}
        {FeildsContainer(PhonePe, 'PhonePe', () =>
          navigation.navigate('PaymentFailure'),
        )}
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
    borderBottomColor: '#70707020',
  },
  feildsContainerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
});

export {ManagePayments};
