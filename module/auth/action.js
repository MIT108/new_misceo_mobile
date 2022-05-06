/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable semi */

// import axiosInstance from './../../helper/axiosInstance'
// import {
//     getUserData,
//     setUserData,
//     setUserToken,
// } from './../../helper/UserStorage'
// import {
//     URL
// } from '@env'
// import { Alert } from 'react-native';


// export async function loginAction(userData) {
//     let returns = [];
    
//     try {
        
//         const response = await axiosInstance.post(
//             URL + 'user/login',
//             userData
//         );
//         console.log("user is ok");
//         // if(!!response.data.error){
//         //     returns = {
//         //         'error': response.data.error,
//         //         'message': response.data.message
//         //     }
//         // }else{
//         //     returns = {
//         //         'user': response.data.data,
//         //         'message': response.data.message
//         //     }
//         //     setUserData(response.data)
//         // }

//     } catch (error) {
//         console.log(error);
//         if (error.response.status == 500) {
//             returns = {
//                 'error': "connect to the internet",
//                 'message': "connect to the internet",
//                 'status': error.response.status
//             }
//             console.log('====================================');
//             console.log(returns);
//             console.log('====================================');
//         } else {
//             if (error.response.status == 403) {
//                 console.log(error.response.data.data.user);
//                 setUserData(error.response.data.data.user)
//             }
//             returns = {
//                 'error': error.response.data.message,
//                 'message': error.response.data.message,
//                 'status': error.response.status
//             }

//         }
//     }

//     return returns
// }


// export async function sendOTPAction(email) {
//     let returns

    
//     try {
//         const response = await axiosInstance.post(
//             URL + 'send-otp',
//             email
//         );
        
//         returns = {
//             'message': response.data.message,
//             'status': response.status
//         }

//     } catch (error) {
//         returns = {
//             'message': error.response.data.message,
//             'status': error.response.status
//         }
//     }

//     console.log('====================================');
//     console.log(returns);
//     console.log('====================================');
//     return returns
// }


// export async function sendOTPCode(OTPData) {
//     let returns
    
//     try {
//         const response = await axiosInstance.post(
//             URL + 'verify-otp',
//             OTPData
//         );
        
//         returns = {
//             'message': response.data.message,
//             'status': response.status
//         }
//         console.log(response.data.data.token)
//         console.log(response.data.data.user)
//         // setUserToken()

//     } catch (error) {
//         returns = {
//             'message': error.response.data.message,
//             'status': error.response.status
//         }
//         console.log('====================================');
//         console.log(returns);
//         console.log('====================================');
//     }


//     return returns
// }

import axiosInstance from './../../helper/axiosInstance'
import React, { createContext, useState } from "react";
import {
    getUserData,
    setUserData,
    setUserToken,
} from './../../helper/UserStorage'
import {
    URL
} from '@env'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})
    const [authToken, setAuthToken] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    async function onLogin(userData){
        let returns = []
        setIsLoading(true)
        await axiosInstance.post(
            URL + "user/login",
            userData
        ).then((response) => {
            let userInfo = response.data
            console.log(userInfo);
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            if (error.response.status == 500) {
                returns = {
                    'error': "connect to the internet",
                    'message': "connect to the internet",
                    'status': error.response.status
                }
            } else if (error.response.status == 0) {

                returns = {
                    'error': "connect to the internet",
                    'message': "connect to the internet",
                    'status': error.response.status
                }
            }else {
                if (error.response.status == 403) {
                    setUserInfo(error.response.data.data.user)
                    setUserData(error.response.data.data.user)
                    returns = {
                        'error': error.response.data.message,
                        'message': error.response.data.message,
                        'status': error.response.status
                    }
                }else{
                    returns = {
                        'error': error.response.data.message,
                        'message': error.response.data.message,
                        'status': error.response.status
                    }

                }

            }

        })

        return returns
    }

    return(
        <AuthContext.Provider value={{ onLogin, isLoading, userInfo }}>{children}</AuthContext.Provider>
    )
}