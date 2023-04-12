import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const AddFollowers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headingStyles}>
          Add Followers{' '}
          <Text style={{fontSize: 16}}>(Members of Food Co-op)</Text>{' '}
        </Text>

        <TextInput
          style={styles.feildStles}
          placeholder={'Name'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={'#000000CC'}
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
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Email'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'Mobile'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />
        <TextInput
          style={styles.feildStles}
          placeholder={'City'}
          placeholderTextColor={'#000000CC'}
          multiline={true}
        />

        <Pressable style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  card: {
    marginLeft: 22,
    marginRight: 22,
    marginTop: 30,
  },
  headingStyles: {
    fontSize: 20,
    color: '#ED7421',
    fontFamily: 'Poppins-Medium',
  },
  feildStles: {
    backgroundColor: '#ffffff',
    height: 55,
    marginTop: 16.96,
  },
  buttonStyles: {
    height: 55,
    backgroundColor: '#ED7421',
    marginTop: 70,
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
