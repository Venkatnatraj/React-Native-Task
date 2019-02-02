import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/login/Input';
import { Button } from './components/login/Button';
import Login from './components/login/Login'
import Home from './components/login/Home'

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
    user: null,
    error: '',
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCgXC1RIemghOsd-BXpMWAcmQkNpuyShFs",
    authDomain: "react-native-8e19f.firebaseapp.com"
    }

    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });

    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => this.setState({
        authenticating: false,
        user,
        error: '',
      }))
      .catch(() => {
        // Login was not successful
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => this.setState({
            authenticating: false,
            user,
            error: '',
          }))
          .catch(() => this.setState({
            authenticating: false,
            user: null,
            error: 'Authentication Failure',
          }))
      })
  }

  onPressLogOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: '',
          password: '',
          authenticating: false,
          user: null,
        })
      }, error => {
        console.error('Sign Out Error', error);
      });
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    if (this.state.user !== null) {
      return (
        <View style={styles.form}>
          <Text>Logged In</Text>
          <Button onPress={() => this.onPressLogOut()}>Log Out</Button>
        </View>
      )
    }

    return (
      <View style={styles.form}>
        <Logo/>
        <Input
          placeholder='Enter your email...'
          label='Email'
          keyboardType='email-address'
          onSubmitEditing={()=>this.password.focus()}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button 
          onPress={() => this.onPressSignIn()}
        >
            Log In
        </Button>
        <Text>{this.state.error}</Text>
      </View>
    )

  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
        <AppNavi />
      </View>
    );
  }
}
const AppNavi = createStackNavigator({
  Login: Login,
  Home:Home
})

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});