import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import WebView from './components/WebView'
import { Constants, WebBrowser } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inside: true,
      uri: 'https://okkake.me',
      old_uri: 'https://okkake.me'
    };
  }

  shoutParent(url){
    console.log('URL::' + url);
    wa = /^https:\/\/okkake.me\//.test(url);


    if (!wa) {
      const { uri } = this.state;
      this.setState({
        inside: false,
      });
      this._handlePressButtonAsync(url, uri);
    } else {
      this.setState({
        inside: true,
        uri: url,
        old_uri: url,
      });
    }
  }

  _handlePressButtonAsync = async (url, goBackUrl) => {
    let result = await WebBrowser.openBrowserAsync(url);
    this.setState({ uri: goBackUrl, inside: true  });
  };

  render() {
    const { inside, uri, old_uri } = this.state;
    console.log('uri' + uri);

    if(inside){
      console.log('INSIDE!!!!!!!!!!!!');
      return (
        <WebView
          source={{uri: uri}}
          style={{marginTop: 20}}
          parentMethod={this.shoutParent.bind(this)}
        />
      );
    } else {
      console.log('OUTSIDE!!!!!!!!!!!!');
      return (
        <View />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
