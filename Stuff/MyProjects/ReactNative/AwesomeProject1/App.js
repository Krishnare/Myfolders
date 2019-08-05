/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TouchableHighlight, FlatList } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
   pressButton(){
    Alert.alert('You tapped the button!')
   }
   tapTheButton(){
       Alert.alert('Tap THe Button!')
     }
  render() {
//   const { goBack } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
             <FlatList
                      data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                      ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            <Button onPress={ this.pressButton } title="Press me"> </Button>
        <Text style={{flex: 1, backgroundColor: 'powderblue'}}>Welcome to React Native! </Text>
        <Text style={{flex: 2, backgroundColor: 'skyblue'}}>To get started, edit App.js</Text>
        <Text style={{flex: 3, backgroundColor: 'steelblue'}}>{instructions} abcdefgd</Text>
      </View>
    );
  }
}
//export default class HomeScreen extends React.Component {
//  render() {
//    const { navigate } = this.props.navigation;
//
//    return (
//      <View>
//        <Text>This is the home screen of the app</Text>
//        <Button
//          onPress={() => navigate('Profile', { name: 'Brent' })}
//          title="Go to Brent's profile"
//        />
//      </View>
//    );
//  }
//}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
