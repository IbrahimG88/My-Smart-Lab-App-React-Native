import React, { Component } from 'react';
import { Container, Header, Text, Button, View, Fab  } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Icon from 'react-native-vector-icons/FontAwesome';




 class InventoryHome extends Component {
     constructor(props){
         super(props);
         this.state = {
             active: false
         };

             this.clicked = this.clicked.bind(this);
         }

     clicked(){
         console.log("I was clicked");
     };


     render() {

        return (
            <Container>
                <Header />
                <Grid>
                    <Col style={{ backgroundColor: '#635DB7', height: '100%', justifyContent: 'center', alignItems:'center' }}>
                   <Text  onPress={() => this.props.navigation.navigate('AllItems')} style={{color:'white', fontWeight:'bold'}} >All Items</Text>
                    </Col>

                    <Col>
                        <Row style={{ backgroundColor: '#ca63ce', height: '30%', justifyContent: 'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontWeight:'bold'}}>Reorder</Text>
                        </Row>
                        <Row style={{ backgroundColor: '#00DE9F', height: '70%',justifyContent: 'center', alignItems:'center' }}>
                            <Text style={{color:'white', fontWeight:'bold'}}>Orders</Text>
                        </Row>
                        <Row>
                            <View style={{ flex: 1 }}>
                                <Fab
                                    active={this.state.active}
                                    direction="left"
                                    containerStyle={{ }}
                                    style={{ backgroundColor: '#5067FF' }}
                                    position="bottomRight"
                                    onPress={() => this.setState({ active: !this.state.active })}>
                                    <Icon name="plus" />
                                        <Button  style={{ backgroundColor: '#5affda' }}>
                                        <Icon name="refresh"/>
                                    </Button>
                                    <Button style={{ backgroundColor: '#ffa634' }}
                                    onPress={() => this.props.navigation.navigate('RegisterItem')}>
                                        <Icon name="edit" />
                                    </Button>
                                </Fab>
                            </View>
                        </Row>
                    </Col>
                </Grid>
            </Container>

        );
    }
}

export default InventoryHome;



/*//import React, { Component } from 'react';




import { Button, Text, View } from 'react-native';

class Inventory extends React.Component {
    render() {
        return (
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Inventory</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <View>

                </View>
            </View>


        );
    }
}
export default  Inventory;
*/

