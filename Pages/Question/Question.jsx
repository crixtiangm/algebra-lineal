import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Question.style";
import { ScrollView, Text, View} from "react-native";
import { Ask, CardAnswer, NavHeaderQuestion, TabBottomMenuAnswer } from "../../components";
import optionData from "../../data/options.json";
import { useRoute } from "@react-navigation/native";
import CheckBox from "expo-checkbox";
import { useEffect, useState } from "react";

// Arrego donde se agregaran las respuestas de forma aleatoría del ejercicio seleccionado
let options = [
    {option: "a)",isChecked: false},
    {option: "b)",isChecked: false},
    {option: "c)",isChecked: false},
    {option: "d)",isChecked: false}
]

const Question = ({onPressHelp}) => {
    // Datos del ejercicio seleccionado que se pasan mediante nav en param 
    const { params } = useRoute();

    // Hook para inicializar la lista de respuestas opcionales
    const [answerList, setAnswerList] = useState([]);

    // Hook para inicializar el tab siempre en Exercise
    const [selectedTabName, setSelectedTabName] = useState("Exercise");

    // Hook para cargar la lista de respuestas asociadas al Ejercicio seleccionado
    useEffect(() => {
        loadAnswerList();
    },[])

    // Función que filtra las respuestas mediante el Id de ejercicio seleccionado
    const listFilteredAnswers = (exerciseId) => {
        if(exerciseId !== 0) {
            return optionData.filter( (option) => option._exercise[0].id === exerciseId )
        };
        return [];
    };
    
    // Ordenamos las respuestas de forma aleatoria en un arreglo
    const orderRandomOptions = (arrOptions) => {
        if (arrOptions) {
            return arrOptions.sort(() => Math.random() - 0.5);
        }
        return [];
    };

    // Función que se encarga de cargar la lista de respuestas opcionales
    const loadAnswerList = () => {
        console.log("LOAD ANSWERS")
        try {
            const listFilterAnswers = listFilteredAnswers(params.id);
            const orderedOptions = orderRandomOptions(listFilterAnswers);
            const listOrdered = options.map((option, id) => {
                option.statement = orderedOptions[id].choice;
                option.correctAnswer = orderedOptions[id].correctAnswer;
                return option;
            });
            setAnswerList(listOrdered || []);
        } catch (error) {
            alert(error);
        };
    };

    // Función que renderiza las lista de respuestas dependiendo del ejercicio seleccionado
    const renderAnswerList = () => {
        return answerList.map((answer, index) =>
            <View key={index} style={s.cardItem} >
                <CardAnswer 
                    answer = {answer}
                    onPress = {updateAnswer}
                />
            </View>
        )
    }

    // Funcion que actualiza el checkbox de la respuesta seleccionada por el usuario
    const updateAnswer = (answer) => {
        const updatedAnswer = {
            ...answer,
            isChecked: !answer.isChecked
        }
        const updateAnswerList = [...answerList];
        const indexToUpdate = updateAnswerList.findIndex((answer) => answer.option === updatedAnswer.option );
        const updatedAnswerList = updateAnswerList.map((element, index) => {
            if (indexToUpdate !== index) {
                element.isChecked ? element.isChecked = false : element.isChecked
            } 
            return element
        })
        updatedAnswerList[indexToUpdate] = updatedAnswer;
        setAnswerList(updatedAnswerList);
    }
    
    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeaderQuestion 
                            title={params._topic[0].title}
                            onPress={onPressHelp} 
                        />
                    </View>
                    <View style={s.body} >
                        <Ask exerciseNum={params.exercise} statement={params.statement} />
                        <ScrollView>{renderAnswerList()}</ScrollView>
                    </View>
                    
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer} >
                <TabBottomMenuAnswer 
                    selectedTabName={selectedTabName} 
                    onPress={setSelectedTabName} 
                    exerciseNum={params.exercise}
                />
            </View>
        </>
    );
};

export default Question;