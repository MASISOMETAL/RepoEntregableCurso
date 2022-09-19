import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const CustomFooter = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textFoot}>Curso CoderHouse</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    textFoot: {
        fontSize: 22,
    },
})

export default CustomFooter;