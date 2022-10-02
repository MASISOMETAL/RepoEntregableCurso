import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/color";


const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
    },
    containerImg:{
        alignItems: "center",
        marginTop: height * 0.05,
    },
    img:{
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: "center",
    },
    containerTextSelection:{
        marginTop: height * 0.01,
    },
    textSelection:{
        fontSize: 22,
        fontWeight: "bold",
    },
    containerBotons:{
        marginTop: height * 0.05,
        flexDirection: "row",
    },
    botons:{
        backgroundColor: Colors.primary,
        height: height * 0.06,
        width: width * 0.4,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
    textBoton:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
})