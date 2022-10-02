import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Selection, FibraOptica, Portabilidad, DetailFibra } from "../screens";
import { Colors } from "../constants/color";


const Stack = createNativeStackNavigator();

const ProductosNavigation = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Seleccion"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontSize: 26,
                }
            }}
        >
            <Stack.Screen 
                name="Seleccion" 
                component={Selection}
                options={{
                    title: "Movistar",
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen 
                name="FibraOptica" 
                component={FibraOptica}
                options={{
                    title: "Fibra Optica",
                    headerTitleAlign: "center",
                }}
            
            />
            <Stack.Screen 
                name="Portabilidad" 
                component={Portabilidad}
                options={{
                    title: "caca"
                }}
            
            />
            <Stack.Screen 
                name="DetalleFibra" 
                component={DetailFibra}
                options= {({ route }) => ({
                    title: route.params.nombre,
                })}
            
            />
        </Stack.Navigator>
    )
}

export default ProductosNavigation;