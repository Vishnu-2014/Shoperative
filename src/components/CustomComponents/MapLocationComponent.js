import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {darkBgColor} from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const MapLocationComponent = props => {
  const {location = 'Deliver to Shaik Akeeb - Hyderabad 500081'} = props;
  return (
    <View style={ss.container}>
      <Entypo name="location-pin" size={16} color={'white'} />
      <Text style={ss.textStyle}>{location}</Text>
    </View>
  );
};
const ss = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: darkBgColor,
    height: 46,
  },
  textStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: 'white',
  },
});
export {MapLocationComponent};
