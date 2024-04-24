import {texts} from '../../constants';
import {IHolding} from './types';

const API_URL = 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8';

export async function fetchHoldings(): Promise<IHolding> {
  try {
    const response: any = await fetch(API_URL).then(async res => {
      if (res.status === 200) {
        return await res.json();
      } else {
        return {userHolding: []};
      }
    });

    const list = mapData(response.userHolding);
    const totals = mapTotals(list);
    const totalPnl = totals.current - totals.invested;
    return {
      list: list,
      currentTotal: totals.current,
      inventTotal: totals.invested,
      totalPnl: totalPnl.toFixed(2),
      todaysPnl: totals.todaysPnl.toFixed(2),
      error: '',
    } as IHolding;
  } catch (error) {
    return {
      list: [],
      currentTotal: 0.0,
      inventTotal: 0.0,
      totalPnl: 0.0,
      todaysPnl: 0.0,
      error: texts.holding.error,
    } as IHolding;
  }
}

const mapData = (list: any) => {
  return list.map((item: any) => {
    const current = item?.ltp * item?.quantity;
    const invested = item?.quantity * item?.avgPrice;
    return {
      ...item,
      current: current,
      invested: invested,
      pnl: (current - invested).toFixed(2),
      currentPnl: (item?.close - item?.ltp) * item?.quantity,
    };
  });
};

const mapTotals = (list: any) => {
  const initial = {current: 0.0, invested: 0.0, todaysPnl: 0.0};
  return list.reduce((a: any, b: any) => {
    return {
      current: a.current + b.current,
      invested: a.invested + b.invested,
      todaysPnl: a.todaysPnl + b.currentPnl,
    };
  }, initial);
};
