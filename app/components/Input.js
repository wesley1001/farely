import React, {Component} from 'react-native'

const {StyleSheet, TextInput} = React

class Input extends Component {
  render () {
    let {description, onChange} = this.props

    return (
      <TextInput style={styles.input}
                 keyboardType='decimal-pad'
                 onChangeText={onChange}
                 placeholder={description} />
    )
  }
}

Input.propTypes = {
  description: React.PropTypes.string,
  onChange: React.PropTypes.func
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 20
  }
})

export default Input
