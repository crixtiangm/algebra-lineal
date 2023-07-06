import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./TabBottomMenuHome.style";

/**
 * 
 * @selectedTabName prop del componente para seleccionar el tab y filtrar los temas a mostrar 
 * @onPress prop  del componente para seleccionar el tab "all", "inProgress" y "done"
 * @topicList prop del componente que pasa un arreglo de objetos que contienen la informacion de los temas a mostar
 */

const TabBottomMenuHome = ({ selectedTabName, onPress, topicList }) => {

    // Función countByStatus para mostar la cuenta en las opciones del footer en la aplicación
    const countByStatus = topicList.reduce((acc, topic) => {
        topic.isCompleted ? acc.done++ : acc.inProgress++
        return acc
    },{
        all: topicList.length,
        inProgress: 0,
        done: 0,
    })
    
    // Función getTextStyle que resalta en azul el tab seleccionado
    const getTextStyle = ( tabName ) => {
        return{
            fontWeight: "bold",
            color: selectedTabName === tabName ? "#2F76E5" : "black"
        }
    }

    return(
        <View style={s.root}>
            <TouchableOpacity onPress={() => onPress("all")} >
                <Text style={getTextStyle("all")} >Todos ({countByStatus.all})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("inProgress")} >
                <Text style={getTextStyle("inProgress")} >En progreso ({countByStatus.inProgress})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("done")} >
                <Text style={getTextStyle("done")} >Terminados ({countByStatus.done})</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TabBottomMenuHome;