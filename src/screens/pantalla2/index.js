import react from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./styles";


const Pantalla2 = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.Text}>Animales</Text>
            </View>

                <View style={styles.containerBoton}>
                    <TouchableOpacity 
                        style={styles.Boton}
                        onPress={() => navigation.navigate("Informacion")}
                        >
                        <Image
                            style={styles.imagen} 
                            source={{uri: "https://www.gestacionde.com/wp-content/uploads/2017/05/caballo.jpg",}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.Boton}
                        onPress={() => navigation.navigate("Informacion")}
                        >
                        <Image
                                style={styles.imagen} 
                                source={{uri: "https://www.especiesde.com/wp-content/uploads/2018/06/tigre.jpg",}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerBoton}>
                    <TouchableOpacity 
                        style={styles.Boton}
                        onPress={() => navigation.navigate("Informacion")}
                        >
                        <Image
                            style={styles.imagen} 
                            source={{uri: "https://www.gestacionde.com/wp-content/uploads/2017/05/leon.jpg",}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.Boton}
                        onPress={() => navigation.navigate("Informacion")}
                        >
                        <Image
                            style={styles.imagen} 
                            source={{uri: "https://images.hola.com/tod/images/0261-106743423ef4-17dd661572e8-1000/square-200/pantera-negra-granada.jpg",}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerBoton}>
                    <TouchableOpacity 
                        style={styles.Boton}
                        onPress={() => navigation.navigate("Informacion")}
                        >
                        <Image
                            style={styles.imagen} 
                            source={{uri: "https://www.especiesde.com/wp-content/uploads/2018/09/elefante.jpg",}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.Boton}
                        onPress={() => navigation.navigate("Informacion")}
                        >
                        <Image
                            style={styles.imagen} 
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyN_dTvO_gLD1JDO6V7yQcHzNZ90YLs8j-B1Z5Fz7wM0bAvoh1lSUXlO8uX3mlFl7Ohfk&usqp=CAU",}}
                        />
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Pantalla2;