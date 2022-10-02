import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, DetailCart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigation = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Cart"
        >
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="DetailCart" component={DetailCart} />
        </Stack.Navigator>
    )
}

export default CartNavigation;