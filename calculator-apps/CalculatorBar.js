import React, {Component} from "react";
import {View, TextInput, Button, Text, TouchableHighlight} from "react-native";
import Style from "./Style";
import _ from 'lodash'
import InputButton from "./InputButton";


const inputButtons = [
    ["C", "Back", "%", "/"],
    [1, 2, 3, "+"],
    [4, 5, 6, "*"],
    [7, 8, 9, "-"],
    ["+/-", 0, ".", "="]
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
                    <Text style={Style.displayTextSecond}>{this.state.inputValue2}</Text>
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
        try {
            switch (typeof input) {
                case 'number':
                    return this._handleNumberInput(input)
                case 'string':
                    return this._handleStringInput(input)
            }
        } catch (e) {

        }
    }

    _handleNumberInput(input) {

        let concatValue = this.state.inputValue == null ? input : this.state.inputValue.concat(input);
        !isNaN(concatValue) ? this._resetState(concatValue.toString(), null)
            : this._resetState(concatValue, this._calculateExpression(concatValue));
    }

    _calculateExpression(expression) {
        let calcResult = eval(expression);
        if (!_.isInteger(calcResult)) {
            calcResult = _.floor(calcResult, 5);
        }
        return calcResult.toString();
    }

    _resetState(value = null, value2 = null) {
        this.setState({
            inputValue: value,
            inputValue2: value2
        });
    }

    _handleStringInput(str) {
        switch (str) {
            case 'Back':
                let currentValue = this.state.inputValue;
                if (_.isNull(currentValue) || currentValue.length === 0 || currentValue.length === 1) {
                    this._resetState();
                    break;
                }
                let characterBeforeCurrentValue = currentValue.charAt(currentValue.length - 2);
                currentValue = currentValue.substr(0, currentValue.length - 1);
                (isNaN(currentValue) && !isNaN(characterBeforeCurrentValue)) ?
                    this._resetState(currentValue, this._calculateExpression(currentValue)) :
                    this._resetState(currentValue, null);
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
            case ".":
                currentValue = this.state.inputValue;
                if (_.isNull(currentValue) || currentValue.length == 0) {
                    str = "0" + str;
                    this._resetState(str, this.state.inputValue2);
                    break;
                }
                let characterAtEnd = currentValue.charAt(currentValue.length - 1);
                if (isNaN(characterAtEnd) && characterAtEnd !== '.') {
                    // allow . immediately after operator
                    str = "0" + str
                    this._resetState(currentValue.concat(str), this.state.inputValue2);
                    break;
                }
                // check for multiple dot on number
                let dotFound = true;
                for (let end = currentValue.length; end >= 0; end--) {
                    let val = currentValue.charAt(end);
                    if (val === '.') {
                        // dot already added.
                        dotFound = false;
                        break;
                    }
                    if (isNaN(val)) {
                        // got an operator
                        break;
                    }
                }
                if (dotFound == true) {
                    this._resetState(currentValue.concat(str), this.state.inputValue2);
                }
                break;
            case "+/-":
                break;
            default:
                currentValue = this.state.inputValue;
                if (_.isNull(currentValue) || currentValue.length == 0) {
                    break;
                }
                characterAtEnd = currentValue.charAt(currentValue.length - 1);
                if (characterAtEnd.toString() !== str) {
                    if (isNaN(characterAtEnd)) {
                        // replace old symbol with new one
                        currentValue = currentValue.substr(0, currentValue.length - 1);
                    }
                    // don't add same symbol twice
                    this._resetState(currentValue.concat(str), null);
                }
        }
    }
}
