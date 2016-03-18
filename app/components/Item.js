import React from 'react-native'
import plur from 'plur'

const {StyleSheet, Text, View} = React

const Item = ({amount, rides}) =>
  <View style={styles.row}>
    <Text style={styles.text}>${amount} for {rides} {pluralizeRides(rides)}</Text>
  </View>

const pluralizeRides = number => plur('ride', number)

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 5,
    padding: 10
  },
  text: {
    flex: 1,
    fontSize: 24
  }
})

export default Item
