
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,Linking,TouchableOpacity  } from 'react-native';

import Swiper from 'react-native-swiper';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from '../Navbar/Nav';
import CalenderScroll from '../Calendar/CalenderScroll';
import Monthswiper from '../Calendar/Monthswiper';


import App from 'CJC/App.js';

import Footer from '../Footer/footer';
import Footertwo from '../Footer/footertwo';

import bk from'CJC/images/newbgg.jpg';
import logo from 'CJC/images/cairojazz.png';
import face from 'CJC/images/face.jpg';
import map from 'CJC/images/map.png';
import bk2 from 'CJC/images/onlybg.jpg';
import cjc from 'CJC/images/cjc.png';
import cjcoff from 'CJC/images/cjcOFF.png';
import pin from 'CJC/images/pinn.png';
import mobile from 'CJC/images/mobile.png';
import cjc2 from 'CJC/images/610.png';
import cjclct from 'CJC/images/locationcjc.png';
import buttonoff from 'CJC/images/buttonOFF.png';



export default class Calendar extends Component {
    constructor(){
 
    super();
 
    this.state={
 
            CJCpic: require('CJC/images/cjc.png'),
            ONOFFButton:require('CJC/images/buttonON.png'),
            CJC610pic: require('CJC/images/610OFF.png'),

    }
 
  }

    footerdisplay(){
        if(this.state.CJC610pic ==  require('CJC/images/610.png'))
        {
            return(
                    <Footertwo />
            )
        }else
        {
            return(
                    <Footer />
            )
        }
    }
 
