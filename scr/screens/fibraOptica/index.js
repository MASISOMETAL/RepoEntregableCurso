import React from "react";
import { View, Text, FlatList } from "react-native";
import RenderFibra from "../../components/renderFibra";
import { styles } from "./styles";
import { database } from "../../components/database";

const FibraOptica = ({navigation, route}) =>{

    const renderItem = ({item}) => <RenderFibra item={item} navigation={navigation} route={route}/>

    return(
        <View style={styles.container}>
                <FlatList
                    data={database}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
        </View>
    )
}

export default FibraOptica;