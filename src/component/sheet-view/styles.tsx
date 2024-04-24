import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 16,
  },
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 10,
  },
  viewRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.regalBlue,
  },
  amount: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.regalBlue,
  },
  pnl: {
    marginBottom: 30,
  },
});
