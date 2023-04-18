import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';

const MyWishlist = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'My Wishlist'} />

      <View style={styles.card}>
        <View style={styles.imageContainerStyles} />
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
  headerStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTextStyles: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: 'black',
    marginVertical: 8,
    marginHorizontal: 6,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 16,
    minHeight: 120,
  },
  imageContainerStyles: {
    width: 90,
    height: 90,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 2},
    shadowRadius: 50,
    shadowOpacity: 0.2,
    elevation: 4,
  },
});

export {MyWishlist};
