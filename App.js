import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Comienzo  from "./screen/start.js";
import  Pantalla2  from "./screen/pantalla2.js";

const App = () => {

    const [validar, setValidar] = useState(false);

    const onScreen = () => {
        setValidar(true);
        console.warn("hola")
    }

    let content = <Comienzo onScreen={() => onScreen}/>;

    return (
        <View style={styles.container}>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default App;
