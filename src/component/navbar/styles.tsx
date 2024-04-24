import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.regalBlue,
    height: 110,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
});
