import React, {Component} from 'react-native'
import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import fare from './fare'

const {StyleSheet, View, Text} = React

class App extends Component {
  constructor () {
    super()

    this.state = {
      maxToSpend: 0,
      remainingBalance: 0,
      data: []
    }
  }

  render () {
    return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>
          Hello!
        </Text>
        <Input
          value={this.state.maxToSpend}
          description='Remaining balance'
          onChange={(remainingBalance) => this.setState({remainingBalance})} />
        <Input
          value={this.state.remainingBalance}
          description='Max $ to spend'
          onChange={(maxToSpend) => this.setState({maxToSpend})} />
        <Button onButtonPress={this._onButtonPress.bind(this)} />
      </View>
    </View>
    )
  }

  _onButtonPress () {
    let {remainingBalance, maxToSpend} = this.state

    remainingBalance = Number(remainingBalance)
    maxToSpend = Number(maxToSpend)

    console.log(fare(remainingBalance, maxToSpend))
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
