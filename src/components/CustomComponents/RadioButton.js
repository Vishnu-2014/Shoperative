import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState('hello');

  const returnReasonData = [
    'Item defective or doesn work',
    'No Longer Needed',
    'Product and Shipping box both damaged',
    'Wrong item was sent',
    'Bought by Mistake',
    'Item Arrived too late',
    'Better Price Available',
    'Product ok, but shipping box damaged',
  ];

  const handleOptionChange = value => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      {returnReasonData.map(option => (
        <View key={option} style={styles.RadioButtonContainer}>
          <RadioButton
            value={option}
            status={selectedOption === option ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange(option)}
            color="#ED7421"
            uncheckedColor="#999"
          />
          <Text>{option}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  RadioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderBottomColor: '#999',
  },
});

export default RadioButtons;
