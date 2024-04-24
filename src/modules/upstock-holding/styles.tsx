import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  view: {
    flex: 1,
  },
  seprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.regalBlue,
    marginLeft: 25,
  },
  contentContainer: {
    marginTop: 8,
  },
  empty: {
    fontSize: 16,
    color: colors.regalBlue,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 40,
  },
});
