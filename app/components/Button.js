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
    let {onButtonPress} = this.props

    return (
      <View style={styles.main}>
        <TouchableHighlight
          style={styles.touchable}
          onPress={onButtonPress}
          onPressIn={this._onPressIn.bind(this)}
          onPressOut={this._onPressOut.bind(this)}>

          <View style={styles.button}>
            <Text style={styles.text}>CALCULATE</Text>
          </View>

        </TouchableHighlight>
      </View>
    )
  }
  _onPressIn () {
    this.setState({pressed: true})
  }
  _onPressOut () {
    this.setState({pressed: false})
  }
}

Button.propTypes = {
  onButtonPress: React.PropTypes.func
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center'
  },
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
