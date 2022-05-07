/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View, ImageBackground, Image , TouchableOpacity } from 'react-native'
import React from 'react'
import MyBG from "../../assets/images/background.jpeg"
import arrow from "../../assets/Icons/arrowLeft.png"
import logo from "../../assets/images/logo.png"
const SplashScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <ImageBackground source={MyBG} resizeMode="cover" style={{width:"100%", height:"100%"}}>
        <Image source={logo} style={{width:80, height:80, alignSelf:"flex-end", margin:8}}/>
        <View style={styles.Titleplace}> 
          <Text style={styles.Title} >Getting Started</Text>
          <Text style={styles.Message}>Lorem, ipsum dolor sit. Velit deserunt sit, nulla odio maiores enim sapiente nisi tene </Text>
        </View>

        <TouchableOpacity style={{ left:"80%", top:"5%", alignSelf:"flex-end", height:"100%",width:"100%"}} onPress = {()=>navigation.navigate("SchoolDrawer")}>
          <Image source={arrow} style={{ width:60, height:60,}}/>
        </TouchableOpacity>
      </ImageBackground>
    
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Title:{
    fontSize:30,
   fontWeight:"bold",
    color:"black",
    position:"absolute",
    top:"80%",
    left:"2%"

  },
  Titleplace:{
    justifyContent:"flex-end",
    flexDirection:"column",
    height:"70%",
    width:"60%",
    marginLeft:"5%"
    
  },
Message:{
  fontSize:15,
    color:"black",
    position:"absolute",
    top:"90%",
    left:"2%",
    textAlign:"justify"
}
 
  
})