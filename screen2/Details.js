import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Button, Image, WebView, View } from 'react-native';
import { Header } from '../components/';

export default class HomeScreen extends Component {
  onButonPress = function() {
    console.log('Go to new page pressed button');
  };
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerTitle: <HeaderApp />,
      headerStyle: {
        height: 240
      },
      headerTintColor: '#000'
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <React.Fragment>
        <HeaderApp />

        <ScrollView style={{ marginTop: 320 }}>
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
          <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

class HeaderApp extends Component {
  render() {
    return (
      <WebView
        style={{ height: 100, width: '100%' }}
        originWhitelist={[ '*' ]}
        source={{
          html:
            '<iframe width="100%" height="315" src="https://www.youtube.com/embed/3iNnqtmEgtg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        }}
      />
    );
  }
}
