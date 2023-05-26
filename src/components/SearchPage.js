/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mirchi from '../images/mirchi.png';

const SearchBar = () => {
  const TrendingProducts = (imageSource, productName) => {
    return (
      <View style={styles.TrendingproductsContainer}>
        <View style={styles.imageContainerStyles}>
          <Image
            source={imageSource}
            style={styles.TrendingproductImageStyles}
          />
        </View>
        <Text style={styles.TrendingproductTextStyles}>{productName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <View style={styles.searchBarContainer}>
          <Ionicons
            name="arrow-back"
            size={26}
            style={styles.headerBackArrowStyles}
          />
          <TextInput placeholder="Seacrh" style={styles.textInputFeildStyles} />
        </View>
        <Text style={styles.recentTextStyles}>Recent Searches</Text>
        <View style={styles.recentSearchesContainerStyles}>
          <Text style={styles.searchesTextStyles}>Onions</Text>
          <Text style={styles.searchesTextStyles}>Vegetables</Text>
          <Text style={styles.searchesTextStyles}>Sunflower Oil</Text>
          <Text style={styles.searchesTextStyles}>Fruits</Text>
        </View>

        <Text style={styles.recentTextStyles}>Trending Searches</Text>

        {TrendingProducts(mirchi, 'Green Chilli')}
        {TrendingProducts(mirchi, 'Green Chilli')}
        {TrendingProducts(mirchi, 'Green Chilli')}
        {TrendingProducts(mirchi, 'Green Chilli')}
        {TrendingProducts(mirchi, 'Green Chilli')}
        {TrendingProducts(mirchi, 'Green Chilli')}

        {/*
          {TrendingProducts(mirchi, 'Green Chilli')}
          {TrendingProducts(mirchi, 'Green Chilli')}
          {TrendingProducts(mirchi, 'Green Chilli')}
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginVertical: 30,
  },
  textInputFeildStyles: {
    width: '80%',
    height: '90%',
  },
  headerBackArrowStyles: {
    paddingHorizontal: 15,
    color: '#000',
  },
  recentTextStyles: {
    fontSize: 14,
    color: '#ED7421',
    fontWeight: '700',
    marginTop: 5,
  },
  recentSearchesContainerStyles: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  searchesTextStyles: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#ED74214D',
    backgroundColor: '#FCECE24D',
    borderRadius: 5,
    color: '#3F3F3F99',
    marginHorizontal: 5,
  },
  imageContainerStyles: {
    width: 45,
    height: 45,
    backgroundColor: '#FDEDE3',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TrendingproductsContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  TrendingproductTextStyles: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#3F3F3F',
  },
  TrendingproductImageStyles: {
    width: '60%',
    height: '60%',
  },
});

export {SearchBar};
