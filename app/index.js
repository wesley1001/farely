import React, {Component} from 'react-native'
import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'

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
        <Input description='Remaining balance' />
        <Input description='Max $ to spend' />
        <Button />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingTop: 30
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    fontSize: 28
  }
})

export default App
