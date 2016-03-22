import React, {Component} from 'react-native'
import Item from './Item'

const {StyleSheet, View, ListView} = React

class Fares extends Component {
  render () {
    return (
      <View style={styles.fares}>
        <ListView
          style={styles.list}
          dataSource={this.props.dataSource}
          renderRow={Item} />
      </View>
    )
  }
}

Fares.propTypes = {
  dataSource: React.PropTypes.object
}

const styles = StyleSheet.create({
  fares: {
    alignItems: 'center'
  },
  list: {
    marginTop: 25
  }
})

export default Fares
