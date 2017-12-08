import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
import App from './components/App'

let store = createStore(todoApp)

//import WebViewScreen from './screens/WebViewScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
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

// export default () => (
//   <Root>
//     <Router />
//   </Root>
// );
