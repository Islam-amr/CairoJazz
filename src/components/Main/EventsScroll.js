
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from 'react-native-modal';



import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,TouchableOpacity ,TouchableHighlight} from 'react-native';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from '../Navbar/Nav';
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
import Footer from '../Footer/footer';
import Footertwo from '../Footer/footertwo';




export default class Form extends Component  {

 
    constructor(props){
        super(props);
        this.state = {
                isModalVisible: false,
                
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
        ],
        fontLoaded:false,
      }
    }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
   
  async componentDidMount() {
    await Font.loadAsync({
      'FORMAL': require('CJC/android/app/src/main/assets/fonts/Formal436BT.ttf'),
     
      
    });
    

    this.setState({ fontLoaded: true });
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



    _renderItem=({item,index})=>{
        return (
            <>  
                <View>
                    <Modal isVisible={this.state.isModalVisible} backdropOpacity={0.3} backdropColor={'grey'}>
                    <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
                            <ImageBackground source={require('CJC/images/popup.png')} resizeMode='contain' style={{width:Dimensions.get('window').width * 0.9,height:Dimensions.get('window').height * 0.9,alignItems:'center'}}>
                                <View style={{width:'85%',height:'100%'}}>
                                    <View style={{height:'6%',opacity:0}}>
                                        <Text>1</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:'10%',alignItems:'center',justifyContent:'space-between'}}>
                                            <View style={{width:'30%'}}>
                                                <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={require('CJC/images/cjc.png')} />
                                            </View>
                                            <View style={{width:'10%'}}>
                                                <TouchableOpacity
                                                onPress={this.toggleModal}
                                                style={{backgroundColor:'#772325',alignItems:'center', justifyContent:'center', height:'50%',borderRadius:1000/2}}
                                                >
                                                <Image style={{width:'70%',height:'70%',resizeMode:'contain'}} source={require('CJC/images/close.png')} />        
                                                </TouchableOpacity>                              
                                            </View>
                                    </View>
                                    <View style={{height:'26%'}}>
                                        <Text style={{color:'#772325',fontFamily:'AnyConv.com__MyriadPro-Semibold',fontSize:18}}>20-10-2019</Text>
                                        <Text style={{marginTop:'2%',fontFamily:'AnyConv.com__MyriadPro-Regular',fontSize:14}}>Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night !</Text>
                                    </View>
                                    <View style={{height:'6%'}}>
                                        <Text style={{color:'#772325',fontFamily:'AnyConv.com__MyriadPro-Semibold',fontSize:18}}>Performing Artists</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:'15%',alignItems:'center',justifyContent:'space-between'}}>
                                            <View style={{width:'25%',alignItems:'center'}}>
                                                <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:width/2}} source={require('CJC/images/artist.png')} />
                                                <Text style={{fontFamily:'AnyConv.com__MyriadPro-Regular'}}>Artist 1</Text>
                                            </View>
                                            <View style={{width:'25%',alignItems:'center'}}>
                                                <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:width/2}} source={require('CJC/images/artist.png')} />
                                                <Text style={{fontFamily:'AnyConv.com__MyriadPro-Regular'}}>Artist 2</Text>
                                            </View>
                                            <View style={{width:'25%',alignItems:'center'}}>
                                                <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:width/2}} source={require('CJC/images/artist.png')} />
                                                <Text style={{fontFamily:'AnyConv.com__MyriadPro-Regular'}}>Artist 3</Text>
                                            </View>
                                    </View>
                                    <View style={{height:'8%',marginTop:'10%'}}>
                                            <Text style={{color:'#772325',fontFamily:'AnyConv.com__MyriadPro-Semibold',fontSize:22}}>Sorry, No reservations are available for this event.</Text>
                                    </View>
                                    <View style={{height:'20%'}}>
                                        <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={require('CJC/images/decoration1.png')} />
                                    </View>
                                </View>
                            </ImageBackground>
                    </View>
                    </Modal>
                </View>
            <TouchableOpacity  
                style={{height:Dimensions.get('window').height * 0.24}}
                onPress={this.toggleModal}
            > 
                    <View  style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('CJC/images/whitecircle.png')} 
                        style={{width:'100%',height:'100%',resizeMode:'contain',position:'relative',zIndex:9}}
                        />
                    <Image source={require('CJC/images/dateshape.png')} 
                        style={{width:'40%',height:'40%' ,top:'10%',left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
                        />
                    <Image source={require('CJC/images/dateshape.png')} 
                        style={{width:'38%',height:'38%' ,top:'9%',left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
                    />
                    <Text style={{ fontSize:22 ,top:'20%',left:Dimensions.get('window').width * 0.02,position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontFamily:'AnyConv.com__MyriadPro-Semibold',}}>14 FEB</Text> 
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
                style={{height:Dimensions.get('window').height * 0.24}}
                onPress={()=> {
                alert('Sorry no reservation available right now.')
                }} 
                > 
               <View  style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('CJC/images/whitecircle.png')} 
                        style={{width:'100%',height:'100%',resizeMode:'contain',position:'relative',zIndex:9}}
                        />
                    <Image source={require('CJC/images/dateshape.png')} 
                        style={{width:'40%',height:'40%' ,top:'10%',left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
                        />
                    <Image source={require('CJC/images/dateshape.png')} 
                        style={{width:'38%',height:'38%' ,top:'9%',left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
                    />
                    <Text style={{ fontSize:22 ,top:'20%',left:Dimensions.get('window').width * 0.02,position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontFamily:'AnyConv.com__MyriadPro-Semibold',}}>14 FEB</Text> 
                <Image
                source={{ uri: 'https://cairojazzclub.com\/wp-content\/uploads\/2019\/10\/Saturday-1-300x300.jpg' }}
                style={styles.eventphoto}
                />
            </View>
            </TouchableOpacity>
        </>
        )
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

    render() {
        return (
            <>
          <SafeAreaView>
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
                    <View style={styles.upc}>
                        <Text style={styles.upctxt}>Upcoming Events</Text>   
                    </View> 
            <View >
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={width}
                  itemWidth={Dimensions.get('window').width * 0.5}
                  renderItem={this.state.CJCpic ==  require('CJC/images/cjc.png') ? this._renderItem : this._renderItem2}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
          <View style={{position:'absolute', bottom:0}}>
                {this.footerdisplay()}   
            </View>
            </>
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

    event:{
        marginTop:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:Dimensions.get('window').height * 0.11,
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
    upc:{
        alignItems: 'center',
        height:Dimensions.get('window').height * 0.04,
        marginBottom:Dimensions.get('window').height * 0.02,
    },
    upctxt:{
        fontSize:22,
        color:'#c5c997',
        fontFamily: "Formal436BT",
    },   
    icnbtn:{
        marginRight:10,
    },
    item:{
        marginTop:'25%',
        alignItems: 'center',
    },
    popbtn:{
        width:30,
        height:30,
        borderRadius:30/2,
    },
    eventphoto:{
        width:(Dimensions.get('window').height * 0.24)*0.9,
        height:(Dimensions.get('window').height * 0.24)*0.9,
        borderRadius:((Dimensions.get('window').height * 0.28)*0.85)/2,
        position:'absolute',
        zIndex:101,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
  },
});





// import React , { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Modal from 'react-native-modal';



// import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,TouchableOpacity ,TouchableHighlight} from 'react-native';

// import { IconButton, Colors } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Nav from '../Navbar/Nav';
// import Carousel from 'react-native-snap-carousel';



// import bk from'CJC/images/newbgg.jpg';
// import logo from 'CJC/images/cairojazz.png';
// import face from 'CJC/images/face.jpg';
// import mainimg from 'CJC/images/miniback.png';
// import mainimage from 'CJC/images/mainimage.png';
// import bkcut from 'CJC/images/backgroundCUT.png';
// import pausebtn from 'CJC/images/buttonON.png';
// import Cjclogo from 'CJC/images/cjc.png';
// import off from 'CJC/images/610OFF.png';
// import Footer from '../Footer/footer';
// import Footertwo from '../Footer/footertwo';




// export default class Form extends Component  {

 
//     constructor(props){
//         super(props);
//         this.state = {
//                 isModalVisible: false,
                
//             CJCpic: require('CJC/images/cjc.png'),
//             ONOFFButton:require('CJC/images/buttonON.png'),
//             CJC610pic: require('CJC/images/610OFF.png'),
//           activeIndex:0,
//           carouselItems: [
//           {
//               title:"Item 1",
//               text: "Text 1",
//           },
//           {
//               title:"Item 2",
//               text: "Text 2",
//           },
//           {
//               title:"Item 3",
//               text: "Text 3",
//           },
//           {
//               title:"Item 4",
//               text: "Text 4",
//           },
//           {
//               title:"Item 5",
//               text: "Text 5",
//           },
//         ],
//         fontLoaded:false,
//       }
//     }
//   toggleModal = () => {
//     this.setState({isModalVisible: !this.state.isModalVisible});
//   };
   
//   async componentDidMount() {
//     await Font.loadAsync({
//       'FORMAL': require('CJC/android/app/src/main/assets/fonts/Formal436BT.ttf'),
     
      
//     });
    

//     this.setState({ fontLoaded: true });
//   }
    
    
//   Load_New_Image=()=>{
//       if (this.state.CJCpic ==  require('CJC/images/cjc.png')) {
//              this.setState({
//             CJCpic: require('CJC/images/cjc.png'),
//             ONOFFButton:require('CJC/images/buttonON.png'),
//             CJC610pic: require('CJC/images/610OFF.png'),
//             }) 
//       }else
//       {
//             this.setState({
//             CJCpic: require('CJC/images/cjc.png'),
//             ONOFFButton:require('CJC/images/buttonON.png'),
//             CJC610pic: require('CJC/images/610OFF.png'),
//             }) 
//       }
//   }
//     Load_New_Image2=()=>{
//       if (this.state.CJC610pic ==  require('CJC/images/610.png')) {
//              this.setState({
//             CJCpic: require('CJC/images/cjcOFF.png'),
//             ONOFFButton:require('CJC/images/buttonOFF.png'),
//             CJC610pic: require('CJC/images/610.png'),
//             }) 
//       }else
//       {
//             this.setState({
//             CJCpic: require('CJC/images/cjcOFF.png'),
//             ONOFFButton:require('CJC/images/buttonOFF.png'),
//             CJC610pic: require('CJC/images/610.png'),
//             }) 
//       }
//   }



//     _renderItem=({item,index})=>{
//         return (
//             <>  
//                 <View>
//                     <Modal isVisible={this.state.isModalVisible} backdropOpacity={0.3} backdropColor={'grey'}>
//                     <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
//                             <ImageBackground source={require('CJC/images/popup.png')} resizeMode='contain' style={{width:Dimensions.get('window').width * 0.9,height:Dimensions.get('window').height * 0.9,alignItems:'center'}}>
//                                 <View style={{width:'85%',height:'100%'}}>
//                                     <View style={{height:'6%',opacity:0}}>
//                                         <Text>1</Text>
//                                     </View>
//                                     <View style={{flexDirection:'row',height:'10%',alignItems:'center',justifyContent:'space-between'}}>
//                                             <View style={{width:'30%'}}>
//                                                 <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={require('CJC/images/cjc.png')} />
//                                             </View>
//                                             <View style={{width:'10%'}}>
//                                                 <TouchableOpacity
//                                                 onPress={this.toggleModal}
//                                                 style={{backgroundColor:'#772325',alignItems:'center', justifyContent:'center', height:'50%',borderRadius:1000/2}}
//                                                 >
//                                                 <Image style={{width:'70%',height:'70%',resizeMode:'contain'}} source={require('CJC/images/close.png')} />        
//                                                 </TouchableOpacity>                              
//                                             </View>
//                                     </View>
//                                     <View style={{height:'26%'}}>
//                                         <Text style={{color:'#772325',fontFamily:'AnyConv.com__MyriadPro-Semibold',fontSize:18}}>20-10-2019</Text>
//                                         <Text style={{marginTop:'2%',fontFamily:'AnyConv.com__MyriadPro-Regular',fontSize:14}}>Funky duo A-Squared return to our decks for onr of thier epic " Co." nights. Inviting diffrent talented DJs to share the decks with them each time, these nights always end up being filled with good vibes and great beats! Stay tuned to find out about thier partners in crime for the night !</Text>
//                                     </View>
//                                     <View style={{height:'6%'}}>
//                                         <Text style={{color:'#772325',fontFamily:'AnyConv.com__MyriadPro-Semibold',fontSize:18}}>Performing Artists</Text>
//                                     </View>
//                                     <View style={{flexDirection:'row',height:'15%',alignItems:'center',justifyContent:'space-between'}}>
//                                             <View style={{width:'25%',alignItems:'center'}}>
//                                                 <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:width/2}} source={require('CJC/images/artist.png')} />
//                                                 <Text style={{fontFamily:'AnyConv.com__MyriadPro-Regular'}}>Artist 1</Text>
//                                             </View>
//                                             <View style={{width:'25%',alignItems:'center'}}>
//                                                 <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:width/2}} source={require('CJC/images/artist.png')} />
//                                                 <Text style={{fontFamily:'AnyConv.com__MyriadPro-Regular'}}>Artist 2</Text>
//                                             </View>
//                                             <View style={{width:'25%',alignItems:'center'}}>
//                                                 <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:width/2}} source={require('CJC/images/artist.png')} />
//                                                 <Text style={{fontFamily:'AnyConv.com__MyriadPro-Regular'}}>Artist 3</Text>
//                                             </View>
//                                     </View>
//                                     <View style={{height:'8%',marginTop:'10%'}}>
//                                             <Text style={{color:'#772325',fontFamily:'AnyConv.com__MyriadPro-Semibold',fontSize:22}}>Sorry, No reservations are available for this event.</Text>
//                                     </View>
//                                     <View style={{height:'20%'}}>
//                                         <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={require('CJC/images/decoration1.png')} />
//                                     </View>
//                                 </View>
//                             </ImageBackground>
//                     </View>
//                     </Modal>
//                 </View>
//             <TouchableOpacity  
//                 style={{height:Dimensions.get('window').height * 0.28}}
//                 onPress={this.toggleModal}
//             > 
//                 {/* <View  style={{alignItems:'center', justifyContent:'center',height:Dimensions.get('window').height * 0.28,backgroundColor:'red'}}>
//                     <Image source={require('CJC/images/whitecircle.png')} 
//                         style={{width:Dimensions.get('window').width * 0.4,height:Dimensions.get('window').width * 0.4,bottom:'8%',resizeMode:'contain',position:'relative',zIndex:9}}
//                         />
//                     <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 ,bottom:Dimensions.get('window').width * 0.25,left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
//                         />
//                     <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 , marginTop: '0.1%' ,bottom:Dimensions.get('window').width * 0.26,left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
//                         />
//                     <Text style={{ fontSize:22 ,bottom:Dimensions.get('window').width * 0.33,left:Dimensions.get('window').width * 0.02,position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontFamily:'AnyConv.com__MyriadPro-Semibold',}}>14 FEB</Text> 
//                     <Image
//                     source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
//                     style={styles.eventphoto}
//                     />   
//                 </View> */}
//                     <View  style={{alignItems:'center', justifyContent:'center'}}>
//                     <Image source={require('CJC/images/whitecircle.png')} 
//                         style={{width:Dimensions.get('window').width * 0.4,height:Dimensions.get('window').width * 0.4,resizeMode:'contain',position:'relative',zIndex:9}}
//                         />
//                     <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 ,bottom:Dimensions.get('window').width * 0.17,left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
//                         />
//                         <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 ,bottom:Dimensions.get('window').width * 0.18,left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
//                         />
//                         <Text style={{ fontSize:22 ,bottom:Dimensions.get('window').width * 0.245,left:Dimensions.get('window').width * 0.02,position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontFamily:'AnyConv.com__MyriadPro-Semibold',}}>14 FEB</Text> 
//                         <Image
//                         source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
//                         style={styles.eventphoto}
//                         />
//                     {/* <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 , marginTop: '0.1%' ,bottom:Dimensions.get('window').width * 0.26,left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
//                         />
//                     <Text style={{ fontSize:22 ,bottom:Dimensions.get('window').width * 0.33,left:Dimensions.get('window').width * 0.02,position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontFamily:'AnyConv.com__MyriadPro-Semibold',}}>14 FEB</Text> 
//                     <Image
//                     source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
//                     style={styles.eventphoto}
//                     />    */}
//                 </View>
//             </TouchableOpacity>
//         </>
//         )
//     }
//     _renderItem2({item,index}){
//        return (
//            <>

//             <TouchableOpacity  
//                 style={{height:Dimensions.get('window').height * 0.28}}
//                 onPress={()=> {
//                 alert('Sorry no reservation available right now.')
//                 }} 
//                 > 
//               <View  style={{alignItems:'center', justifyContent:'center'}}>
//                     <Image source={require('CJC/images/whitecircle.png')} 
//                         style={{width:Dimensions.get('window').width * 0.4,height:Dimensions.get('window').width * 0.4,resizeMode:'contain',position:'relative',zIndex:9}}
//                         />
//                     <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 ,bottom:Dimensions.get('window').width * 0.17,left:'1%',resizeMode:'contain',position:'absolute',zIndex:101,tintColor:'white'}}
//                         />
//                         <Image source={require('CJC/images/dateshape.png')} 
//                         style={{width:Dimensions.get('window').width * 0.2,height:Dimensions.get('window').width * 0.2 ,bottom:Dimensions.get('window').width * 0.18,left:'2.5%',resizeMode:'contain',position:'absolute',zIndex:102,tintColor:'#ed7014'}}
//                         />
//                         <Text style={{ fontSize:22 ,bottom:Dimensions.get('window').width * 0.25,left:Dimensions.get('window').width * 0.02,position:'absolute',zIndex:102,tintColor:'#ed7014' ,color:'white',fontFamily:'AnyConv.com__MyriadPro-Semibold',}}>14 FEB</Text> 
//                         <Image
//                         source={{ uri: 'https://cairojazzclub.com//wp-content//uploads//2017//10//26-300x300.jpg' }}
//                         style={styles.eventphoto}
//                         />
//                 <Image
//                 source={{ uri: 'https://cairojazzclub.com\/wp-content\/uploads\/2019\/10\/Saturday-1-300x300.jpg' }}
//                 style={styles.eventphoto}
//                 />
//             </View>
//             </TouchableOpacity>
//         </>
//         )
//     }
//     footerdisplay(){
//         if(this.state.CJC610pic ==  require('CJC/images/610.png'))
//         {
//             return(
//                     <Footertwo />
//             )
//         }else
//         {
//             return(
//                     <Footer />
//             )
//         }
//     }

//     render() {
//         return (
//             <>
//           <SafeAreaView>
//                 <View style={styles.event}> 
//                             <TouchableOpacity onPress={this.Load_New_Image}>
//                                 <Image 
//                                 source={this.state.CJCpic}
//                                 style={styles.logobtn}
//                                 /> 
//                                 </TouchableOpacity>
//                                 <Image 
//                                 source={this.state.ONOFFButton}
//                                 style={styles.pausebtn}
//                                 />  
//                                 <TouchableOpacity onPress={this.Load_New_Image2}>
//                                 <Image 
//                                 source={this.state.CJC610pic}
//                                 style={styles.offbtn}
//                                 />          
//                             </TouchableOpacity>
             
//                 </View>
//                     <View style={styles.upc}>
//                         <Text style={styles.upctxt}>Upcoming Events</Text>   
//                     </View> 
//             <View >
//                 <Carousel
//                   layout={"default"}
//                   ref={ref => this.carousel = ref}
//                   data={this.state.carouselItems}
//                   sliderWidth={width}
//                   itemWidth={Dimensions.get('window').width * 0.5}
//                   renderItem={this.state.CJCpic ==  require('CJC/images/cjc.png') ? this._renderItem : this._renderItem2}
//                   onSnapToItem = { index => this.setState({activeIndex:index}) } />
//             </View>
//           </SafeAreaView>
//           <View style={{position:'absolute', bottom:0}}>
//                 {this.footerdisplay()}   
//             </View>
//             </>
//         );
//     }
// }
// const width = Dimensions.get('window').width;
// const styles = StyleSheet.create({
//     img:{
//         height: '100%',
//         width: '100%',
//         position: 'relative', 
//         top: 0,
//         left: 0,
//     },

//     event:{
//         marginTop:0,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height:Dimensions.get('window').height * 0.11,
//         // marginBottom:Dimensions.get('window').height * 0.35
//     },
//     logobtn:{
//         width:Dimensions.get('window').width * 0.2,
//         height:Dimensions.get('window').height * 0.035,
//     },
//     pausebtn:{
//         width:57,
//         height:22,
//         marginHorizontal:Dimensions.get('window').height * 0.04,
//     },
//     offbtn:{
//         width:Dimensions.get('window').width * 0.2,
//         height:Dimensions.get('window').height * 0.035,
//     },
//     upc:{
//         alignItems: 'center',
//         height:Dimensions.get('window').height * 0.04,
//         marginBottom:Dimensions.get('window').height * 0.02,
//     },
//     upctxt:{
//         fontSize:22,
//         color:'#c5c997',
//         fontFamily: "Formal436BT",
//     },   
//     icnbtn:{
//         marginRight:10,
//     },
//     item:{
//         marginTop:'25%',
//         alignItems: 'center',
//     },
//     popbtn:{
//         width:30,
//         height:30,
//         borderRadius:30/2,
//     },
//     eventphoto:{
//         width:Dimensions.get('window').width * 0.34,
//         height:Dimensions.get('window').width * 0.34,
//         borderRadius:1000/2,
//         position:'absolute',
//         zIndex:101,
//         alignItems: 'center',
//         justifyContent: 'center',
//         top:Dimensions.get('window').height * 0.017,
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 22
//   },
// });
