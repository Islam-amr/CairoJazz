
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text ,Modal, StatusBar ,Button , ImageBackground ,TouchableHighlight, Image ,Linking,TouchableOpacity  } from 'react-native';

import Carousel from 'react-native-snap-carousel';


import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from '../Navbar/Nav';
import App from 'CJC/App.js';
import Footer from '../Footer/footer';
import Monthswiper from '../Calendar/Monthswiper';




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



export default class CalendarScroll extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
             
            CJCpic: require('CJC/images/cjc.png'),
            ONOFFButton:require('CJC/images/buttonON.png'),
            CJC610pic: require('CJC/images/610OFF.png'),
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }
setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}                      
            >

                <Image
                source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
                style={styles.eventphoto}
                />
            </TouchableOpacity>
            </View>

        )
    }
    _renderItem2({item,index}){
        return (
            <View  style={{alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}                      
            >
                <Image source={require('CJC/images/whitecircle.png')} 
                    style={{width: 200,height: 180,bottom:'16%',left:'3%',resizeMode:'contain',position:'relative',zIndex:9}}
                    />
                <Image source={require('CJC/images/dateshape.png')} 
                    style={{width: 100,height: 100, marginTop: '0.1%' ,bottom:'65%',left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
                    />
                    <Image source={require('CJC/images/dateshape.png')} 
                    style={{width: 88,height: 88, marginTop: '0.1%' ,bottom:'68%',left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
                    />
                    <Text style={{ fontSize:24, top: '-2%' ,bottom:'68%',left:'5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontWeight: "bold"}}>14 FEB</Text>
                <Image
                source={{ uri: 'https://cairojazzclub.com\/wp-content\/uploads\/2019\/10\/Saturday-1-300x300.jpg' }}
                style={styles.eventphoto}
                />
            </TouchableOpacity>
            </View>

        )
    }
 
    render(){
            const { modalVisible } = this.state;

        return(
            

            <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
        );
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
        paddingTop:320,
        width:'100%',
        height:'100%',
    },
    bkk:{
        height: '100%',
        width: '100%',
        position: 'absolute', 
        marginTop:'55%',
    },
    mainibk:{
        height: '105%',
        width: '100%',
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
        width: 200,
        height: 200,
        position:'absolute',
        zIndex:101,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
