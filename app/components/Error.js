import React, {Component} from 'react-native'

const {StyleSheet, View, Text} = React

class Error extends Component {
  render () {
    return (
      <View style={styles.error}>
        <Text style={styles.text}>
          There was an error calculating your fares. Make sure you entered the right values!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    justifyContent: 'center',
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Error
