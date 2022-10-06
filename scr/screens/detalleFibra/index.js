import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const DetailFibra = () =>{

    const data = useSelector((state) => state.databaseStore.database);

    return(
        <View style={{...styles.container, backgroundColor: data.color}}>
            <View style={styles.containerText}>   
                <Text style={styles.nombre}>{data.nombre}</Text>
                <Text style={styles.descripcion}>{data.descripcion}</Text>
                <Text style={styles.precio}>$ {data.precio}</Text>
            </View> 
        </View>
    )
}

export default DetailFibra;