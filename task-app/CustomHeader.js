import React, {Component} from 'react';
import {
    Header,
    Left,
    Body,
    Button,
    Icon,
    Title,
    Right,
} from 'native-base';

class CustomHeader extends Component {
    render() {
        return (
            <Header style={{marginTop: 20}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Dashboard</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search'/>
                    </Button>
                    <Button transparent>
                        <Icon name='more'/>
                    </Button>
                </Right>

            </Header>
        );
    }
}

export default CustomHeader;
