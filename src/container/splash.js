import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import * as API from '../utill/API';
import { updateLocation } from '../store/modules/maps';

export default (props) => {
    let latitude;
    let longitude;
    const _getPosition = async () => {
            await navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            dispatch(updateLocation({ latitude, longitude }));
        });
    }
    const _me = async () => {
        let token = await API.getLocal(API.LOCALKEY_TOKEN);
        const meRes = await API.me(token);
        console.log(meRes);
        if (token === null) {
            navigation.navigate('Terms');
        } else {
            navigation.navigate('Login');
        }
    }
    const { navigation } = props;
    const dispatch = useDispatch();

    _getPosition();
    useEffect(() => {
        setTimeout(() => {
            _me();
        }, 1000)
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}> 디쉬나우 스플래시 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})