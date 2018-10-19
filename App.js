

import React, { Component } from 'react';

import { Text, View } from 'react-native';


import DetailsScreen from "./Components/DetailsScreen";

import HomeScreen from "./Components/HomeScreen";

import  SettingsScreen from "./Components/SettingScreen";

import InventoryMain from "./Modules/Inventory Module/InventoryMain";
import InventoryHome from "./Modules/Inventory Module/InventoryHome";

import SolveAProblem from "./Components/SolveAProblem";

import WorkManager from "./Components/WorkManager";

import RegisterItem from "./Modules/Inventory Module/registerItem";


import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import AllItems from "./Modules/Inventory Module/allItems";



const App = () => (

    <Text>We are done ;D</Text>

);

const InventoryStack = createStackNavigator({
    InventoryHome: InventoryHome,
    InventoryModule: InventoryMain,
    Details: DetailsScreen,
    RegisterItem: RegisterItem,
    AllItems: AllItems

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