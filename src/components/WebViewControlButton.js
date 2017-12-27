import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import IconButton from './IconButton';

const WebViewControlButton = ({ icon, onPress, disabled }) => (
  <IconButton
    icon={icon}
    onPress={onPress}
    disabled={disabled}
    style={styles.base}
    iconStyle={styles.icon}
  />
);

WebViewControlButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

WebViewControlButton.Dummy = () => (
  <View style={styles.base} />
);

const styles = StyleSheet.create({
  base: {
    width: 44,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
  },
});

export default WebViewControlButton;
