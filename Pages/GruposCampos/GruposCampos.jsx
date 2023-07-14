import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./GruposCampos.style";
import { ScrollView, Text, View } from "react-native";
import { CardExercise, NavHeader, TabBottomMenuExercise } from "../../components";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import exercisesData from "../../data/exercises.json";
import { useEffect, useState } from "react";

let isFirstRender = true; //Bandera para controlar la carga de los datos
let isLoadUpdate = false; //Bandera para controlar cuando se actualizan los datos y guardarlos

const GruposCampos = ({onPressHelp}) => {
    // Datos del tema seleccionado que se pasan mediante params 
    const { params } = useRoute();

    // Hook para inicializar los ejercicios obtenidos del exercisesData
    const [exerciseList, setExerciseList] = useState([]);

    // Inicializamos siempre el tab en "all" mediante un hook useState
    const [selectedTabName, setSelectedTabName] =  useState("all");

    // Cargar los datos guardados cuando se inicia la aplicación
    useEffect(() => {
        loadExerciseList();
    },[]);

    useEffect(() => {
        if(!isLoadUpdate){
            !isFirstRender ? saveExerciseList() : isFirstRender = false;
        } else {
            isLoadUpdate = false;
        }
    },[exerciseList]);

    // Función para filtrar los ejercicios asociados al tema, se filtra mediante el id del tema(topic) seleccionado que se pasa mediante params
    const listFilteredExercise = () => {
        return exercisesData.filter((excercise) => excercise._topic[0].id === params.id);
    };

    //Función que se encarga de pasar los datos de string a un objeto de JSON y así poder cargarlos de inicio
    const loadExerciseList = async () => {
        console.log("LOAD");
        try {
            const exerciseListString = await AsyncStorage.getItem("@exerciseList");
            const parsedExerciseList = JSON.parse(exerciseListString);
            isLoadUpdate = true;
            parsedExerciseList.length === 0 ? setExerciseList(listFilteredExercise()) : setExerciseList(parsedExerciseList);
        } catch (error) {
            alert(error);
        };
    };

    //Función que guarda los cambios que el usuario va realizando en la aplicación ej: cuando se actualiza el boolean resolved
    const saveExerciseList = async () => {
        console.log("SAVE");
        try {
            await AsyncStorage.setItem("@exerciseList", JSON.stringify(exerciseList));
        } catch (error) {
            alert(error);
        };
    };

    // Funcion que filtra el contenido de cards dependiendo el tab seleccionado
    const getFilteredList = () => {
        switch (selectedTabName) {
            case "all" :
                return exerciseList;
            case "inProgress":
                return exerciseList.filter( (exercise) => exercise.resolved === false );
            case "done":
                return exerciseList.filter( (exercise) => exercise.resolved === true );
        };
    };

    const renderExerciseList = () => {
        return getFilteredList().map((exercise) =>
            <View key={exercise.id} style={s.cardItem} >
                <CardExercise onLongPress={updateExercise} exercise={exercise} />
            </View>
        );
    };

    //Función que actualiza la bandera resolved despues de presionar la card por mas de tres segundos
    const updateExercise = (exercise) => {
        const updatedExercise = {
            ...exercise,
            resolved: !exercise.resolved
        };
        const updateExerciseList = [...exerciseList];
        const indexToUpdate = updateExerciseList.findIndex((t) => t.id === updatedExercise.id );
        updateExerciseList[indexToUpdate] = updatedExercise;
        setExerciseList(updateExerciseList);
    }

    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root}>
                    <View style={s.nav_header} >
                        <NavHeader title={params.title} onPress={onPressHelp}/>
                    </View>
                    <View style={s.body}>
                        <ScrollView>{renderExerciseList()}</ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer}>
                <TabBottomMenuExercise 
                    selectedTabName={selectedTabName} 
                    onPress={setSelectedTabName}
                    exerciseList={exerciseList}
                />
            </View>
        </>
    );
};

export default GruposCampos;