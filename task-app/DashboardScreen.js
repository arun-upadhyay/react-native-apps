import React, {Component} from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Content,
    Button,
    Icon,
    Title,
    Input,
    Right,
    Item,
    Text,
    Textarea,
    Form
} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {AppLoading} from 'expo';

export default class DashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }
        return (
            <Container>
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
                <Content padder>
                    <Form>
                        <Item>
                            <Button primary transparent><Text> Save </Text></Button>
                        </Item>
                        <Item>
                            <Text> Uncategorized </Text>
                        </Item>
                        <Item>
                            <Input placeholder="Title"/>
                        </Item>
                        <Textarea rowSpan={10} colSpan={50} placeholder="   Notes"/>
                    </Form>
                </Content>

            </Container>
        );
    }
}
