import { Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  brandPrimary: '#D70C18',
  error: '#bb111f',
  disabled: '#b5b5b5',
  disabledBackground: '#eee',

  background: '#fff',
  systemBackground: '#e9e9ef',

  primaryText: '#000',
  secondaryText: '#a7a7a7',
  grayText: '#7e7e7e',

  headerHeight: 44,
  headerBackground: '#fff',
  headerBorder: '#a7a6ab',
  footerBackground: '#f8f8f8',
  footerBorder: '#a7a6ab',

  border: '#ceced2',
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),

  listItemPaddingVertical: 8,
  listItemPaddingHorizontal: 16,
  listItemUnderlayColor: '#ddd',

  controlHeight: 45,
  controlVerticalPadding: 10,
  controlRadius: 4,
  controlLineHeight: 45,
  controlIcon: '#b5b5b5',

  smartPoint: {
    spot: '#02bbe7',
    heart: '#e72a86',
    time: '#e5642b',
    price: '#eb2e2a',
  },

  contentPadding: 16,

  deviceWidth,
  deviceHeight,
};
