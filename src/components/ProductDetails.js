import {Image} from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';
import IndianGrocerySupplier from '../images/Indian-Groceries-supplier.png';
import ProductDetailsImage from '../images/productDetails.png';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Pressable} from 'react-native';

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="heart" style={styles.iconStyles} size={20} />
      <Image source={IndianGrocerySupplier} style={styles.imageStyles} />
      <Text style={styles.productNameStyle}>Groceries</Text>
      <Text style={styles.priceTextStyles}> ₹ 785</Text>
      <Text style={styles.productSummaryStyles}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type speci men book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </Text>
      <Text style={styles.relatedTextStyle}>Related Items</Text>

      <View style={styles.relatedImagesContainer}>
        <View style={styles.relatedImageTextContainer}>
          <Image
            source={ProductDetailsImage}
            style={styles.relatedImageStyles}
          />
          <Text>DummyText</Text>
        </View>
        <View style={styles.relatedImageTextContainer}>
          <Image
            source={ProductDetailsImage}
            style={styles.relatedImageStyles}
          />
          <Text>DummyText</Text>
        </View>
        <View style={styles.relatedImageTextContainer}>
          <Image
            source={ProductDetailsImage}
            style={styles.relatedImageStyles}
          />
          <Text>DummyText</Text>
        </View>
        <View style={styles.relatedImageTextContainer}>
          <Image
            source={ProductDetailsImage}
            style={styles.relatedImageStyles}
          />
          <Text>DummyText</Text>
        </View>
      </View>

      <Pressable style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>Add To Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageStyles: {
    width: 332,
    height: 238,
    marginTop: 22,
    marginLeft: 39,
  },
  iconStyles: {
    position: 'absolute',
    marginLeft: 350,
    marginTop: 45,
    color: '#ED7421',
  },
  productNameStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#ED7421',
    marginTop: 39,
    marginLeft: 23,
  },
  priceTextStyles: {
    marginLeft: 23,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5,
  },
  productSummaryStyles: {
    marginLeft: 23,
    marginTop: 12,
    width: '90%',
  },
  relatedTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#ED7421',
    marginTop: 35,
    marginLeft: 23,
  },
  relatedImageStyles: {
    width: 78,
    height: 77,
  },
  relatedImageTextContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  relatedImagesContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 125,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  buttonStyles: {
    position: 'absolute',
    width: '100%',
    height: 55,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  buttonTextStyles: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});

export {ProductDetails};
