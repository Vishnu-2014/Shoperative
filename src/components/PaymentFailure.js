import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import FailureImage from '../images/FailureImage.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentFailure = () => {
  return (
    <View style={styles.container}>
      <Image source={FailureImage} style={styles.imageStyles} />
      <Text style={styles.PaymentStatusStyles}>YOUR PAYMENT DENIED!</Text>
      <Text style={styles.textStyles}>
        You can retry the payment below{'\n'}to continue this
      </Text>

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
    color: '#E4364B',
    marginTop: 20,
  },
  textStyles: {
    fontSize: 16,
    // fontFamily: 'Poppins-Medium',
    color: '#24242480',
    fontWeight: '500',
    textAlign: 'center',
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

export {PaymentFailure};
