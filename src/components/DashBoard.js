/* eslint-disable react-native/no-inline-styles */

import {Image} from '@rneui/base';
import React from 'react';
import {ScrollView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cleaning from '../images/DashBoardImages/cleaning_household.png';

const DashBoard = () => {
  const CategoriesFeilds = ({imageSource, imageHeading}) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={imageSource} style={{width: 76, height: 55}} />
        <Text style={{textAlign: 'center', color: '#000'}}>{imageHeading}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationViewStyles}>
        <Ionicons
          name="ios-location-sharp"
          size={25}
          style={{paddingHorizontal: 10, color: '#FFFFFF'}}
        />
        <Text style={styles.locationTextStyle}>
          Deliver to Shaik Akeeb - Hyderabad 500081
        </Text>
      </View>

      <ScrollView>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal={true}
          contentContainerStyle={{alignItems: 'center'}}
          style={{
            height: 123,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
          }}>
          {CategoriesFeilds(Cleaning, 'Hair, Oil &{\n}Shampoo')}
          {CategoriesFeilds(Cleaning, 'Hair, Oil &{\n}Shampoo')}
          {CategoriesFeilds(Cleaning, 'Hair, Oil &{\n}Shampoo')}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  locationViewStyles: {
    width: '100%',
    height: 46,
    backgroundColor: '#E26712',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationTextStyle: {
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
});

export {DashBoard};
