/* eslint-disable prettier/prettier */
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Search = () => {
  return (
        <View style={styles.wrapper}>
            <View style={styles.searchWrapper}>
                <TextInput
                    placeholderTextColor="#444"
                    placeholder="Search"
                    fontSize={17}
                    textColor="black"
                    fontWeight="bold"
                    style={styles.textInput}
                />
                <TouchableOpacity
                onPress={()=>{
                    Alert.alert("searching...")
                }}
                >
                <Icon
                    name="search"
                    color="#07338C"
                    size={35}
                    />

                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Search

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    searchWrapper: {
        width: "100%",
        backgroundColor: 'white' ,     
        zIndex: 10000,
        borderRadius: 15,
        elevation: 5, 
        shadow: true, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textInput:{
        flex: 1,
        color: 'black',
    }
})