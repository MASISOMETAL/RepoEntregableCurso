import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Comienzo = ({onScreen}) => {

    const onConfirm = () => {
        onScreen;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>Soy Pantalla Start</Text>
            <TouchableOpacity 
                style={styles.boton}
                onPress={onConfirm}
            >
                <Text style={styles.textboton}>Tocame pa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E6CF22",
    },
    textContainer: {
        fontSize: 30,
    },
    boton: {
        marginVertical: 10,
        padding: 10,
        //width: 80,
        //height: 40,
        backgroundColor: "#8f88f8",
    },
    textboton: {
        fontSize: 18,
    },
  });

export default Comienzo;