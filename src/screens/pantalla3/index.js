import react from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";

const Pantalla3 = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>No se como pasar props entre pantallas por nav</Text>
        </View>
    )
}

export default Pantalla3;