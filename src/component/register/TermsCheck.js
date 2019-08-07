import React, {useState, useEffect} from 'react';
import {View,  Image, StyleSheet,Text} from 'react-native';

import {Button, CheckCircle} from '../common';


export default CheckView = (props) => {
    const { style, title, titleStyle, setValue, onChange, onPressBracket=null} = props;
    const [isChecked, setIsChecked] = useState(false);

    useEffect(()=>{ 
        setIsChecked(setValue);
    }, [setValue])

    const _onPress =()=> {
        onChange(!isChecked);
        setIsChecked(c=>!c);
    }

    
    return(
        <View style={[style, styles.container]}>
        <CheckCircle style={styles.check} value = {isChecked} onPress = {_onPress}/>
            <Text style={[titleStyle, styles.title]}>{title}</Text>
            {onPressBracket!==null && 
                <Button onPress={onPressBracket}>
                    <Image style={styles.bracket} source={{uri:"icon_rsquare_bracket"}}></Image>
                </Button>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    title : {
        flex : 1,
        marginLeft : 11.5,
    },
    bracket : {
        width : 8.9,
        height : 15,
    },
});