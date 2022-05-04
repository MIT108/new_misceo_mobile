/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { Shadow } from 'react-native-shadow-2'
import DropShadow from 'react-native-drop-shadow'

const List = ({heading, items}) => {
    return (
        <View>
            <View style={{ borderBottomWidth: 2, borderColor: '#2450A6', padding: 5 }}>
                <Text style={{ color: '#2450A6', fontWeight: '700', fontSize: 30 }}>{ heading }</Text>
            </View>
            <View>
            
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {items.map((item, index) =>(
                        <Item item={item} key={index} />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
const Item = ({item}) => {
    return (
        <View>

            <Shadow
                distance={5}
                startColor={'#00000010'}
                containerViewStyle={{marginVertical: 30, marginHorizontal: 10}}
                radius={8}>
                <View style={[styles.container, styles.shadowProp]}>
                        
                    <View  style={{alignItems: 'center', justifyContent: 'center'}}>
                        
                        <Image source={{ uri: item.logo }} style={styles.story}/>
                        <Text style={{ color: '#2450A6', marginVertical: 10 }}>
                        { item.name }
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

export default List

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 10
    },
    story: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#2450A6'
    },
    button: {
        backgroundColor: 'black',
        maxWidth: 'auto',
        alignSelf: 'center',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    }

})
