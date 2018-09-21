import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from './components/';
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
