import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {placeHolderTextColor} from '../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';

const AddFollowers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>
        Add Followers{' '}
        <Text style={{fontSize: 16}}>(Members of Food Co-op)</Text>
      </Text>
      <ScrollView style={styles.card}>
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
        />

        <View
          style={[
            styles.feildStles,
            {
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 0,
            },
          ]}>
          {/* city */}
          <MaterialIcons name="add" size={25} color={'#ED7421'} />
          <Entypo name="cross" size={25} color={'#ED7421'} />

          {/* state */}
        </View>
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={placeHolderTextColor}
          multiline={true}
        />

        <Pressable style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>ADD</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
  },
  headingStyles: {
    fontSize: 18,
    color: '#ED7421',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: '2.5%',
    marginTop: 30,
    marginBottom: 10,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight: '500',
    fontSize: 14,
  },
  buttonStyles: {
    height: 50,
    backgroundColor: '#ED7421',
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonTextStyles: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export {AddFollowers};
