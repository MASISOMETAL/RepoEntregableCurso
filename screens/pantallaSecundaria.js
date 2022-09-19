import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { colors } from "../constants/colors";

const PantallaSecundaria = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View style={styles.containerBox}>
                    <Text style={styles.Text}>Leon</Text>
                     <View style={styles.containerBoxColor}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Leon.jpeg')}
                        />
                    </View>
                </View>
                <View style={styles.containerBox}>
                    <Text style={styles.Text}>Caballo</Text>
                     <View style={styles.containerBoxColor}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Caballo.jpg')}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.containerRow}>
                <View style={styles.containerBox}>
                    <Text style={styles.Text}>Cebra</Text>
                     <View style={styles.containerBoxColor}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Cebra.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.containerBox}>
                    <Text style={styles.Text}>Elefante</Text>
                     <View style={styles.containerBoxColor}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Elefante.jpg')}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.containerRow}>
                <View style={styles.containerBox}>
                    <Text style={styles.Text}>Perro</Text>
                     <View style={styles.containerBoxColor}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Perro.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.containerBox}>
                    <Text style={styles.Text}>Tigre</Text>
                     <View style={styles.containerBoxColor}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Tigre.jpg')}
                        />
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "center", 
    },
    containerBox: {
        //backgroundColor: "#ff00ff",
        alignItems: "center",
        marginHorizontal: 15,
    },
    containerBoxColor: {
        backgroundColor: "#ff0000",
        width: 150,
        height: 150,
        margin: 10,
    },
    Text:{
        fontSize: 18,
    },
    image: {
        width: 150,
        height: 150,
    }
})

export default PantallaSecundaria;