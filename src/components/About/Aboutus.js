
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions,TouchableHighlight, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image  } from 'react-native';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from '../Navbar/Nav';


import bk from'CJC/images/newbgg.jpg';
import logo from 'CJC/images/cairojazz.png';
import face from 'CJC/images/face.jpg';
import map from 'CJC/images/map.png';
import bk2 from 'CJC/images/onlybg.jpg';
import cjc from 'CJC/images/cjc.png';
import pin from 'CJC/images/pinn.png';
import mobile from 'CJC/images/mobile.png';
import cjc2 from 'CJC/images/610.png';
import aboutcjc from 'CJC/images/aboutcjc.png';
import ld from 'CJC/images/711.gif';
import App from 'CJC/App.js';







export default class Aboutus extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            active:0,
            fontLoaded: false,
        }
    }

    async componentDidMount() {
    await Font.loadAsync({
        'month': require('CJC/android/app/src/main/assets/fonts/AnyConv.com__MyriadPro-Bold.ttf'),
        'AnyConv.com__MyriadPro-Bold_0':require('CJC/android/app/src/main/assets/fonts/AnyConv.com__MyriadPro-Bold_0.ttf'),
        'FORMAL': require('CJC/android/app/src/main/assets/fonts/Formal436BT.ttf'),
        'MyriadPro-Regular':require('CJC/android/app/src/main/assets/fonts/AnyConv.com__MyriadPro-Regular.ttf'),
        'SemiBold' : require('CJC/android/app/src/main/assets/fonts/AnyConv.com__MyriadPro-Semibold.ttf'),
      });
        this.setState({ fontLoaded: true });
  }


    componentDidMount(){
        return fetch('https://cairojazzclub.com/wp-json/cjc/about')
            .then(  (response)=> response.json() )
            .then(  (responseJson)=> {
                this.setState({
                    isLoading:false,
                    dataSource: responseJson.about_content.substring(32,265),
                    dataSource1: responseJson.about_content.substring(265,1315),
                    dataSource2:responseJson.stage_history_content.substring(0,260),
                    dataSource3:responseJson.stage_history_content.substring(260,558),
                    dataSource4:responseJson.stage_history_content.substring(561,594),
                    dataSource5:responseJson.stage_history_content.substring(594,899),
                    dataSource6:responseJson.stage_history_content.substring(899,936),
                    dataSource7:responseJson.stage_history_content.substring(936,1299),
                    dataSource8:responseJson.cjc_art_content.substring(0,295),
                    dataSource9:'Amr Qenawi: Current Graphic Designer & Art Director',
                    dataSource10:responseJson.cjc_art_content.substring(355,716),
                    dataSource11:responseJson.cjc_art_content.substring(716,1190),
                    dataSource12:responseJson.cjc_art_content.substring(1190,1257),
                    dataSource13:responseJson.cjc_art_content.substring(1257,2217),
                    dataSource14:responseJson.cjc_art_content.substring(2217,2248),
                    dataSource15:responseJson.cjc_art_content.substring(2248,2834),
                    dataSource16:responseJson.cjc_art_content.substring(2834,2866),
                    dataSource17:responseJson.cjc_art_content.substring(2866,3340),
                    dataSource18:responseJson.cjc_art_content.substring(3340,3880),

                    aboutimage: responseJson.about_images[0].image_path.url,
                    aboutimage2: responseJson.stage_images[0].image_path.url,
                    aboutimage3: responseJson.cjc_art_images[0].image_path.url,
                    aboutimage4: responseJson.cjc_art_images[1].image_path.url,

                })
            })
        .catch((error)=>{
            console.log("error");
        });
    }
    render(){
        const { navigation } = this.props;  
        if (this.state.isLoading) {
            return(
                <>
                 <StatusBar  barStyle="light-content" />
                <SafeAreaView>
                    <ImageBackground source={require('CJC/images/newbgg.jpg')} resizeMode='cover' style={styles.img}>
                        <Nav />
                            <View style={{width:'100%',height:Dimensions.get('window').height * 0.92 ,justifyContent:'center',alignItems:'center'}}> 
                                <Image style={{width:Dimensions.get('window').width * 0.15,height:Dimensions.get('window').height * 0.15,resizeMode:'contain'}} source={require('CJC/images/pref_loading.gif')} />
                            </View>
                    </ImageBackground>
                </SafeAreaView>
                </>
            );
        }else{
            return(
                <>
                <StatusBar  barStyle="light-content" />
                <SafeAreaView>
                    <ImageBackground source={require('CJC/images/newbgg.jpg')} resizeMode='cover' style={styles.img}>
                        <Nav navigation={this.props.navigation}/>
                        <ImageBackground source={require('CJC/images/onlybg.jpg')} resizeMode='cover' style={styles.bk1}>
                        <ScrollView>
                        <View style={styles.abtview}>
                            <Text style={styles.abttxt}>About Us</Text>
                        </View>
                        <View style={styles.abtview2}>
                            <Text style={styles.abttxt2}>ABOUT CAIRO JAZZ CLUB</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>   

                                <Image source={require('CJC/images/whitecircle.png')} 
                                style={{width: Dimensions.get('window').width * 0.4,height: Dimensions.get('window').width * 0.4,position:'relative'}}
                                />        
                                <Image 
                                source={{uri:this.state.aboutimage}}
                                style={{width: Dimensions.get('window').width * 0.36,height: Dimensions.get('window').width * 0.36, borderRadius:1000/2 ,position:'absolute',left:'9%',marginTop:Dimensions.get('window').height * 0.004}}
                                /> 
                            <View style={{width:'45%' , marginLeft:5}}>
                            <Text style={styles.abttxt3}>{this.state.dataSource}</Text>
                            </View>
                        </View>
                       <View style={styles.undertxtview}>
                        <Text style={styles.abttxt4}>{this.state.dataSource1}</Text>
                        </View>
                         <View style={styles.abtview2}>
                            <Text style={[styles.abttxt2,{marginTop:'5%'}]}>STAGE HISTORY</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>   

                                <Image source={require('CJC/images/whitecircle.png')} 
                                style={{width: Dimensions.get('window').width * 0.4,height: Dimensions.get('window').width * 0.4,position:'relative'}}
                                />        
                                <Image 
                                source={{uri:this.state.aboutimage2}}
                                style={{width: Dimensions.get('window').width * 0.36,height:Dimensions.get('window').width * 0.36, borderRadius:1000/2 ,position:'absolute',left:'9%',marginTop:Dimensions.get('window').height * 0.004}}
                                /> 
                            <View style={{width:'45%' , marginLeft:5}}>
                            <Text style={[styles.abttxt3,{marginTop:'5%'}]}>{this.state.dataSource2}</Text>
                            </View>
                        </View>
                        <View style={styles.undertxtview}>
                        <Text style={styles.abttxt4}>{this.state.dataSource3}</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{width: Dimensions.get('window').width * 0.85,flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{width:'46%'}}>
                                    <Text style={styles.abttxt6}>{this.state.dataSource4}</Text>
                                    <Text style={styles.abttxt5}>{this.state.dataSource5}</Text>
                                </View>
                                <View style={{width:'46%'}}>
                                    <Text style={styles.abttxt6}>{this.state.dataSource6}</Text>
                                    <Text style={styles.abttxt5}>{this.state.dataSource7}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={[styles.abttxt2,{marginTop:'2%'}]}>CJC’s Art</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{width:Dimensions.get('window').width * 0.85,flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{width:'45%'}}>
                                    <Image source={require('CJC/images/whitecircle.png')} 
                                    style={{width: Dimensions.get('window').width * 0.4,height: Dimensions.get('window').width * 0.4,position:'relative',marginTop:Dimensions.get('window').height * 0.05}}
                                    />        
                                    <Image 
                                    source={{uri:this.state.aboutimage3}}
                                    style={{width: Dimensions.get('window').width * 0.36,height: Dimensions.get('window').width * 0.36,marginLeft:'5.5%',position:'absolute', borderRadius:1000/2 ,top:Dimensions.get('window').height * 0.055}}
                                    />
                                </View>
                                <View style={{width:'45%'}}>
                                    <Image source={require('CJC/images/whitecircle.png')} 
                                    style={{width: Dimensions.get('window').width * 0.4,height: Dimensions.get('window').width * 0.4,position:'relative',marginTop:Dimensions.get('window').height * 0.05}}
                                    />        
                                    <Image 
                                    source={{uri:this.state.aboutimage4}}
                                    style={{width: Dimensions.get('window').width * 0.36,height: Dimensions.get('window').width * 0.36,position:'absolute', borderRadius:1000/2 ,marginLeft:'5.5%',top:Dimensions.get('window').height * 0.055}}
                                    />
                                </View>
                            </View>
                        </View>
                        
                            <View style={styles.undertxtview2}>
                            <Text style={styles.abttxt4}>{this.state.dataSource8}</Text>
                            </View>
                            <View style={styles.undertxtview2}>
                                <Text style={styles.abttxt6}>{this.state.dataSource9}</Text>
                                <Text style={styles.abttxt7}>{this.state.dataSource10}</    Text> 
                                <Text style={styles.abttxt7}>{this.state.dataSource11}</    Text> 

                            </View>
                            <View style={styles.undertxtview2}>
                                <Text style={styles.abttxt6}>{this.state.dataSource12}</Text>
                                <Text style={styles.abttxt7}>{this.state.dataSource13}</    Text> 
                            </View>
                            <View style={styles.undertxtview2}>
                                <Text style={styles.abttxt6}>{this.state.dataSource14}</Text>
                                <Text style={styles.abttxt7}>{this.state.dataSource15}</    Text> 
                            </View>
                            <View style={styles.undertxtview2}>
                                <Text style={styles.abttxt6}>{this.state.dataSource16}</Text>
                                <Text style={styles.abttxt7}>{this.state.dataSource17}</    Text>
                            </View>
                            <View style={styles.undertxtview3}>
                                <Text style={styles.abttxt6}>{this.state.dataSource18}</Text>
                            </View>
                        </ScrollView>
                        </ImageBackground>
                    </ImageBackground>
                </SafeAreaView>
                </>
            );
        }
    }
}

