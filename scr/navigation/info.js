import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InfoApp } from "../screens";

const Stack = createNativeStackNavigator();

const InfoNavigation = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Info"
        >
            <Stack.Screen name="Info" component={InfoApp} />
        </Stack.Navigator>
    )
}

export default InfoNavigation;