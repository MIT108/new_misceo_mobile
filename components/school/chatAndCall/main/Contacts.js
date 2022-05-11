/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export const CONTACTS = [{
    user: 'miendjemThierry',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'ndaboseDaniel',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=1'
}, {
    user: 'ndounePeet',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'nsiniFranc',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'maxLilian',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}, {
    user: 'tasseJunior',
    image: 'https://th.bing.com/th/id/R.db7827258231458c939da703b369945d?rik=nweCXbDbtFjM8Q&pid=ImgRaw&r=0'
}]

const Contacts = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
        <View>
            <Top />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
                <AddContact />
            </TouchableOpacity>
            <View>
                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    {CONTACTS.map((contact, index) =>(
                        <Contact key={index} contact={contact} />
                    ))}
                </ScrollView>
            </View>
        </View>
    </View>
  )
}

const Top = () => (
    <View style={styles.top}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black'}}>Contacts</Text>
        <Text style={{ color: 'gray'}}>See all</Text>
    </View>
)


const AddContact = () => (
    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.addContact}>
        <Icon
            name="add"
            color="white"
            size={50}
            />

        </View>
        <Text style={{ color: 'black' }}>Add Contact</Text>
    </View>
)

const Contact = ({contact}) => (
    <TouchableOpacity style={styles.contacts}>
        <Image source={{ uri: contact.image }} style={styles.contactImage}/>
        <Text style={{ color: 'black' }}>{
            contact.user.length > 9 ? contact.user.slice(0, 7).toLocaleLowerCase()+'...' : contact.user.toLocaleLowerCase()
        }</Text>
    </TouchableOpacity>
)

export default Contacts

const styles = StyleSheet.create({
    top:{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    addContact: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#07338C",
        justifyContent: 'center',
        alignItems: 'center',
    },
    contacts:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    contactImage:{
        width: 70,
        height: 70,
        borderRadius: 50,
        resizeMode: 'contain',
    }

})