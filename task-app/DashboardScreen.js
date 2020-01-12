import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';


export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
            <Header>
                    <Left><Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/></Left>
                </Header>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Dashboard</Text>
                </View>

            </View>
        );
    }
};
