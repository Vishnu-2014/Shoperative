import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {HeaderComponent} from '../../CustomComponents/HeaderComponent';
import cosmeticsImage from '../../../images/cosmetics.png';
import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';

const Cosmetics = () => {
  const navigation = useNavigation();
  return (
    <>
      <HeaderComponent title="Cosmetics" />
      <View style={styles.container}>
        <View style={styles.categoriesProducts}>
          <Pressable
            style={styles.productContainerStyles}
            onPress={() => navigation.navigate('ProductDetails')}>
            <Image source={cosmeticsImage} style={styles.imageStyles} />
            <Text style={styles.productNameStyles}>Beauty Product 1</Text>
            <Text style={styles.productPriceStyles}>₹ 399</Text>
          </Pressable>
          <Pressable
            style={styles.productContainerStyles}
            onPress={() => navigation.navigate('ProductDetails')}>
            <Image source={cosmeticsImage} style={styles.imageStyles} />
            <Text style={styles.productNameStyles}>Beauty Product 2</Text>
            <Text style={styles.productPriceStyles}>₹ 289</Text>
          </Pressable>
          <Pressable
            style={styles.productContainerStyles}
            onPress={() => navigation.navigate('ProductDetails')}>
            <Image source={cosmeticsImage} style={styles.imageStyles} />
            <Text style={styles.productNameStyles}>Beauty Product 3</Text>
            <Text style={styles.productPriceStyles}>₹ 149</Text>
          </Pressable>
          <Pressable
            style={styles.productContainerStyles}
            onPress={() => navigation.navigate('ProductDetails')}>
            <Image source={cosmeticsImage} style={styles.imageStyles} />
            <Text style={styles.productNameStyles}>Beauty Product 4</Text>
            <Text style={styles.productPriceStyles}>₹ 899</Text>
          </Pressable>
          <Pressable
            style={styles.productContainerStyles}
            onPress={() => navigation.navigate('ProductDetails')}>
            <Image source={cosmeticsImage} style={styles.imageStyles} />
            <Text style={styles.productNameStyles}>Beauty Product 5</Text>
            <Text style={styles.productPriceStyles}>₹ 419</Text>
          </Pressable>
          <Pressable
            style={styles.productContainerStyles}
            onPress={() => navigation.navigate('ProductDetails')}>
            <Image source={cosmeticsImage} style={styles.imageStyles} />
            <Text style={styles.productNameStyles}>Beauty Product 6</Text>
            <Text style={styles.productPriceStyles}>₹ 539</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  categoriesProducts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageStyles: {
    width: '60%',
    height: 65,
  },
  productContainerStyles: {
    width: '48%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#999',
  },
  productNameStyles: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ED7421',
  },
  productPriceStyles: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export {Cosmetics};
