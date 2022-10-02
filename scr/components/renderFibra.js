import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from "../constants/color";

const { height, width} = Dimensions.get("window");

const RenderFibra = ({item, navigation, route}) =>{

    return(
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate("DetalleFibra",{nombre: item.nombre, data: item.id})}
            //onPress={() => console.warn(height)}
        >
            <View style={styles.containerText}>
                <Text style={styles.TextNombre}>{item.nombre}</Text>
                <Text style={styles.TextDescrip}>{item.descripcion}</Text>
                <Text style={styles.TextPrecio}>$ {item.precio}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width * 0.88,
        height:  height * 0.18,
        marginVertical: height * 0.008,
        borderColor: Colors.primary,
        borderWidth: 3,
        //alignItems: "center",
        //justifyContent: "center",
        borderRadius: 17,
        shadowColor: Colors.primary,
        /*shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,*/
    },
    containerText:{
        //justifyContent: "center",
        alignItems: "center",
    },
    TextNombre:{
        //fontSize: 22,
        fontSize: width >= 420 ? 26 : 20,
        marginTop: height * 0.01,
        fontWeight: "bold",
    },
    TextDescrip:{
        fontSize: width >= 420 ? 16 : 14,
        textAlign: "center",
        marginVertical: height * 0.01,
    },
    TextPrecio:{
        fontSize: width >= 420 ? 22 : 18,
        marginTop: height >= 800 ? height * 0.025 : 0,
    },
})

export default RenderFibra;