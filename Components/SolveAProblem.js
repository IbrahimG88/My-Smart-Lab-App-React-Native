import React, { Component } from 'react';




import { Button, Text, View } from 'react-native';

class SolveAProblem extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Solve a problem!</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />

            </View>
        );
    }
}
export default  SolveAProblem;