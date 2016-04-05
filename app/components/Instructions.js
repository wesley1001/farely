import React, {Component} from 'react-native'

const {StyleSheet, View, Text} = React

class Instructions extends Component {
  render () {
    return (
      <View style={styles.instructions}>
        <Text style={styles.text}>
          Enter the amount of money left in your MetroCard and how much you want to spend!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  instructions: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
})

export default Instructions
