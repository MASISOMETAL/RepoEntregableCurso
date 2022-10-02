import { StyleSheet, Dimensions } from "react-native";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
    },
})