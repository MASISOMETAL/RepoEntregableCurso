import react from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

const Pantalla1 = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.TextTitle}>Bienvenido al Mundo Animal</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.Textinfo}> - Aplicacion creada por MASISO</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.Textinfo}> - Entregable del Curso</Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.Textinfo}> - GitHub: https://github.com/MASISOMETAL/</Text>
            </View>
            <View style={styles.containerToucheable}>
                <TouchableOpacity
                    style={styles.containerBoton}
                    onPress={() => navigation.navigate("Animales")}
                >
                        <Text style={styles.textBoton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pantalla1;