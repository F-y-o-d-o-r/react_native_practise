import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    const { container, headerText } = styles;
    return (
      <View style={container}>
        <Text style={headerText}>1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#19273D'
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Roboto'
  }
});

export { Header };
