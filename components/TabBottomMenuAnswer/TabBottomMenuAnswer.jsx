import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenuAnswer.style";
import { useNavigation } from "@react-navigation/native";

const TabBottomMenuAnswer = ({selectedTabName, onPress, exerciseNum, exerciseId}) => {

    const nav = useNavigation();

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
            <TouchableOpacity onPress={() => nav.navigate("Theory",{exerciseNum, exerciseId})} >
                <Text style={getTabName("Theory")} >Teoría</Text>
            </TouchableOpacity>
        </View>
    );
};


export default TabBottomMenuAnswer;