import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { colors } from "../constants/colors";

const PantallaInicial = ({cambio}) => {

    const [textValidate, SetTextValidate] = useState("");
    

    const onHandleChangeText = (text) =>{
        SetTextValidate(text)
    }

    const Validate = () =>{
        if (textValidate == "MASISO") {
            cambio();
        }else {
            alert("Has escrito la palabra incorrecta");
            SetTextValidate("");
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imagen} 
                source={{uri: "https://i.ibb.co/QDm5Yp0/Banner.png"}}
            />
 
            <View style={styles.containerinputs}>
                <Text style={styles.textInputs}>Coloca "MASISO" en el input para validarte</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Validate"
                    maxLength={8}
                    onChangeText={onHandleChangeText}
                    value={textValidate}
                />
                <TouchableOpacity onPress={Validate} style={styles.botonRegister}>
                <Text style={styles.textBotonfinal}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DEF5F0",
    },
    imagen: {
        width: "100%",
        height: 150,
    },
    containerinputs: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        marginTop: 70,
    },
    textInputs: {
        fontSize: 26,
    },
    inputs: {
        width: "80%",
        height: 40,
        marginVertical: 17,
        borderBottomWidth: 1.5,
    },
    botonRegister: {
        backgroundColor: colors.boton,
        height: 50,
        width: 250,
        padding: 10,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
    },
    textBotonfinal: {
        fontSize: 15,
        color: "#fff",
    },
})

export default PantallaInicial;

