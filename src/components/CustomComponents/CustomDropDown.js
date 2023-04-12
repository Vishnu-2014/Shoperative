import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DropdownExample = input => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    {id: 0, label: 'None', value: 'None'},
    {id: 1, label: 'Option 1', value: 'option1'},
    {id: 2, label: 'Option 2', value: 'option2'},
    {id: 3, label: 'Option 3', value: 'option3'},
    {id: 4, label: 'Option 4', value: 'option4'},
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = optionValue => {
    setSelectedValue(optionValue);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonStyles} onPress={toggleDropdown}>
        <Text style={styles.TextStyles}>{selectedValue || 'react'}</Text>
        <MaterialIcons name="arrow-drop-down" color={'#000'} size={20} />
      </TouchableOpacity>
      {isDropdownOpen && (
        <FlatList
          data={options}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => selectOption(item.value)}>
              <Text style={styles.contentTextStyles}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18,
    marginBottom: 29,
  },
  ButtonStyles: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 55,
    alignItems: 'center',
  },
  contentTextStyles: {
    height: 50,
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  TextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export default DropdownExample;
