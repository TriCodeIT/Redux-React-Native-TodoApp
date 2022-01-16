import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FooterLink from '../components/FooterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../redux/actions/types';

const Footer = () => {
  return (
    <View style={styles.container}>
      <FooterLink myfilter={SHOW_ALL}>
        <Text style={{color: 'white'}}>All</Text>
      </FooterLink>
      <FooterLink myfilter={SHOW_ACTIVE}>
        <Text style={{color: 'white'}}>Active</Text>
      </FooterLink>
      <FooterLink myfilter={SHOW_COMPLETED}>
        <Text style={{color: 'white'}}>Completed</Text>
      </FooterLink>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    width: '33.3%',
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
