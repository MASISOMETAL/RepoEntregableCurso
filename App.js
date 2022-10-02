import React from "react";
import { Text, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import AppNavigator from "./scr/navigation";

const App = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <AppNavigator/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})

export default App;