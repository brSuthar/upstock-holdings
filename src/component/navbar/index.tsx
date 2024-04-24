import React, {FC} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {INavbarProps} from './types';
import {styles} from './styles';

const NavBar: FC<INavbarProps> = (props: INavbarProps) => {
  const {title} = props;
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default NavBar;
