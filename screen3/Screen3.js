import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Header } from '../components/';

export default class Screen3 extends Component {
  onButonPress = function() {
    console.log('Go to new page pressed button');
  };
  render() {
    return (
      <View>
        <Text>Page 3</Text>
        <Header />
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Go to the Home page" color="#841584" />
        <Button title="Go to page 2" onPress={() => this.props.navigation.navigate('Details')} />
        <Button title="Go to Home page" onPress={() => this.props.navigation.popToTop()} />
      </View>
    );
  }
}
