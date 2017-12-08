import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, WebView as RNWebView } from 'react-native';

export default class WebView extends React.Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { source } = this.props;
    return (
      <View style={styles.container}>
        <RNWebView
          source={source}
        />
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
