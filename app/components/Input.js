import React, {Component} from 'react-native'

const {StyleSheet, View, Text, TextInput} = React

class Input extends Component {
  render () {
    let {description, onChange} = this.props

    return (
      <View style={styles.row}>
        <View style={styles.dollarBox}>
          <Text style={styles.text}>$</Text>
        </View>
        <TextInput style={styles.input}
                   keyboardType='numeric'
                   onChangeText={onChange}
                   selectionColor='#3F5765'
                   placeholder={description} />
      </View>
    )
  }
}

Input.propTypes = {
  description: React.PropTypes.string,
  onChange: React.PropTypes.func
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  dollarBox: {
    backgroundColor: '#3F5765',
    height: 40,
    width: 30,
    marginLeft: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#EFEFEF',
    textAlign: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 40,
    // width: 300,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 15,
    // marginLeft: 10,
    paddingLeft: 10,
    fontSize: 20
  }
})

export default Input
