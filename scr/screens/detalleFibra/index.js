import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { database } from "../../components/database";

const DetailFibra = ({route}) =>{

    const {data} = route.params;
    const db = database.find(item => item.id === data);

    return(
        <View style={{...styles.container, backgroundColor: db.color}}>
            <View style={styles.containerText}>   
                <Text style={styles.nombre}>{db.nombre}</Text>
                <Text style={styles.descripcion}>{db.descripcion}</Text>
                <Text style={styles.precio}>$ {db.precio}</Text>
            </View> 
        </View>
    )
}

export default DetailFibra;