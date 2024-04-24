import React, {FC, useMemo} from 'react';
import {Platform, StatusBar, Text} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {INavbarProps} from './types';
import {styles} from './styles';
import {colors} from '../../constants';

const NavBar: FC<INavbarProps> = (props: INavbarProps) => {
  const {title} = props;
  const {top} = useSafeAreaInsets();

  const height = useMemo(() => {
    return Platform.select({android: 60, ios: 60 + top});
  }, [top]);

  return (
    <SafeAreaView edges={['top']} style={[styles.container, {height: height}]}>
      <StatusBar backgroundColor={colors.regalBlue} />
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default NavBar;
