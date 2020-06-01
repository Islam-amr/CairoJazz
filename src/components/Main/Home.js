
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,TouchableOpacity,Modal,TouchableHighlight, } from 'react-native';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from '../Navbar/Nav';
import Events from '../Main/EventsScroll';
import Footer from '../Footer/footer';
import Footertwo from '../Footer/footertwo';





import Carousel from 'react-native-snap-carousel';

import bk from'CJC/images/newbgg.jpg';
import logo from 'CJC/images/cairojazz.png';
import face from 'CJC/images/face.jpg';
import mainimg from 'CJC/images/miniback.png';
import mainimage from 'CJC/images/mainimage.png';
import bkcut from 'CJC/images/backgroundCUT.png';
import pausebtn from 'CJC/images/buttonON.png';
import Cjclogo from 'CJC/images/cjc.png';
import off from 'CJC/images/610OFF.png';
import App from 'CJC/App.js';




export default class Form extends Component  {
    constructor(props){
    super(props);
    this.state={
            modalVisible:false,
            CJCpic: require('CJC/images/cjc.png'),
            ONOFFButton:require('CJC/images/buttonON.png'),
            CJC610pic: require('CJC/images/610OFF.png'),
            dataSource:[],
            fontLoaded: false,
            isLoading:true,

            
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    await Font.loadAsync({
      'FORMAL': require('CJC/android/app/src/main/assets/fonts/Formal436BT.ttf'),
     
      
    });
    
    this.setState({ fontLoaded: true });
  }

    componentDidMount(){
        return fetch('https://cairojazzclub.com/wp-json/cjc/home/slider')
            .then(  (response)=> response.json() )
            .then(  (responseJson)=> {
                this.setState({
                    isLoading:false,
                    dataSource: responseJson,
                })
            })
        .catch((error)=>{
            console.log("error");
        });
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
            <View  style={{alignItems:'center', justifyContent:'center'}}>
                <Image source={{uri:item}}
                    style={{width:'100%',height:'100%',resizeMode:'stretch'}}
                    />
            </View>

        )
    }
    render(){
        if (this.state.isLoading) {
            return(
                <>
                 <StatusBar  barStyle="light-content" />
                <SafeAreaView>
                    <ImageBackground source={require('CJC/images/newbgg.jpg')} resizeMode='cover' style={styles.img}>
                        <Nav />
                            <View style={{width:'100%',height:Dimensions.get('window').height * 0.92 ,justifyContent:'center',alignItems:'center'}}> 
                                {/* <ActivityIndicator /> */}
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
                    <View style={{ width:Dimensions.get('window').width,height:Dimensions.get('window').height * 0.38,marginBottom:0}}>
                        <Carousel
                            layout={'stack'} layoutCardOffset={`4`}
                            ref={ref => this.carousel = ref}
                            data={this.state.dataSource}
                            sliderWidth={width}
                            itemWidth={width}
                            renderItem={this._renderItem}
                            autoplay={true}
                            loop={true}
                            autoplayInterval={3500}
                        />
                    </View>
                    <View style={styles.bkk}>
                        <Image 
                        source={require('CJC/images/newfornow.png')}
                        style={styles.mainibk}
                        /> 
                    </View> 
                     <Events /> 
                </ImageBackground>
            </SafeAreaView>
            </>
            );
        }
    }
}


const width = Dimensions.get('window').width;

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
    mainimg:{
        width:'110%',
        height:'113%',
    },
    bkk:{
        height: '100%',
        width: '100%',
        position: 'absolute', 
        marginTop:Dimensions.get('window').height * 0.35,
        marginBottom:0,
    },
    mainibk:{
        height: '100%',
        width: '100%',
        resizeMode:'stretch'
    },
    txt:{
        fontSize:40,
    },
    event:{
        marginTop:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:-5,
    },
    logobtn:{
        width:85,
        height:35,
    },
    pausebtn:{
        margin:15,
        marginLeft:20,
        marginRight:20,
        width:68,
        height:27,
        marginHorizontal:15,
    },
    offbtn:{
        width:90,
        height:35,
    },
    upc:{
        alignItems: 'center',
    },
    upctxt:{
        fontSize:24,
        color:'#c5c997',
    } ,   
    icnbtn:{
        marginRight:10,
    },
    item:{
        marginTop:40,
        alignItems: 'center',
    },
    eventphoto:{
        width: 165,
        height: 165,
        borderRadius:60,
        top:'-12%',
        left:'7%',
        resizeMode:'contain',
        position:'absolute',
        zIndex:101,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



 