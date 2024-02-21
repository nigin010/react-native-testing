import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import InstagramUI from "../screens/InstagramUI";

const StackNav = createNativeStackNavigator();

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
                name = "LandingPage"
                component = {InstagramUI}
                options = {{
                    headerShown : false
                }}
            />
        </StackNav.Navigator>
    );
}
