import React, {Component} from 'react-native'

const {StyleSheet, View, Text} = React

class App extends Component {
  render () {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello!
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  }
})

export default App
