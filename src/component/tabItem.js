import React from 'react';
import { View, Text, Image, StyleSheet }from 'react-native';

import * as Utill from '../utill'
import Images from '../assets/images'
const TabItem = ({label, tintColor, source, navigation }) => {
    console.log(source.uri);
    return (
        <View style={styles.container}>
            <View>
                <Image
                    resizeMode = 'contain'
                    style={styles.icon}
                    source={Images.images[source.uri]}
                />    
            </View>
            <View>
                <Text 
                    style={{color:tintColor}}>
                    {label}
                </Text>
            </View>
        </View>
    )
} 

export default TabItem;

const styles = StyleSheet.create({
    container : {
        paddingTop : 8,
        alignItems : 'center',
        height : Utill.screen.bottomTabHeight,
    },
    icon : {
        width : 20,
        height : 20,
        marginBottom : 6,
    },
    label : {
        textAlign : 'center',
        fontSize : 16,
    }
})