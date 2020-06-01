
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,Linking  , TouchableOpacity} from 'react-native';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from '../Navbar/Nav';
import App from 'CJC/App.js';

import openMap from 'react-native-open-maps';


import bk from'CJC/images/newbgg.jpg';
import logo from 'CJC/images/cairojazz.png';
import face from 'CJC/images/face.jpg';
import map from 'CJC/images/map.png';
import bk2 from 'CJC/images/onlybg.jpg';
import cjc from 'CJC/images/cjc.png';
import pin from 'CJC/images/pinn.png';
import mobile from 'CJC/images/mobile.png';
import cjc2 from 'CJC/images/610.png';
import cjclct from 'CJC/images/locationcjc.png';


export default class Contact extends Component {
        constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            CJClocation: '197a, 26th July St. Agouza, Cairo',
            CJCnumber:'+20 106 880 4764' ,
            CJC2location: 'CJC 610, Al Guezira Plaza, Sheikh Zayed',
            CJC2number:'+20 100 811 1330',  
        }
    }
    
    _goToCJC() {
        openMap({ latitude: 30.062422, longitude: 31.212267 });
    }
    _goToCJC2() {
        openMap({ latitude: 30.0192714, longitude: 31.0025868 });
    }
    componentDidMount(){
        return fetch('https://cairojazzclub.com/wp-json/cjc/get/info')
            .then(  (response)=> response.json() )
            .then(  (responseJson)=> {
                this.setState({
                    isLoading:false,
                    CJClocation: responseJson.cjc_address,
                    CJCnumber:responseJson.cjc_phone,
                    data:responseJson,
                })
            })
        .catch((error)=>{
            console.log("error");
        });
    }
    render(){
        return(
            <>
            <StatusBar  barStyle="light-content" />
            <SafeAreaView>
                <ImageBackground source={require('CJC/images/newbgg.jpg')} resizeMode='cover' style={styles.img}>
                    <Nav navigation={this.props.navigation}/>
                    <View style={styles.mapcont}>
                        <Image 
                        source={require('CJC/images/map.png')}
                        style={styles.map}
                        /> 
                        <Image 
                        source={require('CJC/images/locationcjc.png')}
                        style={styles.cjclct}
                        /> 
                        <Image 
                        source={require('CJC/images/locationcjc.png')}
                        style={styles.cjclct2}
                        /> 
                    </View>
                    
                     <View style={styles.contentcon}>
                        <ImageBackground source={require('CJC/images/onlybg.jpg')} resizeMode='cover' style={styles.bk2}>
                            <View style={styles.conview}>
                                <Image 
                                source={require('CJC/images/cjc.png')}
                                style={styles.cjc}
                                /> 
                            </View>
                            <View style={styles.conview2}>
                                <Image 
                                source={require('CJC/images/pinn.png')}
                                style={styles.pin}
                                /> 
                                <TouchableOpacity
                                onPress={this._goToCJC}
                                >
                                <Text  style={styles.contxt}>{this.state.CJClocation}</Text>
                                </TouchableOpacity>
                            </View>
                             <View style={styles.conview2}>
                                <Image 
                                source={require('CJC/images/mobile.png')}
                                style={styles.mobile}
                                /> 
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${this.state.CJCnumber}`);}}>
                                <Text style={styles.contxt2}>{this.state.CJCnumber}</Text>
                                </TouchableOpacity>
                           </View>
                                <View style={styles.conview}>
                                    <Image 
                                    source={require('CJC/images/610.png')}
                                    style={styles.cjc}
                                    /> 
                            </View>
                            <View style={styles.conview2}>
                                <Image 
                                source={require('CJC/images/pinn.png')}
                                style={styles.pin}
                                /> 
                                <TouchableOpacity 
                                onPress={this._goToCJC2}
                                >
                                    <Text  style={styles.contxt}>{this.state.CJC2location}</Text>
                                </TouchableOpacity>
                            </View>
                             <View style={styles.conview2}>
                                <Image 
                                source={require('CJC/images/mobile.png')}
                                style={styles.mobile}
                                /> 
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${this.state.CJC2number}`);}}>
                                 <Text style={styles.contxt2}>{this.state.CJC2number}</Text>
                                 </TouchableOpacity>
                           </View>
                        </ImageBackground>
                    </View> 
                </ImageBackground>
            </SafeAreaView>
            </>
        );
    }
}


const styles = StyleSheet.create({
    img:{
        height: '100%',
        width: '100%',
        position: 'relative', 
        top: 0,
        left: 0,
    },
    navbar:{
        height: 80,
        marginTop:10,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#762123',
        borderBottomWidth: 2
    },
    usrinfo:{
        flexDirection:'row',
        width:'20%',
        height: 60,
    },
    usrname:{
        marginTop:'8%',
        padding:5,
        color:'#762123',
        fontSize:15,
    },
    face:{
        borderRadius:30,
        height: 45,
        width: 45,
        marginLeft:10,
    },
    logo:{
        height: 65,
        width: 70,
    },
    mapcont:{
        width:'100%',
        height:Dimensions.get('window').height * 0.30,
    },
    map:{
        width:'120%',
        height:'120%',
    },
    cjclct:{
        width:45,
        height:35,
        position: 'absolute', 
        marginLeft:'59%',
        marginTop:'20%',
    },
    cjclct2:{
        width:30,
        height:40,
        position: 'absolute', 
        marginLeft:'40%',
        marginTop:'10%',
    },
    contentcon:{
        width:'100%',
        height:'100%',
        marginTop:'5%',
    },
    bk2:{
        height:'100%',
        width:'100%',
    },
    conview:{
        height:Dimensions.get('window').height * 0.07,
        justifyContent:'center',
        marginLeft:Dimensions.get('window').width * 0.05,
        
    },
    conview2:{
        flexDirection: 'row',
        // marginHorizontal:'15%',
        // marginTop: Dimensions.get('window').height * 0.025,
        height:Dimensions.get('window').height * 0.09,
        marginLeft:Dimensions.get('window').width * 0.15,
        alignItems:'center',
    },
    cjc:{
        width:Dimensions.get('window').width * 0.21,
        height:Dimensions.get('window').height * 0.036,
    },
    pin:{
        width:22,
        height:35,
    },
    contxt:{
        marginHorizontal:35,
        color:'rgb(177,188,189)',
        fontSize:18,
        width:'65%',
        fontFamily:'AnyConv.com__MyriadPro-Regular'
    },
    mobile:{
        width:22,
        height:27,
    },
    contxt2:{
        marginHorizontal:35,
        color:'rgb(177,188,189)',
        fontSize:18,
        marginTop:'1.5%',
        width:'75%',
        fontFamily:'AnyConv.com__MyriadPro-Regular'
    },
    icnbtn:{
        marginRight:10,
    },
});
