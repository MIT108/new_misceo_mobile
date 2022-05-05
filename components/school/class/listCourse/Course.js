/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'

const Course = () => {
  return (
    <View style={{ width: "100%" , borderWidth: 1}}>

        <Shadow
            distance={5}
            startColor={'#00000010'}
            containerViewStyle={{marginVertical: 30, marginHorizontal: 10}}
            radius={8}>
            <View style={[styles.container, styles.shadowProp]}>
                    
                <View  style={{alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Image source={ require('../../../../assets/Icons/filter.png') } style={styles.story}/>
                    <Text style={{ color: '#2450A6', marginVertical: 10 }}>
                    fadfsfasdf
                    </Text>
                    <View>
                        <Pressable style={styles.button}>
                            <Text style={{ color: "white" }}>Learn More</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Shadow>
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
    
    container: {
        width: "100%",
    },
})