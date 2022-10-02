import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const InfoApp = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    style={styles.img}
                    source={{uri: "https://i.ibb.co/tYc5ZNr/Logo-MASISO.jpg"}}
                    />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>App creada para enregar en CoiderHouse</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>Version 1.0</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>Intente hacer lo mas responsive 
                    posible, falta completar unas pantallas, pero lo importante
                    era mostrar su funcionabilidad                
                </Text>
            </View>
        </View>
    )
}

export default InfoApp;

