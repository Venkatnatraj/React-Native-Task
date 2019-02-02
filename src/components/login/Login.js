import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <View>
        <Button title="d, sd,n"
            onPress={()=>this.props.navigation.navigate('Home')}/>
      </View>
    )
  }
}