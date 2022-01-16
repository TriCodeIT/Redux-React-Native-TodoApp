import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {addTodo} from '../redux/actions/todos';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txtTodo: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <TextInput
            placeholder="Add Todo"
            onChangeText={txtTodo => this.setState({txtTodo})}
            value={this.state.txtTodo}
            style={styles.text}
          />
        </View>
        <TouchableOpacity 
        onPress={() => {
          let txtTodo = this.state.txtTodo
          this.setState({txtTodo: ''}, () => this.props.tambahTodo(txtTodo))
        }}
        style={styles.btnAdd}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  tambahTodo: txt => dispatch(addTodo(txt)),
});

export default connect(null, mapDispatchToProps)(AddTodo);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  left: {
    height: 50,
    width: '85%',
  },
  btnAdd: {
    backgroundColor: 'blue',
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
});
