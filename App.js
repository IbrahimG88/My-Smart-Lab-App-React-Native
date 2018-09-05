

import React, { Component } from 'react';

import { Text, View } from 'react-native';


import DetailsScreen from "./Components/DetailsScreen";

import HomeScreen from "./Components/HomeScreen";

import  SettingsScreen from "./Components/SettingScreen";

import Inventory from "./Components/Inventory";

import SolveAProblem from "./Components/SolveAProblem";

import WorkManager from "./Components/WorkManager";


import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';


const App = () => (

    <Text>We are done ;D</Text>

);

const InventoryStack = createStackNavigator({
    InventoryModule: Inventory,
    Details: DetailsScreen
});

const WorkManagerStack = createStackNavigator({
    WorkManagerModule: WorkManager,
    Details: DetailsScreen
});

const SolveAProblemStack = createStackNavigator({
    SolveAProblemModule: SolveAProblem,
    Details: DetailsScreen
});

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Inventory: InventoryStack,
        Manager: WorkManagerStack,
        Solver: SolveAProblemStack,
        Settings: SettingsStack
    }
);