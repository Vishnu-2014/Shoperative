import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderComponent = HeaderTitle => {
  const {title = 'Header'} = HeaderTitle;
  return (
    <View style={styles.headerStyles}>
      <Ionicons
        name="arrow-back"
        size={24}
        style={styles.headerBackArrowStyles}
      />
      <Text style={styles.headerTextStyles}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#ED7421',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTextStyles: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  headerBackArrowStyles: {
    paddingHorizontal: 15,
    color: '#FFF',
  },
});

export {HeaderComponent};
