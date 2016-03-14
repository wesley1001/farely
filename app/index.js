import React, {Component} from 'react-native'
import Header from './components/Header'

const {StyleSheet, View, Text} = React

class App extends Component {
  render () {
    return (
    <View style={styles.container}>
      <Header />
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
    marginTop: 25
  },
  text: {
    fontSize: 30,
    alignSelf: 'center'
  }
})

export default App
