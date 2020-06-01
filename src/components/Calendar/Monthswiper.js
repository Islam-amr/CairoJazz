import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-2,
   

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
    fontSize: 30,
   
  },


})



export default class Monthswiper extends Component {

    constructor() {
        super();
        this.state = {
          index: 0,
          dataSource:null,
          data1:null,
          data2:null,
          data3:null,
          data4:null,
          data5:null,
          data6:null,
          data7:null,
          data8:null,
          data9:null,

          mymonth:"FEBRUARY",

            month:"156111585",
            data1:"january",
            defaultlink:"https://cairojazzclub.com/wp-json/cjc/calendar/events_2/upcoming/",
            notavailable:"no events availavle",
            date:null,
          

        };
      }
      componentDidMount(){
           let   month = new Date().getMonth() + 1;
         

         if(month === 1){
          
          this.setState({
            
            date: "JANUARY",
            
            
    
          })
        
         }
         else if(month === 2){
          this.setState({
            
            date: "FEBRUARY",
            
            
    
          })
    
          
         }
         else if(month === 3){
        
          this.setState({
            
            date: "MARCH",
            
            
    
          })
         }
         else if(month === 4){
         
          this.setState({
            
            date: "APRIL",
            
            
    
          })
         }
         else if(month === 5){
          
          this.setState({
            
            date: "MAY",
            
            
    
          })
         }
         else if(month === 6){
       
          this.setState({
            
            date: "JUNE",
            
            
    
          })
         }
         else if(month === 7){
         
          this.setState({
            
            date: "JULY",
            
            
    
          })
         }
         else if(month === 8){
          
          this.setState({
            
            date: "AUGUST",
            
            
    
          })
         }
         else if(month === 9){
         
          this.setState({
            
            date: "SEPTEMBER",
            
            
    
          })
         }
         else if(month === 10){
          
          this.setState({
            
            date: "OCTOBER",
            
            
    
          })
         }
         else if(month === 11){
         
          this.setState({
            
            date: "NOVEMBER",
            
            
    
          })
         }
         else if(month === 12){
          
          this.setState({
            
            date: "DECEMBER",
            
            
    
          })
         }

        
         
         

      };
    
      


    
      
  render() {
    Swiper.prototype.componentWillUpdate = (nextProps, nextState) => {
        
        if(nextState.index === this.state.index)
        {
           
        }
        else if(nextState.index!=this.state.index){
            this.state.index = nextState.index
             
        
        }
    }
    return (
        
      <View style={{height:35,width:250,marginTop:10,marginBottom:0}}>
      <Swiper nextButton={<View style={{zIndex:100,right:'10%'}}>
        <TouchableOpacity>
        <Image source={require('CJC/images/monthbutton2.png')} style={{height:26,width:23,}} />
        </TouchableOpacity>
      </View>}
      prevButton={<View style={{zIndex:100}}>
      <TouchableOpacity>
      <Image source={require('CJC/images/monthbutton1.png')} style={{height:26,width:23,}} />
      </TouchableOpacity>
      </View>}
      style={styles.wrapper} showsButtons={true} dot={<View style={{opacity:0}}/>}
      activeDot={<View style={{opacity:0}} />}>
        <View style={styles.slide1}>
          <Text style={styles.text}>{this.state.date}</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>June</Text>
        </View>
        
        
       

      </Swiper>
      </View>
    )
  }
}

