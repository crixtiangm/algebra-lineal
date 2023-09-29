import { ScrollView, Text, View } from "react-native";
import { s } from "./Solution.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ExerciseSolution, NavHeaderSolution } from "../../components";
import { useRoute } from "@react-navigation/native";
import solutionData from "../../data/solutions.json";
import { useEffect, useState } from "react";

const Solution = () => {
    const { params } = useRoute();

    const [ selectedSolution, setSelectedSolution ] = useState("");

    const [ topicTitle, setTopicTitle ] = useState("");

    //Hook que carga la solución asociada al ejercicio seleccionado
    useEffect(()=> {
        loadSelectedSolution();
    },[])

    // Función que filtra la solución mediante el id del ejercicio seleccionado
    const filteredSolution = (exerciseId) => {
        if(exerciseId !== 0) {
            return solutionData.filter((solution) => solution._exercise[0].id == exerciseId);
        }
        return[];
    };

    // Función que carga la solucion del ejercicio seleccionado
    const loadSelectedSolution = () => {
        //console.log("LOAD SOLUTION");
        try {
            const filterSolution = filteredSolution(params.id)
            setSelectedSolution(filterSolution[0].explanation || "");
            setTopicTitle(filterSolution[0]._exercise[0]._topic[0].title);
        } catch (error) {
            alert(error);
        }
    }

    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeaderSolution title={topicTitle} />
                    </View>
                    <View style={s.body} >
                        <ScrollView >
                            <ExerciseSolution solution={selectedSolution} />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
};

export default Solution;