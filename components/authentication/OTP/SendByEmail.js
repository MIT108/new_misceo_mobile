/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import React ,{useState} from 'react'
import { Divider } from 'react-native-elements'
import { getUserData } from '../../../helper/UserStorage'
import { sendOTPAction } from './../../../module/auth/action'





const SendByEmail = ({navigation}) => {
    const [email,setEmail] = useState(null)

    const [isLoading,setIsLoading] = useState(true)


    getUserData().then((response)=>{
        setEmail(response.email)
        console.log(response);
    })
    

  return (
        //   <>
        //     {
        //         email != null ?
                <View>
                    <Banner />
                    <View style={{ paddingHorizontal: 30 }}>
                        <Heading />
                        <TextMessage email={email} />
                        <SendMessage />
                        
                        <View style={{ marginTop: 30 }}>
                            
                            <Pressable
                                titleSize={20}
                                style={styles.button(isLoading)}
                                disabled={!isLoading}
                                onPress={()=>{
                                        setIsLoading(false)
                                    
                                    const  userData = {
                                        email: email,
                                    }

                                    sendOTPAction(userData).then((response) => {
                                        setIsLoading(true)
                                        if(response.status == 422){
                                            Alert.alert(response.message)
                                        }else if(response.status == 200){
                                            navigation.push("OTPScreen")
                                        }
                                    })
                                }}
                            >

                            {
                                isLoading ? 
                                <View>
                                    <Text style={styles.buttonText}>Send</Text>
                                </View>
                                :
                                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                    <Text style={styles.buttonText}>Loading...</Text>
                                    <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-loading-user-interface-tanah-basah-glyph-tanah-basah.png' }} />
                                </View>
                            }
                                
                            </Pressable>
                        </View>
                    </View>
                </View>
                // :
                // null
        //     }

        //   </>
  )
}

const Banner = () =>{
    return(
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 40, marginRight: 10 }}>
            <Image source={require('../../../assets/images/OTPBanner.png')} style={styles.banner}/>
        </View>
    )
}
const Heading = () =>(
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 40, marginRight: 10 }}>
        <Text style={styles.heading}>Send Through Email</Text>
    </View>
)
const TextMessage = ({email}) =>(
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 40, marginRight: 10 }}>
        <Text style={styles.textMessage}>An email containing the OTP code will be send to the email : <Text style={{ color: '#07338C' }}>{ email }</Text> </Text>
    </View>
)

const SendMessage = () => (
    <View style={{ width: '100%', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20, marginRight: 10, flexDirection: 'row'}}>
        <Divider width={1} orientation="vertical" />
        <View>
            <Text style={styles.SendMessage}>Didn't receive code ?</Text>
        </View>
        <Divider width={1} orientation="vertical" />
    </View>
)


export default SendByEmail

const styles = StyleSheet.create({
    banner:{
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    heading: {
        color: '#07338C',
        fontWeight: 'bold',
        fontSize: 30,
        width: 250,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMessage: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SendMessage: {
        color: 'gray',
        fontSize: 13,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: (isLoading) => ({
        backgroundColor: isLoading ? '#07338C' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 6,
        height: 50,
    }),

    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
    },
    
    icon: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})