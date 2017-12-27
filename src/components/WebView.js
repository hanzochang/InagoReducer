import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, WebView as RNWebView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default class WebView extends React.Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadedOnce: false,
    };
  }

  goBack() {
    this.webview.goBack();
  }

  goForward() {
    this.webview.goForward();
  }

  reload() {
    this.webview.reload();
  }

  handleOnLoadStart = () => {
    if (this.props.onTrackScreen) {
      this.props.onTrackScreen({ url: this.url });
    }
    this.setState({
      loading: true,
    });
  };

  handleOnLoadEnd = () => {
    this.setState({
      loading: false,
      loadedOnce: true,
    });
  };

  handleOnShouldStartLoadWithRequest = ({ url }) => {
    this.url = url;
    return true;
  }

  onNavigationStateChange(webViewState){
    // 現在地のURLをかくにんする
    this.props.parentMethod(webViewState.url);
  }

  render() {
    const { source } = this.props;
    const { loading, loadedOnce } = this.state;
    return (
      <View style={styles.container}>
        <RNWebView
          ref={(c) => { this.webview = c; }}
          onLoadStart={this.handleOnLoadStart}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onLoadEnd={this.handleOnLoadEnd}
          onShouldStartLoadWithRequest={this.handleOnShouldStartLoadWithRequest}
          source={source}
          renderLoading={() => <Loading />}
        />
        {loading && loadedOnce && (
          <ProgressBar
            indeterminate
            height={2}
            width={null}
            borderRadius={0}
            borderWidth={0}
            style={styles.progress}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
