import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import WebView from './components/WebView'
import { WebView } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://okkake.me'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
