
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,TouchableOpacity,Linking } from 'react-native';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import openMap from 'react-native-open-maps';


import bk from'CJC/images/newbgg.jpg';
import logo from 'CJC/images/cairojazz.png';
import face from 'CJC/images/face.jpg';
import mainimg from 'CJC/images/miniback.png';
import mainimage from 'CJC/images/mainimage.png';
import bkcut from 'CJC/images/backgroundCUT.png';
import pausebtn from 'CJC/images/buttonON.png';
import Cjclogo from 'CJC/images/cjc.png';
import off from 'CJC/images/610OFF.png';

export default class Footertwo extends Component  {

        constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }


    componentDidMount(){
        return fetch('https://cairojazzclub.com/wp-json/cjc/get/info')
            .then(  (response)=> response.json() )
            .then(  (responseJson)=> {
                this.setState({
                    isLoading:false,
                    data:responseJson,
                })
            })
        .catch((error)=>{
            console.log("error");
        });
    }

    _goToCJC() {
        openMap({ latitude: 30.062422, longitude: 31.212267 });
    }
    _goToCJC2() {
        openMap({ latitude: 30.0192714, longitude: 31.0025868 });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity  onPress={()=>{Linking.openURL(`tel:${Object.values(this.state.data)[3]}`);}} >
                       <Image source={require('CJC/images/social/phone.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this._goToCJC2} >
                       <Image source={require('CJC/images/social/location.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL(Object.values(this.state.data)[5])} >
                       <Image source={require('CJC/images/social/facebook.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Linking.openURL(Object.values(this.state.data)[6])} >
                       <Image source={require('CJC/images/social/twitter.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Linking.openURL(Object.values(this.state.data)[7])}  >
                       <Image source={require('CJC/images/social/youtube.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Linking.openURL(Object.values(this.state.data)[8])} >
                       <Image source={require('CJC/images/social/soundcloud.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Linking.openURL(Object.values(this.state.data)[10])} >
                       <Image source={require('CJC/images/social/instagram.png')}
                        style={{width: 25,height: 25,resizeMode:'contain',flex: 1,zIndex:20,tintColor:'#97A8A9'}}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      height:Dimensions.get('window').height * 0.08,
      width:Dimensions.get('window').width * 1,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal:'10%',
      backgroundColor:'rgba(0,0,0,0.1)',
    },
  });
