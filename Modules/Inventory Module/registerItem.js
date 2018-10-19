import React, { Component } from 'react';
import { AsyncStorage } from "react-native";

import { Text, View, TextInput } from 'react-native';
import { Button, Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class RegisterItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            item: "",
            allItems: [],
            text:""
        };



       // this.handleChange = this.handleChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.getSavedItems = this.getSavedItems.bind(this);
       // this.setName = this.setName.bind(this);
    }

        componentDidMount () {
             AsyncStorage.getItem('item').then((value) =>{
                const restoredArray = JSON.parse(value);
                 this.setState({ 'item': restoredArray });
        });
        }






    // setName = (value) => {
        //we took value from the state, we didn't take it from the input

  //  };

    saveData () {


        console.log("hii");
        const allItemsArray = AsyncStorage.getItem('item').then((value) => {
            const restoredArray = JSON.parse(value);
            this.setState({'item': restoredArray});
        });

        const modifiedArray = this.state.item;

        modifiedArray.push(this.state.text);

        const stringifiedArray = JSON.stringify(modifiedArray);
        this.setState({"allItems": modifiedArray});
        AsyncStorage.setItem('item', stringifiedArray);

    }




    getSavedItems () {
                console.log("hiii 2");

                console.log(this.state.item);
            }





            render() {
                return (
                    <Container>
                        <Header>
                            <Text>
                            Register an item

                            </Text>
                        </Header>
                        <Content>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Username</Label>
                                    <Input
                                      //  onChangeText={this.setName}

                                        value={this.state.text}
                                        onChangeText={(text) => this.setState({text})}
                                    />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                                <Button primary full style={{marginLeft: 5, marginRight: 5, borderRadius: 5}}
                                        onPress={this.saveData}>
                                    <Text style={{color: '#ffffff'}}>
                                        Save

                                    </Text>
                                </Button>
                                <Button primary full style={{marginLeft: 5, marginRight: 5, borderRadius: 5}}
                                        onPress={this.getSavedItems}>
                                    <Text style={{color: '#ffffff'}}>
                                     Retrieve saved items

                                    </Text>
                                </Button>
                                <Text>  {this.state.text}</Text>
                            </Form>
                        </Content>
                    </Container>
                );
            }
}

export default RegisterItem;

                /*Input === TextInput*/