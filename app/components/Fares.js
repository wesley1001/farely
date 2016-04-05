import React, {Component} from 'react-native'
import Item from './Item'

const {StyleSheet, View, ListView} = React

class Fares extends Component {
  render () {
    return (
      <View style={styles.fares}>
        <ListView
          style={{marginTop: 20}}
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
    flex: 2,
    marginBottom: 20,
    alignItems: 'center'
  }
})

export default Fares
