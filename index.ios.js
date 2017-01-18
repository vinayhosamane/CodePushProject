/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import codePush from 'react-native-code-push';

export default class AwesomeProject extends Component {

componentDidMount()
{
  var updateDialogOptions = {
          updateTitle: "You have an update",
          optionalUpdateMessage: "Update available for your React-Native app. Install?",
          optionalIgnoreButtonLabel: "Nope",
          optionalInstallButtonLabel: "Yup",
      };

    var onError = function (error) {
    console.log("An error occurred. " + error);
};

var onDownloadProgress = function (downloadProgress) {
    if (downloadProgress) {
        console.log("Downloading " + downloadProgress.receivedBytes + " of " + downloadProgress);
    }
};

  codePush.sync({updateDialog: updateDialogOptions , installMode: codePush.InstallMode.IMMEDIATE},onDownloadProgress);
}

onDeleteClick()
{
  Alert.alert(
         'Alert OK',
         'Alert on OK Press.',
         [
           {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           {text: 'Yes', onPress: () =>
           {
             console.log('OK Pressed!')
           }
         }
       ]
     );
}

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          CodePush Integarted by Vinay Hosamane - IOS Application developer!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.instructions}>
          Adding another line of textview in index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Testing codePush for team
        </Text>
        <Text style={styles.instructions}>
          Integrated CI/CD for this Project using Microsoft Azure Mobile Center.
        </Text>
        <TouchableOpacity onPress={()=>{
               //Share.open(shareOptions);
               this.onDeleteClick();
          }}>
          <Text style={styles.instructions}>
          {"\n"}
          OK
          </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
