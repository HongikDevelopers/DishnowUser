import { createStackNavigator } from 'react-navigation';

import TabMy from '../container/My/tabMy'
import Review from '../container/My/myreview'
import Point from '../container/My/point'
import webView from '../container/webView'
import Profile from '../container/My/profile_manage'
import Client from '../container/My/client_center'
import Notice from '../container/My/notice'
import * as Color from '../utill/color'
const myStack = createStackNavigator(
    {
        navigationOptions: ({ navigation }) => ({
                title : '제목',
                headerStyle: {
                    backgroundColor: Color.red,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        TabMy : { 
            screen : TabMy,
            navigationOptions: ({ navigation }) => ({
                header: null,
            }),
        },
        Profile : {
            screen : Profile,
            navigationOptions: ({ navigation }) => ({
                 title : '프로필 관리',
            }),
        },
        webView : { 
            screen : webView,
            navigationOptions: ({ navigation }) => ({
                title : '이용약관',
            }),
        },
        Client : { 
            screen : Client,  
            navigationOptions: ({ navigation }) => ({
                title : '고객센터',
            }),
        },
        Notice : {
            screen : Notice,
            navigationOptions: ({ navigation }) => ({
                title : '공지사항',
            }),
        },
        Review : {
            screen : Review,
            navigationOptions: ({ navigation }) => ({
                title : '나의 리뷰',
            }),
        },
        Point : {
            screen : Point,
            navigationOptions: ({ navigation }) => ({
                title : '디나 포인트',
            }),
        },
    },
    {
        initialRouteName : 'TabMy',
    }
)

export default myStack; 
//프로필관리
//디나포인트 나의리뷰
//공지사항
//이용약관
//고객센터
//푸쉬알람
//로그아웃