const {height} = Math.round(Dimensions.get('window').height);
const {width} = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    img:{
        height: '100%',
        width: '100%',
        position: 'relative', 
        top: 0,
        left: 0,
    },
    loader:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'50%',
    },
    navbar:{
        height: 80,
        marginTop:10,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    bk1:{
        height:Dimensions.get('window').height * 0.91,
        width:Dimensions.get('window').width,
    },
    bk2:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
    },
    abtview:{
        marginTop:20,
        marginBottom:10,
        alignItems: 'center',
    },
    abtview2:{
        alignItems: 'center',
    },
    abtview3:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:  'center',
        marginBottom:5,
    },
    abttxt:{
        fontSize:28,
        color:'rgb(252,176,52)',
        fontFamily:'Formal436BT'
    },
    abttxt2:{
        fontSize:24,
        color:'rgb(199,210,211)',
        fontFamily:'AnyConv.com__MyriadPro-Semibold'
    },
    icnbtn:{
        marginRight:10,
    },
    abtcjc:{
        width:150,
        height:150,
        borderRadius:70,
        overflow:'hidden',
        position:'absolute',
    },
    profileImgContainer:{
        width:153,
        height:152,
        marginTop:'8.5%',
        borderRadius:72,
        backgroundColor:'white',
    },
    abttxt3:{
        fontSize:15,
        color:'rgb(199,210,211)',
        marginLeft:10,
        lineHeight:20,
        fontFamily:'AnyConv.com__MyriadPro-Regular'
    },
    undertxtview:{
        alignItems: 'center',
        justifyContent:  'center',
        marginTop:2,
    },
    undertxtview2:{
        alignItems: 'center',
        justifyContent:  'center',
        marginTop:'7%',
    },
    undertxtview3:{
        alignItems: 'center',
        justifyContent:  'center',
        marginTop:'7%',
        paddingBottom:Dimensions.get('window').height * 0.1
    },
    abttxt4:{
        width:'85%',
        fontSize:15,
        color:'rgb(199,210,211)',
        lineHeight:20,
        fontFamily:'AnyConv.com__MyriadPro-Regular'
    },
    abttxt5:{
        fontSize:15,
        color:'rgb(199,210,211)',
        lineHeight:20,
        fontFamily:'AnyConv.com__MyriadPro-Regular'
    },
    abttxt6:{
        width:'85%',
        fontSize:15,
        lineHeight:20,
        color:'rgb(199,210,211)',
        fontFamily:'AnyConv.com__MyriadPro-Semibold'
    },
    abttxt7:{
        width:'85%',
        fontSize:15,
        color:'rgb(199,210,211)',
        lineHeight:20,
        fontFamily:'AnyConv.com__MyriadPro-Regular'
    },
    


});
