import { Exercise, Home, Question, Solution } from "./Pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dialog from "react-native-dialog";
import { useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isHelpDialogDisplay, setIsHelpDialogDisplay] = useState(false);
  const [isHelpDialogQuestionDisplay, setIsHelpDialogQuestionDisplay] = useState(false);
  //const [isWrongAnswerDialogDisplay, setIsWrongAnswerDialogDisplay] = useState(false);

  //Diálogo de ayuda para selección de ejercicios
  const renderHelpDialog = () => {
    return(
      <Dialog.Container visible={isHelpDialogDisplay} onBackdropPress={() => setIsHelpDialogDisplay(false)} >
        <Dialog.Title >Instrucciones</Dialog.Title>
        <Dialog.Description>Selecciona uno de los ejercicios propuestos, resuelvelo y elige la respuesta correcta entre los incisios indicados</Dialog.Description>
        <Dialog.Button label="Aceptar" onPress={() => setIsHelpDialogDisplay(false)}/>
      </Dialog.Container>
    );
  };

  //Diálogo de ayuda para selección de respuesta
  const renderHelpDialogQuestion = () => {
    return(
      <Dialog.Container visible={isHelpDialogQuestionDisplay} onBackdropPress={() => setIsHelpDialogQuestionDisplay(false)} >
        <Dialog.Title >Instrucciones</Dialog.Title>
        <Dialog.Description>Resuelve el ejercicio y elige la respuesta correcta entre los incisios mostrados</Dialog.Description>
        <Dialog.Button label="Aceptar" onPress={() => setIsHelpDialogQuestionDisplay(false)}/>
      </Dialog.Container>
    );
  };
/* 
  //Diálogo de respuesta seleccionada
  const renderWrongAnswerDialog = () => {
    return(
      <Dialog.Container visible={isWrongAnswerDialogDisplay} onBackdropPress={() => setIsWrongAnswerDialogDisplay(false)} >
        <Dialog.Title >Respuesta seleccionada</Dialog.Title>
        <Dialog.Description>Resuelve el ejercicio y elige la respuesta correcta entre los incisios mostrados</Dialog.Description>
        <Dialog.Button label="Cancelar" onPress={() => setIsWrongAnswerDialogDisplay(false)}/>
      </Dialog.Container>
    );
  }; */

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }} 
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Exercise" >
            {() => <Exercise onPressHelp={() => setIsHelpDialogDisplay(true)} />}
          </Stack.Screen>
          <Stack.Screen name="Question" >
            {() => <Question onPressHelp={() => setIsHelpDialogQuestionDisplay(true)} />}
          </Stack.Screen>
          <Stack.Screen name="Solution" component={Solution} />
        </Stack.Navigator>
      </NavigationContainer>
      {renderHelpDialog()}
      {renderHelpDialogQuestion()}
    </>
  );
}