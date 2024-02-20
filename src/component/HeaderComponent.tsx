/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const HeaderComponent = () => {
    return (
        <View>
                <View style={styles.container}>
                <Image 
                style = {styles.cameraIcon}
                source = {require('../assets/camera.png')}
                />
                <Text style = {styles.instagramLogo}>Instagram</Text>
                <Image 
                style = {styles.messageIcon}
                source = {require('../assets/message.png')}
                />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    cameraIcon: {
        width : 40,
        height : 40,
        marginLeft: 10,
        marginTop: 10,
    },
    container: {
        flexDirection: 'row',
    },
    instagramLogo: {
        marginTop: 8,
        color: 'black',
        fontSize: 35,
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Cochin',
    },
    messageIcon: {
        width : 40,
        height : 40,
        marginEnd: 10,
        marginTop: 10,
    }
});

export default HeaderComponent;