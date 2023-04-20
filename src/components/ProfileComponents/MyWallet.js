import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderComponent} from '../CustomComponents/HeaderComponent';
import {Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyWallet = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'My Wallet'} />

      <View
        style={{
          width: '95%',
          marginTop: 10,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          height: '80%',
        }}>
        <Text style={styles.headingTextStyles}>YOUR CASH BALANCE</Text>
        <Text style={styles.balanceTextStyles}>₹ 400</Text>

        <View>
          <Text style={styles.referalStyles1}>Share Referral Code</Text>
          <Text style={styles.referalStyles2}>
            Earn ₹100 For Each Friend You Refer
          </Text>
        </View>

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
        <View style={styles.rulesContentView}>
          <FontAwesome
            name="share-alt"
            size={15}
            color={'#ED7421'}
            style={styles.rulesIconStyles}
          />
          <Text style={styles.rulesTextStyles}>
            Share the referral link with your friends
          </Text>
        </View>
        <View style={styles.rulesContentView}>
          <MaterialCommunityIcons
            name="cursor-pointer"
            size={15}
            color={'#ED7421'}
            style={styles.rulesIconStyles}
          />
          <Text style={styles.rulesTextStyles}>
            Your friend clicks on the link or signs up{'\n'} through the code
          </Text>
        </View>
        <View style={styles.rulesContentView}>
          <MaterialCommunityIcons
            name="cursor-pointer"
            size={15}
            color={'#ED7421'}
            style={styles.rulesIconStyles}
          />
          <Text style={styles.rulesTextStyles}>
            Your friend gets $100 Cash on sign up.{'\n'}You get 100 when they
            complete an order{'\n'}of 3100 or more within 7 days.
          </Text>
        </View>
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
    fontSize: 17,
    // fontFamily: 'Poppins-Bold',
    color: '#3f3f3f',
    fontWeight: '700',
  },
  referalStyles2: {
    fontSize: 14,
    // fontFamily: 'Poppins-Medium',
    color: '#3f3f3f',
    fontWeight: '500',
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
    marginTop: 10,
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
  rulesContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  rulesTextStyles: {
    fontSize: 14,
    color: '#3f3f3f',
    fontWeight: '500',
  },
  rulesIconStyles: {
    paddingHorizontal: 15,
  },
});

export {MyWallet};
