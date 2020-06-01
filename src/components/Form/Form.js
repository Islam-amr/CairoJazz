
import React , { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { CheckBox, SafeAreaView , StyleSheet , TextInput ,Dimensions, ScrollView , Picker , View , Text , StatusBar ,Button , ImageBackground , Image ,TouchableOpacity,Linking } from 'react-native';
import DatePicker from 'react-native-datepicker'


import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';



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
        this.state = {date:"2016-05-15"}
        this.state = {
          fontLoaded: false,
          Phone:'',
          Address:'',
          Email:'',
          Age:'',
          FBaccount:'',
          date:'',
          isLoading:true,
          dataSource:[],
          checked: [],
           check:false,
    check1:false,
    check2:false,
    check3:false,
    check4:false,
    check5:false,
    check6:false,
    check7:false,
    check8:false,
    check9:false,
    check10:false,
    check11:false,
    check12:false,
    check13:false,
    check14:false,
    check15:false,
    check15:false,
    check17:false,
    check18:false,
    check19:false,
    check20:false,
    check21:false,
    check22:false,
    check23:false,
    check24:false,
    check25:false,
    check26:false,
    check27:false,
    check28:false,
    check29:false,
    check30:false,
    check31:false,
    check32:false,
    check33:false,
    check34:false,
    check35:false,
    check36:false,
    check37:false,
    check38:false,
    check39:false,
    check41:false,
    check42:false,

    checkedboxes:"",

        }
    }

      async componentDidMount() {
    await Font.loadAsync({
      'FORMAL': require('CJC/android/app/src/main/assets/fonts/Formal436BT.ttf'),
      'MyriadPro-Regular': require('CJC/android/app/src/main/assets/fonts/AnyConv.com__MyriadPro-Regular.ttf'),
     
      
    });
    

    this.setState({ fontLoaded: true });
  }

    CheckBoxTest()
    {

    this.setState({
      check:!this.state.check
    })
  console.log(this.state.checked)
  }
  CheckBoxTest1()
  {
    this.setState({
      check1:!this.state.check1

    })
  }

  CheckBoxTest2()
  {
    this.setState({
      check2:!this.state.check2
    })
  }
  CheckBoxTest3()
  {
    this.setState({
      check3:!this.state.check3
    })
  }
  CheckBoxTest4()
  {
    this.setState({
      check4:!this.state.check4
    })
  }
  CheckBoxTest5()
  {
    this.setState({
      check5:!this.state.check5
    })
  }
  CheckBoxTest6()
  {
    this.setState({
      check6:!this.state.check6
    })
  }
  CheckBoxTest7()
  {
    this.setState({
      check7:!this.state.check7
    })
  }
  CheckBoxTest8()
  {
    this.setState({
      check8:!this.state.check8
    })
  }

  CheckBoxTest9()
  {
    this.setState({
      check9:!this.state.check9
    })
  }
  CheckBoxTest10()
  {
    this.setState({
      check10:!this.state.check10
    })
  }
  CheckBoxTest11()
  {
    this.setState({
      check11:!this.state.check11
    })
  }
  CheckBoxTest12()
  {
    this.setState({
      check12:!this.state.check12
    })
  }
  CheckBoxTest13()
  {
    this.setState({
      check13:!this.state.check13
    })
  }
  CheckBoxTest14()
  {
    this.setState({
      check14:!this.state.check14
    })
  }
  CheckBoxTest15()
  {
    this.setState({
      check15:!this.state.check15
    })
  }
  CheckBoxTest16()
  {
    this.setState({
      check16:!this.state.check16
    })
  }
  CheckBoxTest17()
  {
    this.setState({
      check17:!this.state.check17
    })
  }
  CheckBoxTest18()
  {
    this.setState({
      check18:!this.state.check18
    })
  }
  CheckBoxTest19()
  {
    this.setState({
      check19:!this.state.check19
    })
  }
  CheckBoxTest20()
  {
    this.setState({
      check20:!this.state.check20
    })
  }
  CheckBoxTest21()
  {
    this.setState({
      check21:!this.state.check21
    })
  }
  CheckBoxTest22()
  {
    this.setState({
      check22:!this.state.check22
    })
  }
  CheckBoxTest23()
  {
    this.setState({
      check23:!this.state.check23
    })
  }
  CheckBoxTest24()
  {
    this.setState({
      check24:!this.state.check24
    })
  }
  CheckBoxTest25()
  {
    this.setState({
      check25:!this.state.check25
    })
  }
  CheckBoxTest26()
  {
    this.setState({
      check26:!this.state.check26
    })
  }
  CheckBoxTest27()
  {
    this.setState({
      check27:!this.state.check27
    })
  }
  CheckBoxTest28()
  {
    this.setState({
      check28:!this.state.check28
    })
  }
  CheckBoxTest29()
  {
    this.setState({
      check29:!this.state.check29
    })
  }
  CheckBoxTest30()
  {
    this.setState({
      check30:!this.state.check30
    })
  }
  CheckBoxTest31()
  {
    this.setState({
      check31:!this.state.check31
    })
  }
  CheckBoxTest32()
  {
    this.setState({
      check32:!this.state.check32
    })
  }
  CheckBoxTest33()
  {
    this.setState({
      check33:!this.state.check33
    })
  }
  CheckBoxTest34()
  {
    this.setState({
      check34:!this.state.check34
    })
  }
  CheckBoxTest35()
  {
    this.setState({
      check35:!this.state.check35
    })
  }
  CheckBoxTest36()
  {
    this.setState({
      check36:!this.state.check36
    })
  }
  CheckBoxTest37()
  {
    this.setState({
      check37:!this.state.check37
    })
  }

  CheckBoxTest38()
  {
    this.setState({
      check38:!this.state.check38
    })
  }
  CheckBoxTest39()
  {
    this.setState({
      check39:!this.state.check39
    })
  }
  CheckBoxTest40()
  {
    this.setState({
      check40:!this.state.check40
    })
  }
    CheckBoxTest41()
  {
    this.setState({
      check41:!this.state.check41
    })
  }

       handleEmail = (text) => {
        this.setState({ Email: text })
     }
     handlePhone = (text) => {
        this.setState({ Phone: text })
     }
   handleAddress = (text) => {
    
    this.setState({ Address: text })
  }
      handleDate = (text) => {
      (date) => {this.setState({date: date})}
      this.setState({ date: text })
   }
      handleFBaccount = (text) => {
        this.setState({ FBaccount: text })
     }

     validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          this.setState({ Email: text })
          return false;
        }
        else {
          this.setState({ Email: text })
          console.log("Email is Correct");
        }
    }


    mobilevalidate = (text) => {
    const reg = /^0\d{10,10}$/;
    if (reg.test(text) === false) {
          this.setState({ Phone: text })
          console.log("Phone is incorrect");
          return false;
    }
    else {
          this.setState({ Phone: text })
          console.log("Phone is Correct");
          return true;
    }
  }

    sumbit= ()=>{
      if(this.validate(this.state.Email) === false || this.mobilevalidate(this.state.Phone) === false || this.state.Address===""||this.state.FBaccount === "" || !this.state.check40 && !this.state.check41 || this.state.date==="" ){
        alert("Please check the missing fields")
      }else{
        this.props.navigation.navigate("Main")
      }
    }


    componentDidMount(){
        return fetch('https://cairojazzclub.com/wp-json/fbr/users/missing-data/2866949966694553')
            .then(  (response)=> response.json() )
            .then(  (responseJson)=> {
                this.setState({
                    isLoading:false,
                    dataSource:responseJson,
                })
            })
        .catch((error)=>{
            console.log("error");
        });
    }

    render() {
        return (
        <>
        <StatusBar  barStyle="light-content" />
        <SafeAreaView style={styles.Main}>
          <ImageBackground source={require('CJC/images/finalbeto.jpg')} resizeMode='cover' style={styles.backgroundimage}>
          <View style={{alignItems: 'center',height:Dimensions.get('window').height * 0.124}}>
            <Image    
            source={require('CJC/images/cairojazz.png')}
            style={{
                  height:Dimensions.get('window').height * 0.13,
                  width:Dimensions.get('window').width * 0.16 ,
                  resizeMode:'contain'
                  }}
            />
          </View>
          <ScrollView>

          <View style={{alignItems: 'center',marginTop:'4%',}}>
            <Text style={{fontSize:24,color:'#c8d7a4',fontFamily:'Formal436BT',}}>Additional information</Text>
          </View>
          <View style={{alignItems: 'center',marginTop:10,}}>
             <TextInput style = {styles.input2}
               underlineColorAndroid = "transparent"
               placeholder = "Type your Email"
               placeholderTextColor = "#24454a"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
              <TextInput style = {styles.input2}
               underlineColorAndroid = "transparent"
               placeholder = "Type your Phone Number"
               keyboardType="number-pad"
               placeholderTextColor = "#24454a"
               autoCapitalize = "none"
               onChangeText = {this.handlePhone}/>
                <TextInput style = {styles.input2}
               underlineColorAndroid = "transparent"
               placeholder = "Type your Address"
               placeholderTextColor = "#24454a"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress}/>
                <TextInput style = {styles.input2}
               underlineColorAndroid = "transparent"
               placeholder = "Type your Facebook Account"
               placeholderTextColor = "#24454a"
               autoCapitalize = "none"
               onChangeText = {this.handleFBaccount}/>
               <DatePicker
                style = {styles.input2}
                date={this.state.date}
                mode="date"

                placeholder="Date of Birth"
                
                format="YYYY-MM-DD"
                minDate="1960-01-01"
                maxDate="2020-04-02"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    marginLeft: 0,
                    opacity:1,
              
                  },
                  dateInput: {
                    marginLeft: 0,
                    color:"#24454a",
                    borderWidth:0,
                    fontFamily:'AnyConv.com__MyriadPro-Regular',

                    
                    
                  },
                  dateText:{
                    color:"white",
                    fontFamily:'AnyConv.com__MyriadPro-Regular',
                    fontSize:16,
                    width:'100%'


                  },
                  placeholderText:{
                    color:"#24454a",
                    fontFamily:'AnyConv.com__MyriadPro-Regular',
                    fontSize:16,
                    position:'relative',
                    width:'100%'
                  }
                

                }}
                onDateChange={this.handleDate}
              />
          </View>
          <View style={{alignItems:'center'}}>  
            <Text style={{fontSize:24, color: '#c8d7a4',margin:'3%',marginTop:'10%',fontFamily:'Formal436BT'}}>Venue of interest </Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',margin:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check40}
                onChange={()=>this.CheckBoxTest40()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>CJC</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check41}
                onChange={()=>this.CheckBoxTest41()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',

                }}>610</Text>                 

              </View>
            </View>
          <View style={{alignItems:'center'}}>  
            <Text style={{fontSize:22, color: '#c8d7a4',fontFamily:'Formal436BT',margin:'3%'}}>Choose Your Genre </Text>
          </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center',}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check1}
                onChange={()=>this.CheckBoxTest1()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>90's House</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check2}
                onChange={()=>this.CheckBoxTest2()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>African</Text>                 

              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check3}
                onChange={()=>this.CheckBoxTest3()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Alternative</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check4}
                onChange={()=>this.CheckBoxTest4()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Ambient</Text>                 

              </View>
            </View>
                        <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check5}
                onChange={()=>this.CheckBoxTest5()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Arabic</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check6}
                onChange={()=>this.CheckBoxTest6()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Blues</Text>                 

              </View>
            </View>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check7}
                onChange={()=>this.CheckBoxTest7()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Classic Rock</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check8}
                onChange={()=>this.CheckBoxTest8()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Contemporary</Text>                 

              </View>
            </View>
                          <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check9}
                onChange={()=>this.CheckBoxTest9()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Deep House</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check10}
                onChange={()=>this.CheckBoxTest10()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Disco</Text>                 

              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check11}
                onChange={()=>this.CheckBoxTest11()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'Formal436BT'
                }}>Electro</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check12}
                onChange={()=>this.CheckBoxTest12()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Electro Shaabi</Text>                 

              </View>
            </View>
                        <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check13}
                onChange={()=>this.CheckBoxTest13()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Electronic</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check14}
                onChange={()=>this.CheckBoxTest14()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Experimental</Text>                 

              </View>
            </View>
                                    <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check15}
                onChange={()=>this.CheckBoxTest15()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Folk</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check16}
                onChange={()=>this.CheckBoxTest16()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Funk</Text>                 

              </View>
            </View>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check17}
                onChange={()=>this.CheckBoxTest17()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Funk / Disco</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check18}
                onChange={()=>this.CheckBoxTest18()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Fusion</Text>                 

              </View>
            </View>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check19}
                onChange={()=>this.CheckBoxTest19()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Gypsy Jazz</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check20}
                onChange={()=>this.CheckBoxTest20()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>House</Text>                 

              </View>
            </View>
                            <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check19}
                onChange={()=>this.CheckBoxTest19()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Indie</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check22}
                onChange={()=>this.CheckBoxTest22()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Jazz</Text>                 

              </View>
            </View>
                                        <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check23}
                onChange={()=>this.CheckBoxTest23()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Latin Jazz</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check24}
                onChange={()=>this.CheckBoxTest24()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Mahraganat</Text>                 

              </View>
            </View>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check25}
                onChange={()=>this.CheckBoxTest25()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Nu Disco</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check26}
                onChange={()=>this.CheckBoxTest26()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Pop</Text>                 

              </View>
            </View>
                  <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check27}
                onChange={()=>this.CheckBoxTest27()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Post-rock</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check28}
                onChange={()=>this.CheckBoxTest28()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Progressive</Text>                 

              </View>
            </View>
                              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check29}
                onChange={()=>this.CheckBoxTest29()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Rai</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check30}
                onChange={()=>this.CheckBoxTest30()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Reggae</Text>                 

              </View>
            </View>
                                          <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check31}
                onChange={()=>this.CheckBoxTest31()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>RnB/Hip Hop</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check32}
                onChange={()=>this.CheckBoxTest32()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Rock</Text>                 

              </View>
            </View>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check33}
                onChange={()=>this.CheckBoxTest33()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Rock n' Roll</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check34}
                onChange={()=>this.CheckBoxTest34()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Rockabilly</Text>                 

              </View>
            </View>
                          <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check35}
                onChange={()=>this.CheckBoxTest35()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Ska</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check36}
                onChange={()=>this.CheckBoxTest36()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Soul</Text>                 

              </View>
            </View>
                                      <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>
              <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop:'1%',width:Dimensions.get('window').width * 0.85}} >
              <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check37}
                onChange={()=>this.CheckBoxTest37()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Tech House</Text>  
                <CheckBox style={{
          
                height: 40,
                borderColor: '#fff',
                width:35,

                }}
                center
                title='610'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                value={this.state.check38}
                onChange={()=>this.CheckBoxTest38()}
                tintColors={{true: '#FCB034', false: '#F2EAD8'}}/>
                <Text style={{
                fontSize: 16,
                width:135,
                color: '#F2EAD8',
                fontFamily:'AnyConv.com__MyriadPro-Regular',
                }}>Techno</Text>                 

              </View>
            </View>
            <View style={{alignItems:'center' , marginTop:20,marginBottom:20,}}>
            <TouchableOpacity
                onPress={()=> {
                this.sumbit();
                }}>
              <Image 
              source={require('CJC/images/botton.png')}
              style={{width:120,height:50}}
              />
              <View style={{position:'absolute',width:120,height:50,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'#2f4e56',fontFamily:'AnyConv.com__MyriadPro-Regular',}}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
            </View>
            </ScrollView>

          </ImageBackground>
        </SafeAreaView>
        </>
        );
    }
}


const styles = StyleSheet.create({
    backgroundimage:{
      height: '100%',
      width: '100%',
      position:'relative'
    },
    input2: {
      fontFamily:'AnyConv.com__MyriadPro-Regular',
      backgroundColor:'#557476',
      width:'82.5%',
      height:40,
      paddingLeft:20,
      fontSize:16,
      color:'white',
      zIndex:200,
      marginTop:'2.5%',
   },
  });



