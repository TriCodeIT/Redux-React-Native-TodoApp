import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const FooterLink = props => {
  return (
    <TouchableOpacity style={styles.btn}>{props.children}</TouchableOpacity>
  );
};

export default FooterLink;

const styles = StyleSheet.create({
  btn: {
    width: '33.3%',
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
