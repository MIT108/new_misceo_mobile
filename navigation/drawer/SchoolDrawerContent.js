/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable eol-last */
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import profileImage from '../../assets/images/defaultProfile.jpg'

export function DrawerContent(props) {

    const [isEnglish, setIsEnglish] = React.useState(true)

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish)
    }

    return (
        <View style={{ flex: 1, color: 'white'}}>
            <DrawerContentScrollView  {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                            <Avatar.Image
                                source={profileImage}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Miendjem Thierry</Title>
                                <Caption style={styles.caption}>@miendjemthierry</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Home"
                            onPress={()=>{props.navigation.navigate("Post")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Profile"
                            onPress={()=>{}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Bookmarks"
                            onPress={()=>{}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Support"
                            onPress={()=>{}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Language">
                        <TouchableRipple onPress={()=>{toggleLanguage()}}>
                            <View style={styles.preference}>
                                <Text>
                                    English
                                </Text>
                                <View pointerEvents="none">
                                    <Switch value={isEnglish} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                            />
                    )}
                    label="Sign Out"
                    onPress={()=>{Alert.alert("signed out")}}
                    />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#F4F4F4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})