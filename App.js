import React, {useState} from "react";
import { View, Text, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { CustomHeader, CustomFooter } from "./components";
import PantallaInicial from './screens/pantallaInicial';
import PantallaSecundaria from './screens/pantallaSecundaria';
import { colors } from "./constants/colors";
import { useFonts } from 'expo-font';

const App = () => {

    const [switchPantalla, setSwitchPantalla] = useState(false);

    const [loaded] = useFonts({
        'NotoSerif-Regular': require('./assets/fonts/NotoSerif-Regular.ttf'),
        'NotoSerif-Bold': require('./assets/fonts/NotoSerif-Bold.ttf'),
        'NotoSerif-Italic': require('./assets/fonts/NotoSerif-Italic.ttf'),
        'NotoSerif-BoldItalic': require('./assets/fonts/NotoSerif-BoldItalic.ttf'),
      });

      if(!loaded) {
        return (
          <View style={styles.containerLoader}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )
      }

    const switchP = () => {
        setSwitchPantalla(true);
    }

    let content =  <PantallaInicial cambio={switchP} title={title}/>;

    if (switchPantalla == true) {
        content =  <PantallaSecundaria title={title}/>;
    }

    const title = !switchPantalla ? "Pantalla Principal" : "Pantalla Secundaria";

    return(
        <View style={styles.container}>            
            <View style={styles.containerHead}>
                <CustomHeader title={title}></CustomHeader>
            </View>
            <View style={styles.containerCentral}>
            {content}
            </View>
            <View style={styles.containerFoot}>
                <CustomFooter></CustomFooter>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    },
    containerHead: {
        //flex: 1,
    },
    containerCentral: {
        flex: 1,
    },
    containerFoot: {
        //flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
    },
})

export default App;

