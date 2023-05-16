import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import SuccessImage from '../images/successImage.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentSuccess = () => {
  return (
    <View style={styles.container}>
      <Image source={SuccessImage} style={styles.imageStyles} />
      <Text style={styles.PaymentStatusStyles}>PAYMENT SUCCESSFULL!</Text>
      <Text style={styles.textStyles}>
        Your Payment Rs.500 Successfully Done
      </Text>
      <View
        style={{
          width: '80%',
          height: 0.5,
          backgroundColor: '#70707080',
          marginVertical: 25,
        }}
      />
      <Text style={styles.textStyles}>Transaction ID : T2203673853957039</Text>

      <Pressable style={styles.buttonStyles}>
        <Ionicons name="arrow-back" size={24} style={styles.iconStyles} />
        <Text style={styles.buttonTextStyles}>Back To Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: 150,
    height: 150,
  },
  PaymentStatusStyles: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: '#35B729',
    marginTop: 20,
  },
  textStyles: {
    fontSize: 16,
    // fontFamily: 'Poppins-Medium',
    color: '#24242480',
    fontWeight: '500',
  },
  buttonStyles: {
    position: 'absolute',
    width: '90%',
    height: 50,
    backgroundColor: '#ED7421',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    flexDirection: 'row',
  },
  buttonTextStyles: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },
  iconStyles: {
    color: '#FFF',
    marginRight: 10,
  },
});

export {PaymentSuccess};
