import React from 'react';
import CalculatorBar from './CalculatorBar';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View} from "react-native";


class App extends React.Component {
    render() {
        return (

                <CalculatorBar></CalculatorBar>


        )
    }
}

const AppNavigator = createStackNavigator({
    'Home': {
        screen: App
    },
});

export default createAppContainer(AppNavigator);


