import React from "react";
import { View, Text, FlatList } from "react-native";
import RenderFibra from "../../components/renderFibra";
import { styles } from "./styles";
//import { database } from "../../components/database";
import { useSelector } from "react-redux";

const FibraOptica = ({navigation, route}) =>{

    const data = useSelector((state) => state.PromosReducers.promosDB);
    const renderItem = ({item}) => <RenderFibra item={item} navigation={navigation}/>

    return(
        <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
        </View>
    )
}

export default FibraOptica;