  Load_New_Image=()=>{
      if (this.state.CJCpic ==  require('CJC/images/cjc.png')) {
             this.setState({
            CJCpic: require('CJC/images/cjc.png'),
            ONOFFButton:require('CJC/images/buttonON.png'),
            CJC610pic: require('CJC/images/610OFF.png'),
            }) 
      }else
      {
            this.setState({
            CJCpic: require('CJC/images/cjc.png'),
            ONOFFButton:require('CJC/images/buttonON.png'),
            CJC610pic: require('CJC/images/610OFF.png'),
            }) 
      }
  }
    Load_New_Image2=()=>{
      if (this.state.CJC610pic ==  require('CJC/images/610.png')) {
             this.setState({
            CJCpic: require('CJC/images/cjcOFF.png'),
            ONOFFButton:require('CJC/images/buttonOFF.png'),
            CJC610pic: require('CJC/images/610.png'),
            }) 
      }else
      {
            this.setState({
            CJCpic: require('CJC/images/cjcOFF.png'),
            ONOFFButton:require('CJC/images/buttonOFF.png'),
            CJC610pic: require('CJC/images/610.png'),
            }) 
      }
  }
    _renderItem({item,index}){
        return (
            <>
                <TouchableOpacity  
                style={{height:Dimensions.get('window').height * 0.28}}
                onPress={()=> {
                alert('No reservation available right now.')
                }} 
                > 
            <View  style={{alignItems:'center', justifyContent:'center',height:Dimensions.get('window').height * 0.28}}>
                <Image source={require('CJC/images/whitecircle.png')} 
                    style={{width: '100%',height: '80%',bottom:'8%',resizeMode:'contain',position:'relative',zIndex:9}}
                    />
                   <Image source={require('CJC/images/dateshape.png')} 
                    style={{width: '45%',height:'20%', marginTop: '0.1%' ,bottom:'65%',left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
                    />
                    <Image source={require('CJC/images/dateshape.png')} 
                    style={{width: '44%',height:'19%', marginTop: '0.1%' ,bottom:'67%',left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
                    />
                 <Text style={{ fontSize:22 ,bottom:'70%',left:'5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontWeight: "bold",}}>14 FEB</Text> 
                <Image
                source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
                style={styles.eventphoto}
                />  
            </View>
            </TouchableOpacity>
        </>
        )
    }
    _renderItem2({item,index}){
       return (
           <>
                             <TouchableOpacity  
                style={{height:Dimensions.get('window').height * 0.28}}
                onPress={()=> {
                alert('Sorry no reservation available right now.')
                }} 
                > 
            <View  style={{alignItems:'center', justifyContent:'center',height:Dimensions.get('window').height * 0.28}}>
                <Image source={require('CJC/images/whitecircle.png')} 
                    style={{width: '100%',height: '80%',bottom:'8%',resizeMode:'contain',position:'relative',zIndex:9}}
                    />
                   <Image source={require('CJC/images/dateshape.png')} 
                    style={{width: '45%',height:'20%', marginTop: '0.1%' ,bottom:'65%',left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
                    />
                    <Image source={require('CJC/images/dateshape.png')} 
                    style={{width: '44%',height:'19%', marginTop: '0.1%' ,bottom:'67%',left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
                    />
                 <Text style={{ fontSize:22 ,bottom:'70%',left:'5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontWeight: "bold",}}>14 FEB</Text> 
                <Image
                source={{ uri: 'https://cairojazzclub.com\/wp-content\/uploads\/2019\/10\/Saturday-1-300x300.jpg' }}
                style={styles.eventphoto}
                />
            </View>
            </TouchableOpacity>
        </>
        )
    }
    
    _monthSweiper()
    {
        let month = new Date().getMonth() + 1;
        let month2 = null;
        switch (month) {
            case 1:
                month = "JAN"
                month2 = "FEB"
                break;
            case 2:
                month = "FEB"
                month2 = "MAR"
                break;
            case 3:
                month = "MAR"
                month2 = "APR"
                break;
            case 4:
                month = "APR"
                month2 = "MAY"
                break;
            case 5:
                month = "MAY"
                month2 = "JUN"
                break;
            case 6:
                month = "JUN"
                month2 = "JUL"
                break;
            case 7:
                month = "JUL"
                month2 = "AUG"
                break;
            case 8:
                month = "AUG"
                break;
            case 9:
                month = "SEP"
                month2 = "OCT"
                break;
            case 10:
                month = "OCT"
                month2 = "NOV"
                break;
            case 11:
                month = "NOV"
                month2 = "DEC"
                break;
            case 12:
                month = "DEC"
                break;
            default:
                break;
        }

        return(
            <>
            <View style={{ alignItems:'center'}}>
            <View style={{ width:'60%',height:Dimensions.get('window').height * 0.09}}>
                <Swiper style={styles.wrapper} showsButtons  loop={true} 
                nextButton={
                    <View>
                            <Image source={require('CJC/images/monthbutton2.png')} style={{height:Dimensions.get('window').height * 0.035,width:Dimensions.get('window').height * 0.03}} />
                    </View>
                }
                prevButton={
                    <View>
                        <Image source={require('CJC/images/monthbutton1.png')} style={{height:Dimensions.get('window').height * 0.035,width:Dimensions.get('window').height * 0.03}}/>
                    </View>
                }
                dot={<View style={{opacity:0}}/>}
                activeDot={<View style={{opacity:0}} />}
                >
                    <View testID="Hello" style={styles.slide1}>
                    <Text style={styles.text}>{month}</Text>
                    </View>
                    <View testID="Beautiful" style={styles.slide2}>
                    <Text style={styles.text}>{month2}</Text>
                    </View>
                </Swiper>
            </View>
            </View>
            <View style={{ alignItems:'center'}}>
                <View style={{ width:'100%',height:Dimensions.get('window').height * 0.50}}>

                 <Swiper
                    style={styles.wrapper}
                    loop={false}
                     dot={<View style={{backgroundColor: 'rgba(252, 176, 52,0.6)', width: '2.5%', height: '25%', borderRadius: 100/2, marginTop: '10%',marginHorizontal:'2%'}} />}
                    activeDot={<View style={{backgroundColor: '	rgba(255,255,255,0.6)', width: '2.5%', height: '25%', borderRadius: 100/2, marginTop: '10%',marginHorizontal:'2%'}} />}
                >
                    <View>
                        <View style={{backgroundColor:'rgba(0,0,0,0.1)',alignItems:'center', justifyContent:'center', height:'15%'}}>
                            <Text style={styles.text2}>FRIDAY</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
                            style={{height:'75%',width:'100%',resizeMode:'contain'}}
                            />
                    </View>
                    <View>
                        <View style={{backgroundColor:'rgba(0,0,0,0.1)',alignItems:'center', justifyContent:'center', height:'15%'}}>
                            <Text style={styles.text2}>SATURDAY</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://cairojazzclub.com\/wp-content\/uploads\/2019\/10\/Saturday-1-300x300.jpg' }}
                            style={{height:'75%',width:'100%',resizeMode:'contain'}}
                            />
                    </View>
                    <View>
                        <View style={{backgroundColor:'rgba(0,0,0,0.1)',alignItems:'center', justifyContent:'center', height:'15%'}}>
                            <Text style={styles.text2}>SUNDAY</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
                            style={{height:'75%',width:'100%',resizeMode:'contain'}}
                            />
                    </View>
                    <View>
                        <View style={{backgroundColor:'rgba(0,0,0,0.1)',alignItems:'center', justifyContent:'center', height:'15%'}}>
                            <Text style={styles.text2}>MONDAY</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://cairojazzclub.com\/wp-content\/uploads\/2019\/10\/Saturday-1-300x300.jpg' }}
                            style={{height:'75%',width:'100%',resizeMode:'contain'}}
                            />
                    </View>
                </Swiper>
                </View>
            </View>
            </>

        )
    }

    render(){
        return(
            <>
            <StatusBar  barStyle="light-content" />
            <SafeAreaView>
                <ImageBackground source={require('CJC/images/newbgg.jpg')} resizeMode='cover' style={styles.img}>
                    <Nav navigation={this.props.navigation}/>
                        <View style={styles.contentcon}>
                        <ImageBackground source={require('CJC/images/onlybg.jpg')} resizeMode='cover' style={styles.bk2}>
                            <View style={styles.contentcal} >
                                <Text style={styles.maintxt}>Calendar</Text>
                           </View>
                           <View style={styles.event}> 
                                <TouchableOpacity onPress={this.Load_New_Image}>
                                    <Image 
                                    source={this.state.CJCpic}
                                    style={styles.logobtn}
                                    /> 
                                    </TouchableOpacity>
                                    <Image 
                                    source={this.state.ONOFFButton}
                                    style={styles.pausebtn}
                                    />  
                                    <TouchableOpacity onPress={this.Load_New_Image2}>
                                    <Image 
                                    source={this.state.CJC610pic}
                                    style={styles.offbtn}
                                    />          
                                </TouchableOpacity>
                            </View>

                            {this._monthSweiper()}
                        </ImageBackground>
                    </View> 
                <View style={{position:'absolute', bottom:0}}>
                    {this.footerdisplay()}   
                </View>
                </ImageBackground>
            </SafeAreaView>
            </>
        );
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
    bk2:{
        height:'100%',
        width:'100%',
    },
    contentcal:{
        height:Dimensions.get('window').height * 0.1,
        alignItems: 'center',
        justifyContent:  'center',
        marginTop:Dimensions.get('window').height * 0.02,
    },
    maintxt:{
        color:'#fcb034',
        fontSize:26,
        fontFamily: "Formal436BT",
    },
    event:{
        marginTop:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:Dimensions.get('window').height * 0.08,
    },
        logobtn:{
        width:Dimensions.get('window').width * 0.2,
        height:Dimensions.get('window').height * 0.035,
    },
    pausebtn:{
        width:57,
        height:22,
        marginHorizontal:Dimensions.get('window').height * 0.04,
    },
    offbtn:{
        width:Dimensions.get('window').width * 0.2,
        height:Dimensions.get('window').height * 0.035,
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontFamily:'AnyConv.com__MyriadPro-Semibold'
  },
  text2: {
    color: '#fff',
    opacity:0.6,
    fontSize: 22,
    fontFamily:'AnyConv.com__MyriadPro-Regular'
  },
  text3: {
    color: '#fff',
    opacity:0.6,
    fontSize: 14,
    fontWeight: 'bold',
    
  },
    paginationStyle: {
        alignItems:'center',
  },
  paginationText: {
    color: 'white',
    fontSize: 16
  }


});
