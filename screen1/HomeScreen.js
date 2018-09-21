import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Header } from '../components/';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 'test'
    };
  }
  static navigationOptions = {
    title: 'Home'
    //   headerStyle: {
    //     backgroundColor: '#f4511e'
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold'
    //   }
  };
  onButonPress = () => {
    {
      this.props.navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'anything you want here'
      });
    }
  };
  render() {
    return (
      <View>
        <Header />
        <Text>Home Page</Text>
        <Button onPress={this.onButonPress} title="Go to the new page" color="#841584" />
      </View>
    );
  }
}
