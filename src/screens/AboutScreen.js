import React from 'react';
import {StyleSheet, View, Text, Style} from 'react-native';

const AboutScreen = () => {

    return(
        
        <View style={styles.container}>
            <Text style={styles.Text}> As world’s technology is rapidly growing we has fast connection and network to instantly connect to other person. Day to day use in mobile, tablets and laptop is increasing, most of the people already have this facilities. In this fast and information oriented world we need to stay updated with every incidents and news too. This News app is android mobile application where user have access to latest news from some newspapers from some countries. The main focus of this application is to connect news articles from all around the world and deliver it to user as fast as possible in best visualize way.</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    Text:{
        fontSize: 20,
        marginTop: 20
    },
    container:{
        paddingHorizontal:10,
        paddingVertical: 15,
        flex:1,
        justifyContent:'flex-start',
        alignItems:'baseline'
        
        
        
        
        
    }
});

export default AboutScreen;
