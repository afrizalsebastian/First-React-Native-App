import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style = {styles.background}
            source={require('../assets/background.jpg')}>

            <View
                style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style = {styles.logo}/>
                <Text>Sell What You Don't Need</Text>
            </View>
            <View 
                style = {styles.loginButton}>
            </View>
            <View 
                style = {styles.registerButton}>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    logoContainer :{
        position : 'absolute',
        top : 60,
        alignItems : 'center'
    },

    logo : {
        height :100,
        width : 100,
    },
    loginButton :{
        width : '100%',
        height : 70,
        backgroundColor : colors.primary,
        
    },
    registerButton : {
        width : '100%',
        height : 70,
        backgroundColor : colors.secondary,
    },
    
})

export default WelcomeScreen;