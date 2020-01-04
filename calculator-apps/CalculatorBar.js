import React, {Component} from "react";
import {View, TextInput, Button, Text, TouchableHighlight} from "react-native";
import Style from "./Style";
import InputButton from "./InputButton";

const inputButtons = [
    ["C", "CE", "%", "/"],
    [1, 2, 3, "+"],
    [4, 5, 6, "*"],
    [7, 8, 9, "-"],
    ["+/-", "0", ".", "="]
];

export default class CalculatorBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }

    _renderInputButtons() {
        let views = [];
        for (let r = 0; r < inputButtons.length; r++) {
            let row = inputButtons[r];
            let inputRow = [];
            for (let i = 0; i < row.length; i++) {
                let input = row[i];
                inputRow.push(<InputButton
                    value={input}
                    onPress={this._onInputButtonPressed.bind(this, input)}
                    value={input} key={r + "-" + i}/>);
            }
            views.push(
                <View style={Style.inputRow} key={"row-" + r}>
                    {inputRow}
                </View>
            );
        }
        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(input) {
        this.setState({
            inputValue: this.state.inputValue * 10 + input
        })
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
        }
    }
}
