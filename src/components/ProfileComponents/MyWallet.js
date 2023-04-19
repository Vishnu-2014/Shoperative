import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
import {Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MyWallet = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'My Wallet'} />

      <View
        style={{
          width: '95%',
          marginTop: 10,
          backgroundColor: 'white',
        }}>
        <Text style={styles.headingTextStyles}>YOUR CASH BALANCE</Text>
        <Text style={styles.balanceTextStyles}>₹ 400</Text>
        {/* <Text style={styles.contentTextStyles}>
          Share your code and save 20% on your bill value upto 100 on your next
          order
        </Text> */}
        <Text style={styles.referalStyles1}>Share Referral Code</Text>
        <Text style={styles.referalStyles2}>
          Earn ₹100 For Each Friend You Refer
        </Text>

        <Text style={styles.coupanCodeStyles}>DGSOHJNSJCJS</Text>

        <View style={styles.buttonsContainerStyles}>
          <Pressable style={styles.button1Styles}>
            <FontAwesome name="whatsapp" size={20} color={'#FFF'} />
            <Text style={[styles.buttontextStyles, {color: '#FFF'}]}>
              WhatsApp
            </Text>
          </Pressable>
          <Pressable style={styles.button2Styles}>
            <FontAwesome name="share-alt" size={20} color={'#ED7421'} />
            <Text style={[styles.buttontextStyles, {color: '#ED7421'}]}>
              More Options
            </Text>
          </Pressable>
        </View>

        <Text style={styles.rulesHeadingStyle}>How it works</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  headingTextStyles: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#3f3f3f',
  },
  balanceTextStyles: {
    fontSize: 44,
    fontFamily: 'Poppins-SemiBold',
    color: '#ED7421',
  },
  contentTextStyles: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    color: '#3f3f3f',
  },
  referalStyles1: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#3f3f3f',
  },
  referalStyles2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#3f3f3f',
  },
  coupanCodeStyles: {
    width: '100%',
    height: 50,
    textAlignVertical: 'center',
    borderWidth: 1.5,
    borderColor: '#ED7421',
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: '500',
    color: '#3f3f3f',
  },
  buttonsContainerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 80,
    shadowColor: '#3f3f3f',
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  button1Styles: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ED7421',
    borderRadius: 30,
    width: '40%',
    height: '55%',
    justifyContent: 'space-evenly',
  },
  button2Styles: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ED7421',
    borderRadius: 30,
    justifyContent: 'space-evenly',
    width: '40%',
    height: '55%',
  },
  buttontextStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  rulesHeadingStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3f3f3f',
  },
});

export {MyWallet};
