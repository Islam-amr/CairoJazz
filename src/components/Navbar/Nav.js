
import React , { Component , useState , useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckBox, SafeAreaView ,TouchableOpacity, StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button ,Switch, ImageBackground , Image ,TouchableHighlight } from 'react-native';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
   LoginButton,
   AccessToken,
   GraphRequest,
   GraphRequestManager,
   token
 } from 'react-native-fbsdk';


import bk from'CJC/images/newbgg.jpg';
import logo from 'CJC/images/cairojazz.png';
import face from 'CJC/images/face.jpg';
import mainimg from 'CJC/images/miniback.png';
import mainimage from 'CJC/images/mainimage.png';
import bkcut from 'CJC/images/backgroundCUT.png';
import pausebtn from 'CJC/images/buttonON2.png';
import Cjclogo from 'CJC/images/cjc.png';
import off from 'CJC/images/610OFF.png';
import App from 'CJC/App.js';



const Nav = ({navigation}) => {

        let menu = "menu";

        const [showNav, setShowNav] = useState(false);
        const [pictureURL, setPictureURL] = useState(null);
        const [FName, setFName] = useState(null);
        const [LName, setLName] = useState(null);
        const infoRequest = new GraphRequest(
        '/me?fields=id,first_name,last_name,picture.type(large)',
        
        null,
        (error, result) => {
            if (error) {
            console.log('Error fetching data: ' + JSON.stringify(error));
            } else {
            console.log(JSON.stringify(result, null, 2));
            setPictureURL(result.picture.data.url);
            setFName(result.first_name);
            setLName(result.last_name.slice(0,1).toUpperCase()+'.');
            }
        },
        );
        new GraphRequestManager().addRequest(infoRequest).start();
        function Change()
        {
            if(menu === "menu")
            {
                menu="close";
                console.log(menu)
            }else{
                menu="menu";
                console.log(menu)
            }
        }
        return(
            <>
                <View style={styles.navbar}>
                    <View style={styles.usrinfo}>
                    <TouchableHighlight >
                        <View>
                        <TouchableOpacity>
                        <Image 
                        source={require('CJC/images/faceborder.png')}
                        style={{position:'absolute',width:42,height:41,marginLeft:Dimensions.get('window').height * 0.015}}
                        /> 
                        <Image 
                        source={{uri: pictureURL}}
                        style={styles.face}
                        />  
                        </TouchableOpacity>
                        </View>
                        
                        
                    </TouchableHighlight>
                        <Text style={styles.usrname}>{FName +" "+ LName}</Text>
                    </View>
                    <View style={{width:Dimensions.get('window').width * 0.33,}}>
                        <Image 
                        source={require('CJC/images/cairojazz.png')}
                        style={styles.logo}
                        /> 
                    </View>
                    <View style={styles.navbtn}>
                    <TouchableOpacity  onPress={() => setShowNav(!showNav)}>
                        <MaterialIcons
                            name={!showNav ? menu='menu' : menu='close'}
                            style={{ marginRight: 20, color: 'rgba(118, 33, 35,0.7)' }}
                            size={30}
                        />
                    </TouchableOpacity>
                    </View>


                </View>
                  {  showNav &&  <View style={{flex:1,position:'absolute',zIndex:120,width:'100%',height: '100%' , top:height*0.09,left:0}}>
                                <ImageBackground source={require('CJC/images/onlybg.jpg')} resizeMode='cover' style={styles.bk2}>   
                                    <View style={styles.LinkCon}>
                                    <TouchableOpacity onPress={()=> {navigation.navigate("Main");setShowNav(!showNav);}}>
                                        <Text style={styles.Link}>HOME</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> {navigation.navigate("About");setShowNav(!showNav);}}>
                                        <Text style={styles.Link}>ABOUT CJC</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> {navigation.navigate("Calendar");setShowNav(!showNav);}}>
                                        <Text style={styles.Link}>SCHEDULE</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> {navigation.navigate("Contact");setShowNav(!showNav);}}>
                                        <Text style={styles.Linkk}>CONTACT US</Text>
                                    </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                </View>}

            </>
        );
}

const height = Dimensions.get('window').height;
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
    navbar:{
        height: Dimensions.get('window').height * 0.09,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'relative'
    },
    usrinfo:{
        flexDirection:'row',
        width:Dimensions.get('window').width * 0.33,
        // width:'15%',
    },
    usrname:{
        marginTop:'5%',
        marginLeft:'4%',
        padding:5,
        color:'#762123',
        fontSize:11,
        fontWeight:'bold',
    },
    profileImgContainer: {
        marginLeft:15,
        height: 40,
        width: 40,
        borderRadius:40/2,
        overflow: "hidden",
    },
    face:{
        borderRadius:40/2,
        width:40,
        height:40,
        marginLeft:Dimensions.get('window').height * 0.016,
        marginTop:Dimensions.get('window').height * 0.001,
    },
    logo:{
        height: ( Dimensions.get('window').height * 0.09) * 0.85,
        width:( Dimensions.get('window').height * 0.09) * 0.85,
        resizeMode:'contain'
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
        marginTop:5,
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
        width:85,
        height:35,
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
    LinkCon:{
        marginTop:30,
    },
    Link:{
        color: '#fcb034',
        fontSize:26,
        paddingTop:22.5,
        paddingBottom:22.5,
        paddingLeft:50,
        borderBottomColor: 'white',
        borderBottomWidth: 0.6,
        width:'100%',
        fontFamily: "Formal436BT",
    },
    Linkk:{
        color: '#fcb034',
        fontSize:26,
        paddingTop:22.5,
        paddingBottom:22.5,
        paddingLeft:50,
        width:'100%',
        fontFamily: "Formal436BT",
    }
});

export default Nav;




