import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {bgColor, shadowColor} from '../../theme/colors';

const ActivityStatus = ({message}) => {
  const statusIndicator = () => {
    const spinnerColor = bgColor;

    return <ActivityIndicator size="large" color={spinnerColor} />;
  };

  return (
    <View style={styles.fullScreenCoverView}>
      <View style={styles.activityContainer} testID={'activityStatusIndicator'}>
        {statusIndicator()}
        <Text testID={'activityStatusMessage'} style={styles.statusText}>
          {message}
        </Text>
      </View>
    </View>
  );
};

ActivityStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  fullScreenCoverView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: shadowColor,
    opacity: 0.9,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityContainer: {
    height: 150,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  statusText: {
    color: '#000000',
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});
export default ActivityStatus;
