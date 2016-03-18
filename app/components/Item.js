import React from 'react-native'

const {Text} = React

const Item = ({amount, rides}) => <Text>${amount} for {rides} rides</Text>

export default Item
