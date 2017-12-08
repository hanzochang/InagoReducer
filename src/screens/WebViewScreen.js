import React from 'react';
import { WebView } from 'react-native';

export default (props) => {
  const { uri } = props; // eslint-disable-line
  return <WebView source={{ uri }} />;
};
