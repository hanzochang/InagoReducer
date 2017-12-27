import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import IconDefault from 'react-native-vector-icons/Ionicons';

const Icon = ({ name, color, style }) => {
  return (
    <IconDefault
      name={`ios-${name}`}
      color={color}
      style={[styles.default, style]}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  default: {
    paddingTop: 2,
  },
});

export default Icon;
