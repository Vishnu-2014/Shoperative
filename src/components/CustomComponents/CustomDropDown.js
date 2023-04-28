import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DropdownExample = props => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  // const {input = '-- Select Your Profession --'} = props;

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
        <Text style={styles.TextStyles}>
          {selectedValue || '-- Select Your Profession --'}
        </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          color={'#333'}
          size={20}
          style={{
            transform: isDropdownOpen
              ? [{rotate: '180deg'}]
              : [{rotate: '0deg'}],
          }}
        />
      </TouchableOpacity>
      {isDropdownOpen && (
        <FlatList
          data={options}
          nestedScrollEnabled={true}
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
    marginTop: 10,
  },
  ButtonStyles: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 15,
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
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    opacity: 0.35,
  },
});

export default DropdownExample;
