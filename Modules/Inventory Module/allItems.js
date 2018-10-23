
import React, { Component } from 'react';
import {AsyncStorage} from "react-native";



import { Container, Header, Content, List, ListItem, Text, Input, Button } from 'native-base';


class AllItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [],
            searchResults:[],
            showSearchedItems: true,
            showAllItemsList: true,
            editActive: false
        };

        this.searchFunction = this.searchFunction.bind(this);
        this.editActivating =   this.editActivating.bind(this);
        this.editText= this.editText.bind(this);
      // this.searchToggle =  this.searchToggle.bind(this);

        //note that  this.allItemsList = this.state.allItems
    }

    componentDidMount() {
        let allItemsList = [];
        AsyncStorage.getItem('item').then((value) => {
            const restoredArray = JSON.parse(value);
            allItemsList.push(value);
            this.setState({'allItems': restoredArray });

        });

    }


    searchFunction (event) {
        this.setState({showAllItemsList: false,
        searchResults: []
        });

        const searchInput = event.toUpperCase();

        const searchResults = [];

        this.state.allItems.map((item)=>{
            if(item.toUpperCase().indexOf(searchInput)> -1){
                searchResults.push(item);
                this.setState({searchResults: searchResults});
            }
        })
    }

    editActivating(){
        this.setState({editActive:!this.state.editActive});
        console.log(this.state.editActive);
    }

    editText(text, index){
        let allItemsCopy = [...this.state.allItems];
        allItemsCopy[index] = text;
        this.setState({allItems: allItemsCopy});
    }

    render(){
        const editActive = this.state.editActive;
        return(
                <Container>
                    <Header>
                        <Input type="search" placeholder="search for ..."
                               onChangeText={(text)=> {this.searchFunction(text)}} />

                    </Header>
                    <Content>
                        <List>
            {this.state.allItems.map((item, index)=>{
                if(this.state.showAllItemsList){
                return(
                            <ListItem>
                                <Text>{item}</Text>
                                <Button onPress={this.editActivating}><Text>Edit</Text></Button>
                                {editActive ?
                                    (<Input value={item} onChangeText={(text)=>{this.editText(text,index)}}/>) :
                                null}
                            </ListItem>)}
            })
            }

                </List>
                        <List>
                            {this.state.searchResults.map((item,index)=>{
                            if(this.state.showSearchedItems){
                                return(
                                <ListItem>
                                <Text>{item}</Text>
                                    <Button onPress={this.editActivating}><Text>Edit</Text></Button>
                                    <Input value={item} onChangeText={(text)=>{this.editText(text,index)}}
                                    />
                                    {}
                                </ListItem>
                                )
                            }})}
                        </List>
                    </Content>
                </Container>


        )
    }
}
export default AllItems;