import React from 'react';
import CalculatorBar from './CalculatorBar';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Button, View, Text, Image, StyleSheet} from 'react-native';


import Icon from 'react-native-vector-icons'
import Settings from "./Settings";
import About from "./About";


class App extends React.Component {
    render() {
        return (
            <CalculatorBar></CalculatorBar>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
        'Home': {
            screen: App, navigationOptions: {
                tabBarLabel: 'Home',
                navigationOptions: {
                    tabBarLabel: "Home",
                    tabBarIcon: ({tintColor}) => (
                        <Image
                            source={require("./assets/icons-home.png")}
                            style={{width: 25, height: 25}}
                        />
                    )
                }
            }
        },
        'Settings': {
            screen: Settings, navigationOptions: {
                tabBarLabel: 'Settings'
            }
        },
        'About': {
            screen: About, navigationOptions: {
                tabBarLabel: 'About'
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#e91e63",
            showIcon: true,
            showLabel: true,
            labelStyle: {
                fontSize: 16
            },
            style: {}
        },
        navigationOptions: {
            activeTintColor: "red",
            animationEnabled: true
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});
export default createAppContainer(TabNavigator);


