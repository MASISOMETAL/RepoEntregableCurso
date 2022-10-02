import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/color";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: "#555500",
        //justifyContent: "center",
        alignItems: "center",
    },
    containerInfo:{
        width: width * 0.9,
        backgroundColor: Colors.fondo,
        marginTop: 16,
    },
    textInfo:{
        fontSize: 18,
        marginVertical: 5,
        paddingLeft: 20,
    },
    containerImg:{
        alignItems: "center",
        marginTop: height * 0.05,
    },
    img:{
        width: width  * 0.4,
        height: width  * 0.4,
        resizeMode: "contain",
    },
})

