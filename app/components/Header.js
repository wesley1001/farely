import React, {Component} from 'react-native'
import Dimensions from 'Dimensions'

const {StyleSheet, View, Text} = React
const {width} = Dimensions.get('window')

class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <Text style={[styles.text]}>Farely</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontSize: 32,
    alignSelf: 'center'
  },
  scaledText: {
    fontSize: width / 7
  }
})

export default Header
