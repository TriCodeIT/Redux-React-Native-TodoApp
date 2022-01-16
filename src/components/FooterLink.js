import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {setVisibilityFilter} from '../redux/actions/visibilityFilter';

const FooterLink = ({btnActive, children, toggleBtn}) => {
  return (
    <TouchableOpacity
      disabled={btnActive}
      onPress={toggleBtn}
      style={[styles.btn, btnActive && {backgroundColor: 'darkblue'}]}>
      {children}
      {/* <Text>{btnActive.toString()}</Text> */}
    </TouchableOpacity>
  );
};

const mapStateToProps = (state, ownProps) => ({
  btnActive: state.visibilityFilter === ownProps.myfilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleBtn: () => dispatch(setVisibilityFilter(ownProps.myfilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterLink);

const styles = StyleSheet.create({
  btn: {
    width: '33.3%',
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
