import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { render } from 'react-dom';
export default class CalculatorBar extends Component
{

    render(){
        return (
            <View>
              
              

              <TextInput placeholder="Enter your text here.." ></TextInput>


            </View>
        );
    };
};