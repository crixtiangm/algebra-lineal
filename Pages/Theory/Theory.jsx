import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Theory.style";
import { useRoute } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { NavHeaderTheory, TabBottomMenuTheory, TopicTheory } from "../../components";
import { useEffect, useState } from "react";
import theoryData from "../../data/theory.json";

const Theory = () => {
    const { params } = useRoute();

    // Hook para inicializar el tab en Theory
    const [ selectedTabName, setSelectedTabName ] = useState("Theory");

    const [ theorySelected, setTheorySelected ] = useState("");

    const [ topicTitle, setTopicTitle ] = useState("");

    //Hook que carga la teoría asociada al ejercicio seleccionado
    useEffect(() => {
        loadSelectedTheory();
    },[])

    // Función que filtra la teoría mediante el id del ejercicio seleccionado
    const filteredTheory = (exerciseId) => {
        if(exerciseId !== 0){
            return theoryData.filter((theory) => theory._exercise[0].id == exerciseId)
        }
        return []
    }

    // Función que carga la teoría del ejercicio seleccionado
    const loadSelectedTheory = () => {
        //console.log("LOAD THEORY");
        try {
            const filterTheory = filteredTheory(params.exerciseId);
            setTheorySelected(filterTheory[0].explanation || "");
            setTopicTitle(filterTheory[0]._exercise[0]._topic[0].title || "");
        } catch (error) {
            alert(error);
        }
    }

    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeaderTheory title={topicTitle} />
                    </View>
                    <View style={s.body}>
                        <ScrollView>
                            <TopicTheory theory={theorySelected}/>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer} >
                <TabBottomMenuTheory 
                    selectedTabName={selectedTabName} 
                    onPress={setSelectedTabName} 
                    exerciseNum={params.exerciseNum}
                />
            </View>
        </>
    );
};

export default Theory;