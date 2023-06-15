/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
import cosmetics from '../../images/cosmetics.png';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const Product = (imageSource, productName) => {
    return (
      <View style={styles.productContainerStyles}>
        <Pressable
          style={styles.imageContainerStyles}
          onPress={() => navigation.navigate('Cosmetics')}>
          <Image style={styles.imageStyles} source={imageSource} />
        </Pressable>
        <Text style={styles.productNameStyles}>{productName}</Text>
      </View>
    );
  };
  return (
    <>
      <HeaderComponent title={'All Categories'} />
      <View style={styles.container}>
        <View style={styles.rowDirectionView}>
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
        </View>
        <View style={styles.rowDirectionView}>
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
        </View>
        <View style={styles.rowDirectionView}>
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
        </View>
        <View style={styles.rowDirectionView}>
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
        </View>
        <View style={styles.rowDirectionView}>
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
          {Product(cosmetics, 'Cosmetics')}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
  },
  imageContainerStyles: {
    width: 80,
    height: 80,
    backgroundColor: '#FDEDE3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: '75%',
    height: '60%',
  },
  productContainerStyles: {
    alignItems: 'center',
  },
  rowDirectionView: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  productNameStyles: {
    fontSize: 12,
    color: '#4C4C4C',
    fontWeight: '700',
  },
});

export {Categories};
