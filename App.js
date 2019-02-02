import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import MyCustomLeftComponent from './src/<MyCustomLeftComponent'
import Cards from './src/components/Card'
import MyCustomRightComponent from './src/MyCustomRightComponent'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        leftComponent={<MyCustomLeftComponent />}
        rightComponent={<MyCustomRightComponent />}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
    /> 
<View>
  <Cards/> 
</View>
</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
