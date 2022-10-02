import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Selection = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                style={styles.img}
                source={{uri: "https://i.ibb.co/C0d0gfG/Movistar-Logo.png"}}
                />
            </View>
            <View style={styles.containerTextSelection}>
                <Text style={styles.textSelection}>Cuentanos que plan deseas adquirir</Text>
            </View>
            <View style={styles.containerBotons}>
                <TouchableOpacity 
                    style={styles.botons}   
                    onPress={() => navigation.navigate("FibraOptica")}
                >
                    <Text style={styles.textBoton}>Fibra Optica</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.botons}   
                    onPress={() => navigation.navigate("Portabilidad")}
                >
                    <Text style={styles.textBoton}>Portabilidad</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Selection;