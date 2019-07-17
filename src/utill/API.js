import * as fetch from './fetch'
import AsyncStorage from '@react-native-community/async-storage';

export const apiUrl = 'http://54.180.6.107:8001/api/user/'; 

export const LOCALKEY_TOKEN = 'LOC_STORE_KEY_TOKEN'

export const getLocal =  async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log(`get # ${key} : ${value}`);
        return value;
    } catch(e) {
        console.log(e);
    }
}

export const setLocal = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch(e) {
        console.log(e);
    }
}



export const getPostList = (token, option) => {
    const url = `${apiUrl}post/${option.type}/${option.order}/${option.page}`;
    return fetch.getAuthServer(url, token)
    .then(res => res.json())
    .then(res => ({data: res})) // res 을 data 로
    .catch(error => ({error})); 
}

export const uploadPhoto = (token, images) => {
    const url = `${apiUrl}upload`;
    return fetch.postAuthMultipartServer(url, token, images)
    .then(res => res.json())
    .then(res => ({data: res.location})) // res 을 data 로
    .catch(error => ({error})); 
}

export const uploadPost = (token, data) => {
    const url = `${apiUrl}post/post`;
    return fetch.postAuthServer(url, token, data)
    .then(res => {
        if(res) return {success : true}
    })
    .catch(error => ({error})); 
}


export const register = (data) => {
    const url = `${apiUrl}user/register`;
    return fetch.postServer(url, data)
    .then(res => res.json())
    .catch(error => ({error})); 
}

export const login = (data) => {
    const url = `${apiUrl}user/login`;
    return fetch.postServer(url, data)
    .then(res => res.json())
    .catch(error => ({error})); 
}

export const me = (token) => {
    const url =`${apiUrl}user/me`;
    return fetch.getAuthServer(url, token)
    .then(res => res.json())
    .catch(error => ({error}));   
}


