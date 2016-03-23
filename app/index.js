import React, {Component} from 'react-native'
import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import Fares from './components/Fares'
import Instructions from './components/Instructions'
import fare from './fare'

const {StyleSheet, View, ListView} = React

class App extends Component {
  constructor () {
    super()

    let ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b})

    this.state = {
      maxToSpend: 0,
      remainingBalance: 0,
      dataSource: ds.cloneWithRows([]),
      fetched: false
    }
  }

  render () {
    let {fetched} = this.state
    let content

    if (fetched) {
      content = <Fares dataSource={this.state.dataSource} />
    } else {
      content = <Instructions />
    }

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.inputs}>
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

        {content}
      </View>
    )
  }

  _onButtonPress () {
    let {remainingBalance, maxToSpend} = this.state

    remainingBalance = Number(remainingBalance)
    maxToSpend = Number(maxToSpend)

    let fares = fare(remainingBalance, maxToSpend)

    console.log('Fares:', fares)

    this.setState({
      fetched: true,
      dataSource: this.state.dataSource.cloneWithRows(fares)
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingTop: 30
  },
  inputs: {
    marginTop: 40,
    alignItems: 'stretch'
  },
  text: {
    fontSize: 28
  }
})

export default App
