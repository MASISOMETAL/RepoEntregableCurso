import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ScreenNavigator from "./misPantallas";

const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <ScreenNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;