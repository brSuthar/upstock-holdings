import React, {FC, memo, useCallback, useState} from 'react';
import {styles} from './styles';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Text, View, ViewStyle} from 'react-native';
import {ISheetViewProps} from './types';
import {texts} from '../../constants';

const SheetView: FC<ISheetViewProps> = (props: ISheetViewProps) => {
  const {totalPnl, currentValue, investment, todaysPnl} = props;
  const [show, setShow] = useState(false);

  const handleSheetChanges = useCallback((index: number) => {
    setShow(index === 1);
  }, []);

  const renderTotals = (title: any, value: any, style?: ViewStyle) => {
    return (
      <View style={[styles.viewRow, style]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{value}</Text>
      </View>
    );
  };

  return (
    <BottomSheet
      style={styles.container}
      snapPoints={[120, 260]}
      onChange={handleSheetChanges}>
      <BottomSheetView style={styles.view}>
        {show && (
          <>
            {renderTotals(texts.sheet.current, currentValue)}
            {renderTotals(texts.sheet.invest, investment)}
            {renderTotals(texts.sheet.todays, todaysPnl, styles.pnl)}
          </>
        )}
        <View style={styles.viewRow}>
          <Text style={styles.title}>{texts.sheet.pnl}</Text>
          <Text style={styles.amount}>{totalPnl}</Text>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default memo(SheetView);
