import React, {Component} from 'react-native'
import Instructions from './Instructions'

const {StyleSheet, View, Text} = React

class Footer extends Component {
  render () {
    return (
      <View style={styles.footer}>
        <Instructions />
        <Text style={styles.credits}>
          Created by Juan Soto, but inspired by Ian McNally.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 10,
    marginBottom: 10
  },
  credits: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  }
})

export default Footer
