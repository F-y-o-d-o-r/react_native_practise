import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Header } from '../components/';

export default class HomeScreen extends Component {
  onButonPress = function() {
    console.log('Go to new page pressed button');
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen')
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View>
        <Text>Page 2</Text>
        <Text>itemId: {this.props.navigation.getParam('itemId', 'NO-ID')}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Header />
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Go to the Home page" color="#841584" />
        <Button title="Go to Details... again" onPress={() => this.props.navigation.navigate('Details')} />
        <Button
          title="Go to Details... again... with push"
          onPress={() => this.props.navigation.push('Details')}
          color="#841584"
        />
        <Button title="Go back to Home page" onPress={() => this.props.navigation.goBack()} />
        <Button title="Go to page 3" onPress={() => this.props.navigation.push('Page3')} color="green" />
        <Button title="Update the title" onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })} />
      </View>
    );
  }
}
