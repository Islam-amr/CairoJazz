/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginManager } from 'react-native-fbsdk';


import { SafeAreaView ,TouchableOpacity, StyleSheet , ScrollView , View ,Dimensions, Text , StatusBar , ImageBackground , Image } from 'react-native';
import { Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';


import logo from './images/cairojazz.png';
import background from './images/newbgg.jpg';
import info from './images/info.png';
import Form from './src/components/Form/Form';
import ImageSlider from './src/components/Intro/ImageSlider';
import Home from './src/components/Main/Home';
import Events from './src/components/Main/EventsScroll';

import Contact from './src/components/Contact/Contact';
import About from './src/components/About/Aboutus';
import Nav from './src/components/Navbar/Nav';

import Footer from './src/components/Footer/footer';


import Calendar from './src/components/Calendar/EventCalendar';



import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';



const HomeScreen = ({navigation}) => {
  fblogin = ()=>{
        LoginManager.logInWithPermissions(["public_profile"]).then(
        function(result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            const nav = navigation.navigate("Form")
            // console.log(StatusBar.currentHeight);
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
  }
  return (
    <>
      <StatusBar  barStyle="light-content" />
      <SafeAreaView style={styles.Main}>
        <ImageBackground source={require('./images/newbgg.jpg')} resizeMode='cover' style={styles.backgroundimage}>
          <View style={styles.Viewcon}>
            <Image 
              source={require('./images/cairojazz.png')}
              style={styles.cairojazzimg}
            /> 
          </View>
          <ImageSlider />
          <View style={styles.Viewcon1}>
              <SocialIcon style={styles.btn}
                onPress={()=> {
                fblogin();
                }}                
                title='|  Sign In With Facebook'
                button
                iconSize={24}
                type='facebook'
              />
              <View style={styles.viewcon3}>
                  <Image 
                  source={require('./images/info.png')}
                  style={styles.info}
                  /> 
                  <Text style={{fontSize:12}}> We do not post anything to Facebook </Text>
              </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};


const {height} = Math.round(Dimensions.get('window').height);
const {width} = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  backgroundimage:{
    height: '100%',
    width: '100%',
    position: 'relative', 
    top: 0,
    left: 0,
  },
  Viewcon:{
    alignItems: 'center',
    height:Dimensions.get('window').height * 0.15,
  },
  cairojazzimg:{
    resizeMode:'contain',
    marginTop:Dimensions.get('window').height * 0.01,
    marginBottom:Dimensions.get('window').height * 0.01,
    height:Dimensions.get('window').height * 0.2,
    width:Dimensions.get('window').width * 0.2,
  },
  txt:{
    fontSize:18,
  },
  viewcon3:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:Dimensions.get('window').height * 0.02,
  },
  info:{
    width:16,
    height:16,
    marginHorizontal:'1%'
  },
  Viewcon1:{
    marginTop:'2%',
    alignItems: 'center',
    height:Dimensions.get('window').height * 0.23,
    width:Dimensions.get('window').width,
    
  },
  btn:{
    width:225,
    height:45,
    borderRadius:0,
  },
});


const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator   
      screenOptions={{
      headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="ImageSlider" component={ImageSlider} />
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Footer" component={Footer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
