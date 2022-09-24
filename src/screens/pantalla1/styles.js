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
        marginTop: height * 0.02,
        alignItems: "center",
    },
    TextTitle: {
        fontSize: 30,
        fontWeight: "bold",
    },
    Textinfo: {
        fontSize: 18,
        marginLeft: 10,
    },
    containerInfo:{
        backgroundColor: color.container,
        //alignItems: "flex-start",
        marginHorizontal: width * 0.05,
        marginTop: height * 0.03,
        height: 40,
        justifyContent: "center",
        borderRadius: 10,
    },
    containerToucheable:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    containerBoton: {
        marginTop: 15,
        width: width * 0.5,
        height: 40,
        backgroundColor: "#5555ff",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textBoton: {
        fontSize: 20,
        color: "#fff"
    },
})