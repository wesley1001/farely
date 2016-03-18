import React, {Component} from 'react-native'

const {StyleSheet, TouchableHighlight, View, Text} = React

class Button extends Component {
  constructor () {
    super()
    this.state = {
      pressed: false
    }
  }
  render () {
    return (
      <TouchableHighlight
        style={styles.touchable}
        onPressIn={this._onPressIn.bind(this)}
        onPressOut={this._onPressOut.bind(this)}>

        <View style={styles.button}>
          <Text style={styles.text}>CALCULATE</Text>
        </View>

      </TouchableHighlight>
    )
  }
  _onPressIn () {
    this.setState({pressed: true})
  }
  _onPressOut () {
    this.setState({pressed: false})
  }
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 5
  },
  button: {
    backgroundColor: '#3F5765',
    borderRadius: 5,
    justifyContent: 'center',
    height: 40,
    width: 120
  },
  text: {
    textAlign: 'center',
    color: '#EFEFEF',
    fontSize: 18,
    fontWeight: '500'
  }
})

export default Button
