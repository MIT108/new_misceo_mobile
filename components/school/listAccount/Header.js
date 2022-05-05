/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import List from './List'
import { Shadow } from 'react-native-shadow-2'
import DropShadow from 'react-native-drop-shadow'

const teacherData = [
    {
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },
]

const studentData = [
    {
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: 'https://th.bing.com/th/id/R.ab7c2f3b54525122074b71ea38efe1d9?rik=HmlTphckX6YEag&riu=http%3a%2f%2fwww.journeestic.com%2fwp-content%2fuploads%2f2018%2f07%2fLogo-IAI-Vectoriel.png&ehk=c89Fv298V9yEOPgtAjJuBpP0nw2%2fLuJhvshmyK%2fsK%2fk%3d&risl=&pid=ImgRaw&r=0',
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },
]

const Header = () => {
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
                <Pressable style={styles.button}>
                    <Text style={{ color: "white" }}>SIGN OUT</Text>
                </Pressable>
            </View>
        </View>
        <View>
            <List heading={"Teacher."} items={teacherData}/>
        </View>
        <View>
            <List heading={"Student."} items={studentData}/>
        </View>
        
        <View style={{ justifyContent: "flex-end", flexDirection: 'row'}}>
            <Pressable style={styles.button}>
                <Text style={{ color: "white" }}>Proceed to Social</Text>
            </Pressable>
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