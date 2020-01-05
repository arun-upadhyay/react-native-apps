import React, {Component} from "react";
import {View, TextInput, Button, Text, TouchableHighlight} from "react-native";
import Style from "./Style";
import InputButton from "./InputButton";

const inputButtons = [
    ["C", "Back", "%", "/"],
    [1, 2, 3, "+"],
    [4, 5, 6, "*"],
    [7, 8, 9, "-"],
    ["+/-", "0", ".", "="]
];

export default class CalculatorBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null,
            inputValue2: null
        }
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue2}</Text>
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

        let concatValue = this.state.inputValue == null ? input : this.state.inputValue.concat(input);
        concatValue = concatValue.toString();
        if (!isNaN(concatValue)) {
            this.setState({
                inputValue: concatValue,
                inputValue2: null
            })
        } else {
            this.setState({
                inputValue: concatValue,
                inputValue2: eval(concatValue).toString()
            })
        }

    }

    _handleStringInput(str) {
        switch (str) {
            case 'Back':
                let currentValue = this.state.inputValue;
                currentValue = currentValue.substr(0, currentValue.length - 1);
                 this.setState({
                    inputValue: currentValue
                })
                break;
            case 'C':
                this.setState({
                    inputValue: null,
                    inputValue2: null,
                })
                break;
            case "=":
                currentValue = this.state.inputValue2;
                this.setState({
                    inputValue: currentValue,
                    inputValue2: null,
                })
                break;
            default:
                this.setState({
                    inputValue2: null,
                    inputValue: this.state.inputValue.concat(str)
                })

        }
    }
}
