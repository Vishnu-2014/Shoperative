import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Button,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import Product from '../images/Product.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReturnProduct3 = () => {
  const [selectedOption, setSelectedOption] = useState('hello');

  const AmountRefundMethodData = [
    'Item defective or doesnt work',
    'Add Money To Wallet',
    'Refund to the orginal Payment Menthod',
  ];

  const handleOptionChange = value => {
    setSelectedOption(value);
  };

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
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title={'Return'} />
      {ProductContainer()}
      <View style={styles.card}>
        <View style={styles.box}>
          <View>
            <Text style={styles.contentHeadingStyles}>
              why are you returning this ?
            </Text>
            <Text style={styles.contentIssueStyles}>Product Quality Issue</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} />
        </View>

        <Text style={styles.commentHeadingStyles}>How can we make Right?</Text>

        <View style={styles.RadioButtonMaincontainer}>
          {AmountRefundMethodData.map(option => (
            <View key={option} style={styles.RadioButtonContainer}>
              <RadioButton
                value={option}
                status={selectedOption === option ? 'checked' : 'unchecked'}
                onPress={() => handleOptionChange(option)}
                color="#ED7421"
                uncheckedColor="#999"
              />
              <Text style={styles.ReturnOptionsTextStyles}>{option}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.commentHeadingStyles}>NOTE : </Text>
        <View style={{width: '95%', alignSelf: 'center'}}>
          <Text
            style={{
              color: '#00000080',
              fontFamily: 'Poppins-Medium',
              fontWeight: '500',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the indus try's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scramb led it to make a type specimen book.
          </Text>
        </View>
        <Pressable style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>CONTINUE</Text>
        </Pressable>
      </View>
    </View>
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
  card: {
    width: '95%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: 10,
    height: '100%',
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 60,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070',
  },
  contentHeadingStyles: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  contentIssueStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#00000080',
  },
  RadioButtonMaincontainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#70707080',
    marginTop: 10,
  },
  RadioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    borderBottomColor: '#707070',
  },
  ReturnOptionsTextStyles: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000CC',
    marginLeft: 5,
  },

  commentHeadingStyles: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000CC',
    marginLeft: '2.5%',
    marginTop: 10,
  },
  buttonStyles: {
    width: '95%',
    height: 50,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  buttonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },
});

export {ReturnProduct3};
