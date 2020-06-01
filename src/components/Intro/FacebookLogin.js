
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckBox, SafeAreaView , StyleSheet ,TouchableOpacity, TextInput , ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image  } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { LoginManager } from 'react-native-fbsdk';



export default class FacebookLogin extends Component {
    _fbAuth() {
      LoginManager.logInWithPermissions(["public_profile"]).then(
        function(result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString() 
            );
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
  }
    render(){
        return(
          <View style={styles.Viewcon1}>
              <SocialIcon style={styles.btn}
                onPress={this._fbAuth}
                title='|  Sign In With Facebook'
                button
                type='facebook'
              />
          </View>
        );
    }
};

const styles = StyleSheet.create({
  Viewcon1:{
    alignItems: 'center',
  },
  btn:{
    width:'70%',
    borderRadius:0,
  },
});