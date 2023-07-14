import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenuExercise.style";

const TabBottomMenuExercise = ({ selectedTabName, onPress, exerciseList}) => {

    const countByStatus = exerciseList.reduce((acc, exercise) => {
        exercise.resolved ? acc.done++ : acc.inProgres++
        return acc
    },{
        all: exerciseList.length,
        inProgres: 0,
        done: 0
    });

    // Función getTextStyle que resalta en azul el tab seleccionado
    const getTextStyle = (tabName) => {
        return {
            fontWeight: "bold",
            color: selectedTabName === tabName ? "#2F76E5" : "black"
        };
    };

    return(
        <View style={s.root} >
            <TouchableOpacity onPress={() => onPress("all")}>
                <Text style={getTextStyle("all")} >Todos ({countByStatus.all})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("inProgress")}>
                <Text style={getTextStyle("inProgress")}>En progreso ({countByStatus.inProgres})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("done")}>
                <Text style={getTextStyle("done")}>Terminados ({countByStatus.done})</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TabBottomMenuExercise;