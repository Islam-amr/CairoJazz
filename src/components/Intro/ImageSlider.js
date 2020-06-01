
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView , StyleSheet , ScrollView ,Dimensions, View , Text , StatusBar ,Button , ImageBackground , Image , ActivityIndicator } from 'react-native';
import logo from 'CJC/images/pref_loading.gif';

import Swiper from 'react-native-swiper';


export default class ImageSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            active:0,
        };
    }



    componentDidMount(){
        return fetch('https://cairojazzclub.com/wp-json/cjc/appslider/images')
            .then(  (response)=> response.json() )
            .then(  (responseJson)=> {
                this.setState({
                    isLoading:false,
                    dataSource: responseJson.slider_images,
                })
            })
        .catch((error)=>{
            console.log("error");
        });
    }

    change =({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({active:slide});
        }
    }

    
    render(){
        if (this.state.isLoading) {
            return(
                <View style={styles.loader}> 
                    <Image style={{width:Dimensions.get('window').width * 0.15,height:Dimensions.get('window').height * 0.15,resizeMode:'contain'}} source={require('CJC/images/pref_loading.gif')} />
                </View>
            );
        }else{
            let sliderimage = this.state.dataSource.map((slider_images,key)=>{
                return <View key={key} 
                        style={{width,height:height*0.6,alignItems: 'center',justifyContent: 'center',flexDirection:'row',marginBottom:0}}>
                            <Image 
                            style={styles.images}
                            source={{uri:slider_images}}
                            /> 
                        </View>
            });
            return(
                    <View style={{width:'100%',height:'65%'}}>
                        <Swiper
                        autoplay={true}
                        dot={<View style={styles.outerCircle}>
                            <View style={styles.innerCircle} />
                        </View>}
                        activeDot={<View style={styles.outerCircle}>
                            <View style={styles.innerActiveCircle} />
                         </View>}
                        >
                            {sliderimage}
                        </Swiper>
                    </View>
            );
        }
    }
}
const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    sliderview:{
        alignItems: 'center',
    },
    images:{
        width:'90%',
        height:'90%',
        resizeMode:'contain',
    },
    loader:{
        height:height*0.60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex:1,
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom:'5%',
    },
    outerCircle: {
        borderRadius: 50,
        width: 14,
        height: 14,
        backgroundColor: '#696971',
        marginHorizontal:7,
    },
    innerCircle: {
        borderRadius: 10,
        width: 9,
        height: 9,
        backgroundColor: 'white',
        overflow:'hidden',
        margin:2.5,
    },
    innerActiveCircle: {
        borderRadius: 10,
        width: 9,
        height: 9,
        margin:2.5,
        backgroundColor: '#fcb034',
        overflow:'hidden',
    },
});

