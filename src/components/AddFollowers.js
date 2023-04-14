import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const AddFollowers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>
        Add Followers{' '}
        <Text style={{fontSize: 16}}>(Members of Food Co-op)</Text>
      </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={'#666666'}
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
            },
          ]}>
          {/* city */}
          <MaterialIcons name="add" size={30} color={'#ED7421'} />
          <Entypo name="cross" size={30} color={'#ED7421'} />

          {/* state */}
        </View>
        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={'#666666'}
          multiline={true}
        />

        <Pressable style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>ADD</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
  },
  card: {
    width: '90%',
  },
  headingStyles: {
    fontSize: 20,
    color: '#ED7421',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'flex-start',
    marginLeft: '2.5%',
    marginTop: 30,
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 50,
    marginTop: 10,
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
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export {AddFollowers};
