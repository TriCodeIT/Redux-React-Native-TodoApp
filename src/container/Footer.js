import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FooterLink from '../components/FooterLink';

const Footer = () => {
  return (
    <View style={styles.container}>
      <FooterLink>
        <Text style={{color: 'white'}}>All</Text>
      </FooterLink>
      <FooterLink>
        <Text style={{color: 'white'}}>Active</Text>
      </FooterLink>
      <FooterLink>
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
