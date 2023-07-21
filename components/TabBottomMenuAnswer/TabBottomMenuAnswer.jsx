import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenuAnswer.style";

const TabBottomMenuAnswer = ({selectedTabName, onPress, exerciseNum}) => {

    // Función getTextStyle que resalta en azul el tab seleccionado
    const getTabName = (tabName) => {
        return {
            fontWeight: "bold",
            color: selectedTabName === tabName ? "#2F76E5" : "black"
        }
    }

    return(
        <View style={s.root}>
            <TouchableOpacity onPress={() => onPress("Exercise")} >
                <Text style={getTabName("Exercise")}>Ejercicio {exerciseNum}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("Theory")} >
                <Text style={getTabName("Theory")} >Teoría</Text>
            </TouchableOpacity>
        </View>
    );
};


export default TabBottomMenuAnswer;