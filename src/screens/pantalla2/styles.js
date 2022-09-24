import react from "react";
import { StyleSheet, Dimensions } from "react-native";
import { color } from "../../constants/colors";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: color.fondo,
    },
    containerTitle:{
        //marginTop: height * 0.02,
        alignItems: "center",
        //backgroundColor: "#ff0000",
        marginVertical: height * 0.02,
    },
    Text: {
        fontSize: 25,
    },
    containerRow:{
        //flexDirection: "row",
        width: width,
    },
    containerBoton:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    Boton:{
        width: 200,
        height: 200,
        backgroundColor: color.container,
    },
    imagen:{
        height: 200,
        width: 200,
    },
})