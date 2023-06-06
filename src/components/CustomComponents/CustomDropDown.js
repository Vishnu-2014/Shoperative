import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DropdownExample = ({titleInput, data}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

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
        <Text style={styles.TextStyles}>{selectedValue || titleInput}</Text>
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
          data={data}
          style={{
            width: '100%',
            height: 200,
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
