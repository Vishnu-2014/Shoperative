import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import Product from '../images/Product.png';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ReturnProduct = () => {
  const [selectedOption, setSelectedOption] = useState('hello');
  const navigation = useNavigation();

  const returnReasonData = [
    'Item defective or doesn work',
    'No Longer Needed',
    'Product and Shipping box both damaged',
    'Wrong item was sent',
    'Bought by Mistake',
    'Item Arrived too late',
    'Better Price Available',
    'Product ok, but shipping box damaged',
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
      <View style={styles.headingConatinerStyles}>
        <Text style={styles.headingConatinerTextStyles}>
          why are you returning this ?
        </Text>
      </View>

      <View style={styles.RadioButtonMaincontainer}>
        {returnReasonData.map(option => (
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
        <Pressable
          style={styles.buttonStyles}
          onPress={() => {
            navigation.navigate('ReturnProduct2');
          }}>
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

  headingConatinerStyles: {
    width: '95%',
    backgroundColor: '#ED742140',
    alignSelf: 'center',
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headingConatinerTextStyles: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000CC',
  },
  RadioButtonMaincontainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
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
  buttonStyles: {
    width: '95%',
    height: 50,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },
});

export {ReturnProduct};
