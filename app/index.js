import React, {Component} from 'react-native'
import Header from './components/Header'

const {StyleSheet, View, Text} = React

class App extends Component {
  render () {
    return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>
          Hello!
        </Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    flex: 1
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 28
  }
})

export default App
