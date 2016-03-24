import React, {Component} from 'react-native'

const {StyleSheet, View, Text} = React

class Footer extends Component {
  render () {
    return (
      <View style={styles.footer}>
        <Text style={styles.text}>
          Created by Juan Soto, but inspired by Ian McNally.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    left: 10
  },
  text: {
    fontSize: 17,
    textAlign: 'center'
  }
})

export default Footer
