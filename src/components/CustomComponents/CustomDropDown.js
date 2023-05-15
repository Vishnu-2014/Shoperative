import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DropdownExample = title => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  // const {input = '-- Select Your Profession --'} = props;

  const options = [
    {id: 0, label: 'None', value: 'None'},
    {id: 1, label: 'Option 1', value: 'option1'},
    {id: 2, label: 'Option 2', value: 'option2'},
    {id: 3, label: 'Option 3', value: 'option3'},
    {id: 4, label: 'Option 4', value: 'option4'},
    {id: 5, label: 'Option 5', value: 'option5'},
    {id: 6, label: 'Option 6', value: 'option6'},
    {id: 7, label: 'Option 7', value: 'option7'},
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
          style={{
            position: 'absolute',
            width: '100%',
            height: 200,
            marginTop: 50,
            alignSelf: 'center',
            backgroundColor: '#FFF',
          }}
          nestedScrollEnabled={true}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => selectOption(item.value)}
              style={{
                borderTopColor: '#333',
                borderTopWidth: 1,
              }}>
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
    marginTop: 12,
  },
  ButtonStyles: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  contentTextStyles: {
    height: 50,
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
