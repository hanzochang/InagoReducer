import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import Touchable from './Touchable';
import Icon from './Icon';

import colors from '../config/colors';

const IconButton = ({
  icon, color, onPress, disabled, style, iconStyle,
}) => (
  <Touchable
    disabled={disabled}
    onPress={onPress}
    style={[styles.base, style]}
  >
    <Icon
      name={icon}
      color={disabled ? colors.disabled : color}
      style={[styles.icon, iconStyle]}
    />
  </Touchable>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  iconStyle: PropTypes.any,
};

IconButton.defaultProps = {
  color: colors.brandPrimary,
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  icon: {
    fontSize: 28,
  },
});

export default IconButton;
