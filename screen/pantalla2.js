import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Pantalla2 = () => {
    return (
        <View style={styles.container}>
            <Text>Hola Woachines</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Pantalla2;