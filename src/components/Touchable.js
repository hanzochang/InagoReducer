import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = ({ activeOpacity, ...props }) => (
  <TouchableOpacity
    activeOpacity={activeOpacity || 0.6}
    {...props}
  >
    {props.children}
  </TouchableOpacity>
);

Touchable.propTypes = {
  ...TouchableOpacity.propTypes,
};

export default Touchable;
