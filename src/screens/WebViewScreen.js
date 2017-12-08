import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import Container from '../components/Container';
//import Header from '../components/Header';
//import HeaderTitle from '../components/HeaderTitle';
//import HeaderBackButton from '../components/HeaderBackButton';
import WebViewWithControl from '../components/WebViewWithControl';
import { trackScreenView } from '../config/tracker';

export default class WebViewScreen extends Component {
  handleOnTrackScreen = ({ url }) => {
    const screenTrackingName = `WebView#${url}`;
    trackScreenView(screenTrackingName);
  }

  render = () => {
    const { navigation: { goBack } } = this.props;
    const { uri, title } = this.props.navigation.state.params;

    return (
      <Container>
        <Header
          centerComponent={<HeaderTitle title={title} />}
          leftComponent={<HeaderBackButton onPress={() => goBack()} />}
        />
        <WebViewWithControl
          source={{ uri }}
          onTrackScreen={this.handleOnTrackScreen}
        />
      </Container>
    );
  }
}
