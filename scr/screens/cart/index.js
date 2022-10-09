import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Cart = () =>{

    const data = useSelector((state) => state.PromosReducers.selected);

    return(
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.textNombre}>{data.nombre}</Text>
                <Text style={styles.textPrecio}>$ {data.precio}</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textNombre}>{data.nombre}</Text>
                <Text style={styles.textPrecio}>$ {data.precio}</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textNombre}>{data.nombre}</Text>
                <Text style={styles.textPrecio}>$ {data.precio}</Text>
            </View>
        </View>
    )
}

export default Cart;