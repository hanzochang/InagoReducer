import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView } from 'react-native';
//import Share from 'react-native-share';

import WebView from '../components/WebView';
//import colors from '../config/colors';
import WebViewControlButton from './WebViewControlButton';

export default class WebViewWithControl extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
    onTrackScreen: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false,
      canGoForward: false,
      title: null,
      url: null,
    };
  }

  handleGoBack = () => {
    this.webView.goBack();
  };

  handleGoForward = () => {
    this.webView.goForward();
  };

  handleReload = () => {
    this.webView.reload();
  };

  handleShare = () => {
    // const { url, title } = this.state;
    // const shareOptions = {
    //   url,
    //   message: title,
    // };
    // Share.open(shareOptions);
  };

  handleOnNavigationStateChange = ({
    canGoBack, canGoForward, title, url,
  }) => {
    this.setState({
      canGoBack,
      canGoForward,
      title,
      url,
    });
  };

  render = () => {
    const {
      source,
      onTrackScreen,
    } = this.props;
    const { canGoBack, canGoForward } = this.state;

    return (
      <SafeAreaView style={styles.webViewWithControl}>
        <WebView
          ref={(c) => { this.webView = c; }}
          source={source}
          onNavigationStateChange={this.handleOnNavigationStateChange}
          onTrackScreen={onTrackScreen}
        />
        <SafeAreaView style={styles.controls}>
          <WebViewControlButton icon="arrow-back" onPress={this.handleGoBack} disabled={!canGoBack} />
          <WebViewControlButton icon="arrow-forward" onPress={this.handleGoForward} disabled={!canGoForward} />
          <WebViewControlButton icon="share-outline" onPress={this.handleShare} />
          <WebViewControlButton.Dummy />
          <WebViewControlButton icon="refresh" onPress={this.handleReload} />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  webViewWithControl: {
    flex: 1,
    //backgroundColor: colors.footerBackground,
  },
  controls: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.footerBackground,
    // borderColor: colors.footerBorder,
    // borderTopWidth: colors.borderWidth,
  },
});
