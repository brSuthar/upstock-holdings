import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {IListViewProps} from './types';
import {styles} from './styles';

const ListView: FC<IListViewProps> = (props: IListViewProps) => {
  const {symbol, ltp, quantity, pnl} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.tlp}>
          LTP: <Text style={styles.amount}>{ltp}</Text>
        </Text>
      </View>
      <View style={[styles.viewRow, styles.qtyRow]}>
        <Text style={styles.tlp}>{quantity}</Text>
        <Text style={styles.tlp}>
          P\L: <Text style={styles.amount}>{pnl}</Text>
        </Text>
      </View>
    </View>
  );
};

export default memo(ListView);
