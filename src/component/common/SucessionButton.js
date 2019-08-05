import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import * as Utill from '../../utill'
import {Button, Text} from '../common';


const SuccesionButton = (props) => {
    const {title, source, style} = props;

    return (
        <Button style={[style, styles.container]} onPress={props.onPress}>
            <View style = {styles.iconArea}>
                <Image
                    resizeMode={'contain'}
                    style = {styles.icon}
                    source={source}
                />
            </View>
            <View>
                <Text style = {styles.text}>
                    {title}
                </Text>
            </View>
        </Button>
    )

}

export default SuccesionButton; 

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        
    },
    iconArea : {

    },
    icon : {
        width : 18,
        height : 16,
        margin : 15,
        
    },
    text : {
        fontSize : 16,
        color : Utill.color.textBlack,
    }
})