import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductosNavigation from "./productos";
import CartNavigation from "./contCart";
import InfoNavigation from "./info";
import { Colors } from "../constants/color";

const BotomTab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <BotomTab.Navigator
            initialRouteName="ProductosNav"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    color: Colors.primary,
                    fontSize: 12,
                }
            }}
        >
            <BotomTab.Screen 
                name="ProductosNav" 
                component={ProductosNavigation} 
                options={{
                    title:"Productos",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                        name={focused ? "today" : "today-outline"}
                            size={22}
                        />
                    ),
                }}
                />
            <BotomTab.Screen 
                name="CartNav" 
                component={CartNavigation} 
                options={{
                    title: "Carrito",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "cart" : "cart-outline"}
                            size={22}
                        />
                    ),
                }}
            />
            <BotomTab.Screen 
                name="InfoNav" 
                component={InfoNavigation} 
                options={{
                    title: "Informacion",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "md-information-circle" : "md-information-circle-outline"}
                            size={22}
                        />
                    ),
                }}
            />
        </BotomTab.Navigator>
    )
}

export default Tabs;