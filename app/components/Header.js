import React, {Component} from 'react-native'

const {StyleSheet, View, Text} = React

class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Farely</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2B3A42',
    height: 60,
    justifyContent: 'center'
  },
  text: {
    color: '#EFEFEF',
    fontSize: 30,
    alignSelf: 'center'
  }
})

export default Header
