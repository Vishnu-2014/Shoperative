import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Button,
} from 'react-native';
import {HeaderComponent} from './CustomComponents/HeaderComponent';
import Product from '../images/Product.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReturnProduct2 = () => {
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
          <MaterialIcons name="arrow-forward-ios" size={25} />
        </View>
        <View
          style={[
            styles.box,
            {borderBottomWidth: 0.5, borderBottomColor: '#707070'},
          ]}>
          <View>
            <Text style={styles.contentHeadingStyles}>Please tell us more</Text>
            <Text style={styles.contentIssueStyles}>Poor Fabric Quality</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} />
        </View>

        <Text style={styles.commentHeadingStyles}>Comments (Optional)</Text>
        <TextInput multiline={true} style={styles.commentBoxFeildStyles} />
        <Text style={styles.remainingTextContainerStyles}>
          200 Charecters Remaining
        </Text>
        <Text style={styles.commentHeadingStyles}>NOTE : </Text>
        <View style={{width: '95%', alignSelf: 'center'}}>
          <Text style={{color: '#666', fontFamily: 'Poppins-Medium'}}>
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
  },
  contentHeadingStyles: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  contentIssueStyles: {
    fontSize: 14,
    fontWeight: '700',
    color: '#999',
  },
  commentHeadingStyles: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000CC',
    marginLeft: '2.5%',
    marginTop: 10,
  },
  commentBoxFeildStyles: {
    width: '95%',
    height: 110,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 5,
    borderColor: '#707070',
    textAlignVertical: 'top',
  },
  remainingTextContainerStyles: {
    color: '#666',
    marginLeft: '2.5%',
    fontWeight: '600',
    marginTop: 5,
  },
  buttonStyles: {
    width: '95%',
    height: 50,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },
});

export {ReturnProduct2};
