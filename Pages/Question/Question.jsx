import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Question.style";
import { ScrollView, Text, View} from "react-native";
import { Ask, CardAnswer, NavHeaderQuestion, TabBottomMenuAnswer } from "../../components";
import optionData from "../../data/options.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import CheckBox from "expo-checkbox";
import { useEffect, useState } from "react";
import Dialog from "react-native-dialog";

// Arrego donde se agregaran las respuestas de forma aleatoría del ejercicio seleccionado
let options = [
    {option: "a)",isChecked: false, viewAnswer: false},
    {option: "b)",isChecked: false, viewAnswer: false},
    {option: "c)",isChecked: false, viewAnswer: false},
    {option: "d)",isChecked: false, viewAnswer: false}
]

const Question = ({onPressHelp}) => {
    const nav = useNavigation();

    // Datos del ejercicio seleccionado que se pasan mediante nav en param 
    const { params } = useRoute();
    //console.log(params)
    // Hook para inicializar la lista de respuestas opcionales
    const [answerList, setAnswerList] = useState([]);

    // Hook para inicializar el tab siempre en Exercise
    const [selectedTabName, setSelectedTabName] = useState("Exercise");

    // Hook para ocultar y mostrar el dialogo de respuesta erronea
    const [isWrongAnswerDialogDisplay, setIsWrongAnswerDialogDisplay] = useState(false);

    // Hook para ocultar y mostrar el dialogo de respuesta correcta
    const [isCorrectAnswerDialogDisplay, setIsCorrectAnswerDialogDisplay] = useState(false);

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
        updatedAnswer.correctAnswer ? setIsCorrectAnswerDialogDisplay(true) : setIsWrongAnswerDialogDisplay(true);
    }

    //Diálogo de respuesta incorrecta seleccionada
    const renderWrongAnswerDialog = () => {
        return(
        <Dialog.Container visible={isWrongAnswerDialogDisplay} onBackdropPress={() => setIsWrongAnswerDialogDisplay(false)} >
            <Dialog.Title >Respuesta incorrecta</Dialog.Title>
            <Dialog.Description>Si deseas ver la solución selecciona el botón correspondiente, de lo contrario puedes volver a intentarlo.</Dialog.Description>
            <Dialog.Button label="Intentar" color="grey" onPress={() => setIsWrongAnswerDialogDisplay(false) } />
            <Dialog.Button 
                label="Solución" 
                onPress={() => {
                    nav.navigate("Solution",{...params});
                    setIsWrongAnswerDialogDisplay(false);
                }}
            />
        </Dialog.Container>
        );
    };

    //Dialogo de respuesta correcta seleccionada
    const renderCorrectAnswerDialog = () => {
        return(
            <Dialog.Container visible={isCorrectAnswerDialogDisplay} onBackdropPress={() => nav.goBack()} >
                <Dialog.Title >Respuesta correcta</Dialog.Title>
                <Dialog.Description>Muchas felicidades tu respuesta es correcta, si deseas ver la solución oprime el botón correspondiente.</Dialog.Description>
                <Dialog.Button label="Ejercicios" color="grey" onPress={() => nav.goBack() } />
                <Dialog.Button 
                    label="Solución" 
                    onPress={() => {
                        nav.navigate("Solution",{...params});
                        setIsCorrectAnswerDialogDisplay(false);
                    }}
                />
            </Dialog.Container>
        );
    };
    
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
                    title={params._topic[0].title}
                />
            </View>
            {renderCorrectAnswerDialog()}
            {renderWrongAnswerDialog()}
        </>
    );
};

export default Question;