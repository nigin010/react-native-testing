import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import InstagramUI from "../screens/InstagramUI";
import DummyScreen from "../screens/DummyScreen";
import { Image } from "react-native";
const StackNav = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function HomeStackNavigation() {
    return(
        <StackNav.Navigator>
            <StackNav.Screen
                name = "LoginScreen"
                component = {Login}
                options = {{
                    headerShown : false,
                }}
            />
            <StackNav.Screen
                name = "LandingBottomNav"
                component = {BottomStackNavigation}
                options = {{
                    headerShown : false
                }}
            />
        </StackNav.Navigator>
        

    );
}

const BottomStackNavigation = () => {
    return (
        <BottomNav.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor : 'red',
        }}>
            <BottomNav.Screen 
                name = 'Home'
                component={InstagramUI}
                options={{
                    tabBarLabel: 'Trainee',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={'violet'} size={26} />
                    ),
                  }}
                
            />
            <BottomNav.Screen
                name = 'DummyPage'
                component = {DummyScreen}
                options={{
                    tabBarLabel: 'Batches',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account-multiple" color={'violet'} size={26} />
                    ),
                  }}
            />
        </BottomNav.Navigator>
    );   
}