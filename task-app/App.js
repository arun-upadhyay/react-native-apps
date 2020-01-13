import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import WelcomeScreen from "./WelcomeScreen";
import DashboardScreen from "./DashboardScreen";
import Settings from "./DashboardScreen";
import {createAppContainer} from "react-navigation";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ArtDesignIcon from "react-native-vector-icons/AntDesign";


const customDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{height: 120, backgroundColor: 'white', marginTop:30}}>
            <ArtDesignIcon name="user" size={100} height={100} color="grey"></ArtDesignIcon>
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
                drawerIcon: <MaterialIcon name="home" size={20} color="red"></MaterialIcon>


            }
        },
        DashBoardScreen: {
            screen: DashboardScreen,
            navigationOptions: {
                drawerLabel: "DashBoard",
                drawerIcon: <MaterialIcon name="view-dashboard" size={20} color="red"></MaterialIcon>
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                drawerLabel: "Settings",
                drawerIcon: <MaterialIcon name="settings" size={20} color="red"></MaterialIcon>
            }
        }
    }, {
        contentComponent: customDrawerComponent
    }
)

export default createAppContainer(AppDrawerNavigator);
