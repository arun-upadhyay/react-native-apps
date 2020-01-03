import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Style from './Style';
import InputButton from "./InputButton";

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class CalculatorBar extends Component {
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <TextInput> Enter your Text</TextInput>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    };
    _renderInputButtons() {
        let views = [];
        for (let r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];
            let inputRow = [];
            for (let i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input} key={r + "-" + i} />
                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

};
