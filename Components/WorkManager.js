import React, { Component } from 'react';




import { Button,Text, View } from 'react-native';

class WorkManager extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Work Manager</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>

        );
    }
}
export default  WorkManager;