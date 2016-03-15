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
    backgroundColor: '#3F5765',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 10
  },
  text: {
    color: '#EFEFEF',
    fontSize: 36,
    alignSelf: 'center'
  }
})

export default Header
