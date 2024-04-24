import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListView, Navbar, SheetView} from '../../component';
import {IStockProps} from './types';
import {fetchHoldings} from '../service/service';
import {IHolding} from '../service';
import {texts} from '../../constants';

function UpstockHolding(props: IStockProps): React.JSX.Element {
  const {} = props;
  const [holdings, setHoldings] = useState<IHolding>({
    list: [],
    currentTotal: 0,
    inventTotal: 0,
    todaysPnl: 0,
    totalPnl: 0,
    error: '',
  });
  useEffect(() => {
    call();
    fetchHoldings();
  }, []);

  const call = async () => {
    const response = await fetchHoldings();
    setHoldings(response);
  };

  const renderItem = ({item}: any) => {
    return (
      <ListView
        symbol={item?.symbol}
        pnl={item?.pnl}
        quantity={item?.quantity}
        ltp={item?.ltp}
      />
    );
  };

  const renderSeprator = () => {
    return <View style={styles.seprator} />;
  };

  const renderEmpty = () => {
    const text = holdings.error || texts.holding.empty;
    return <Text style={styles.empty}>{text}</Text>;
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Navbar title={texts.holding.title} />
      <View style={styles.view}>
        <FlatList
          data={holdings.list}
          ItemSeparatorComponent={renderSeprator}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={renderEmpty}
        />
      </View>
      <SheetView
        currentValue={holdings.currentTotal}
        investment={holdings.inventTotal}
        todaysPnl={holdings.todaysPnl}
        totalPnl={holdings.totalPnl}
      />
    </SafeAreaView>
  );
}

export default UpstockHolding;
