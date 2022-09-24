import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pantalla1, Pantalla2, Pantalla3} from "../screens"

const Stack = createNativeStackNavigator();

const ScreenNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={Pantalla1}/>
            <Stack.Screen name="Animales" component={Pantalla2}/>
            <Stack.Screen name="Informacion" component={Pantalla3}/>
        </Stack.Navigator>
    )
}

export default ScreenNavigator;