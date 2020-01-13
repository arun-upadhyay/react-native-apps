import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import WelcomeScreen from "./WelcomeScreen";
import DashboardScreen from "./DashboardScreen";
import Settings from "./DashboardScreen";
import {createAppContainer} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const customDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{height: 150, backgroundColor: 'white'}}>
            <Image source={require('./assets/mobile-app.png')}
                   style={{
                       height: 80, width: 120, borderRadius: 60
                   }}/>
        </View>
        <ScrollView>

            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({
        WelcomeScreen: {
            screen: WelcomeScreen,
            navigationOptions: {
                drawerLabel: "Home",
                drawerIcon: <Icon name="home" size={20} color="blue"></Icon>


            }
        },
        DashBoardScreen: {
            screen: DashboardScreen,
            navigationOptions: {
                drawerLabel: "DashBoard",
                drawerIcon: <Icon name="view-dashboard" size={20} color="blue"></Icon>
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                drawerLabel: "Settings",
                drawerIcon: <Icon name="settings" size={20} color="blue"></Icon>
            }
        }
    }, {
        contentComponent: customDrawerComponent
    }
)

export default createAppContainer(AppDrawerNavigator);
