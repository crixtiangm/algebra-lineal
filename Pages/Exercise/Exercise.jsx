import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Exercise.style";
import { ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import exerciseData from "../../data/exercises.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardExercise, NavHeader, TabBottomMenuExercise } from "../../components";

let isFirstRender = true; //Bandera para controlar la carga de los datos
let isLoadUpdate = false; //Bandera para controlar cuando se actualizan los datos y guardarlos

const Exercise = ({onPressHelp}) => {
    // Datos del tema seleccionado que se pasan mediante params 
    const { params } = useRoute();

    // Hook para inicializar los ejercicios obtenidos del exercisesData
    const [ exerciseList, setExerciseList ] = useState([]);

    // Hook para filtrar la lista de ejercicios
    const [ filterExerciseList, setFilterExerciseList ] = useState([]);

    // Inicializamos siempre el tab en "all" mediante un hook useState
    const [ selectedTabName, setSelectedTabName ] =  useState("inProgress");

    // Cargar los datos guardados cuando se inicia la aplicación
    useEffect(() => {
        loadExerciseList();
        isFirstRender = true;
    },[]);

    useEffect(() => {
        if (!isLoadUpdate) {
            !isFirstRender ? saveExerciseList() : isFirstRender = false;
        } else {
            isLoadUpdate = false;
        };
    },[exerciseList]);

    // Función para filtrar los ejercicios asociados al tema, se filtra mediante el id del tema(topic) seleccionado que se pasa mediante params
    const listFilteredExercise = (exercisesList) => {
        if(exercisesList) {
            return exercisesList.filter((exercise) => exercise._topic[0].id === params.id);
        }
        return exerciseData.filter((exercise) => exercise._topic[0].id === params.id);
    };

    //Eliminar datos que se tienen almacenados
    /* const removeData = async () => {
        console.log("REMOVE");
        try {
            await AsyncStorage.removeItem("@exerciseList");
        } catch (error) {
            alert(error);
        };
    } */

    //Función que se encarga de pasar los datos de string a un objeto de JSON y así poder cargarlos de inicio
    const loadExerciseList = async () => {
        //console.log("LOAD");
        try {
            const exerciseListString = await AsyncStorage.getItem("@exerciseList");
            const parsedExerciseList = JSON.parse(exerciseListString);
            const listFiltered = listFilteredExercise(parsedExerciseList);
            isLoadUpdate = true;
            parsedExerciseList === null || parsedExerciseList.length === 0 ? setExerciseList(exerciseData): setExerciseList(parsedExerciseList);
            setFilterExerciseList(listFiltered);
            //removeData();   
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

    // Funcion que filtra el contenido de cards para los ejercicios dependiendo el tab seleccionado
    const getFilteredList = () => {
        switch (selectedTabName) {
            case "all":
                return exerciseList.filter((exercise) => exercise._topic[0].id === params.id);
            case "inProgress":
                return exerciseList.filter((exercise) => exercise.resolved === false && exercise._topic[0].id === params.id);
            case "done":
                return exerciseList.filter((exercise) => exercise.resolved === true && exercise._topic[0].id === params.id);
        }
    }

    //Función que renderiza las cards dependiendo el tab seleccionado
    const renderExerciseList = () => {
        return getFilteredList().map((exercise) => 
            <View key={exercise.id} style={s.cardItem} >
                <CardExercise onLongPress={updateExercise} exercise={exercise} />
            </View>
        )
    }

    //Función que actualiza la bandera resolved despues de presionar la card por mas de tres segundos
    const updateExercise = (excercise) => {
        const updatedExercise = {
            ...excercise,
            resolved: !excercise.resolved
        };
        const updateExerciseList = [...exerciseList];
        const indexToUpdate = updateExerciseList.findIndex((t) => t.id === updatedExercise.id);
        updateExerciseList[indexToUpdate] = updatedExercise;
        const listFiltered = listFilteredExercise(updateExerciseList);
        setExerciseList(updateExerciseList);
        setFilterExerciseList(listFiltered);
    };

    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeader
                            title={params.title} 
                            onPress={onPressHelp}
                        />
                    </View>
                    <View style={s.body} >
                        <ScrollView>{renderExerciseList()}</ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer} >
                <TabBottomMenuExercise 
                    selectedTabName={selectedTabName} 
                    onPress={setSelectedTabName} 
                    exerciseList={filterExerciseList}
                />
            </View>
        </>
    );
};

export default Exercise;