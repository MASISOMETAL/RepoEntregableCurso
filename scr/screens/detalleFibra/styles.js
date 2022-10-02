import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/color";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: "#555500",
        justifyContent: "center",
        alignItems: "center",
    },
    containerText:{
        width: width * 0.9,
        borderColor: Colors.primary,
        borderWidth: 3,
        alignItems: "center",
        borderRadius: 20,
    },
    nombre:{
        fontSize: width >= 420 ? 28 : 22,
        //fontSize: 30,
        fontWeight: "bold",
        marginVertical: 10,
    },
    descripcion:{
        fontSize: width >= 420 ? 18 : 16,
        marginVertical: 10,
        textAlign: "center",
    },
    precio:{
        fontSize: 24,
        marginVertical: 10,
        fontSize: width >= 420 ? 28 : 26,
    },
})