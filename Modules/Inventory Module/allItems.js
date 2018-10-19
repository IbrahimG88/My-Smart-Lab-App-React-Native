
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
            showAllItemsList: true
        };

        this.searchFunction = this.searchFunction.bind(this);
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

    render(){
        return(
                <Container>
                    <Header>
                        <Input type="search" placeholder="search for ..."
                               onChangeText={(text)=> {this.searchFunction(text)}} />

                    </Header>
                    <Content>
                        <List>
            {this.state.allItems.map((item)=>{
                if(this.state.showAllItemsList){
                return(
                            <ListItem>
                                <Text>{item}</Text>
                            </ListItem>)}
            })
            }

                </List>
                        <List>
                            {this.state.searchResults.map((item)=>{
                            if(this.state.showSearchedItems){
                                return(
                                <ListItem>
                                <Text>{item}</Text>
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