/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import List from './List'
import IAIImage from '../../../assets/images/defaultIAI.png'
import { logOut } from '../../../module/auth/action'

const teacherData = [
    {
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },
]

const studentData = [
    {
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },
]

const Header = ({navigation}) => {
  return (
    <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
                <Image style={{ width: 30, height: 30 }} source={require('../../../assets/Icons/align-left.png')} />
            </View>
            <View>
                <Image style={{ width: 60, height: 60 }} source={require("../../../assets/images/logo.png")} />
            </View>
            <View>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        logOut().then((response)=>{
                            console.log(response);
                            if(response.status == 200){
                                navigation.push("LoginScreen")
                            }else{
                                Alert.alert(response.message)
                            }
                        })
                    }}
                >
                    <Text style={{ color: "white" }}>SIGN OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <List heading={"Teacher."} items={teacherData}/>
        </View>
        <View>
            <List heading={"Student."} items={studentData}/>
        </View>
        
        <View style={{ justifyContent: "flex-end", flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button}
            onPress={()=>{
                navigation.push("ListCourseScreen")
            }}
            >
                <Text style={{ color: "white" }}>Proceed</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2450A6',
        maxWidth: 'auto',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5
    }
})