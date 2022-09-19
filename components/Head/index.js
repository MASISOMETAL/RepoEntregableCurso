import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const CustomHeader = ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHead}>{title}</Text>
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
    textHead: {
        fontSize: 22,
    },
})

export default CustomHeader;