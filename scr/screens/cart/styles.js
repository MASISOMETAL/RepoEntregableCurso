import { StyleSheet, Dimensions } from "react-native";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
    },
    containerInfo:{
        //backgroundColor: "#ff0000",
        marginTop: 10,
        borderWidth: 2,
        borderColor: "#ff0000",
        width: width * 0.9,
        height: height * 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    textNombre:{
        fontSize: 22,
        fontWeight: "bold",
    },
    textPrecio:{
        fontSize: 18,
    },
})