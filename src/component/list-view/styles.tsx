import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 25,
  },
  symbol: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.regalBlue,
    textTransform: 'uppercase',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tlp: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.regalBlue,
  },
  amount: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.regalBlue,
  },
  qtyRow: {
    marginTop: 8,
  },
});
