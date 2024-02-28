import { CopyRight, Exercise, Home, Question, Solution, Theory } from "./Pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dialog from "react-native-dialog";
import { useState } from "react";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isHelpDialogDisplay, setIsHelpDialogDisplay] = useState(false);
  const [isHelpDialogQuestionDisplay, setIsHelpDialogQuestionDisplay] = useState(false);
  const [isHelpDialogTeoryDisplay, setIsHelpDialogTeoryDisplay] = useState(false);
  const [isInfoDialogDisplay, setIsInfoDialogDisplay] = useState(false);

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  })

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

  //Diálogo de ayuda en la sección de teoría
  const renderHelpDialogTeory = () => {
    return(
      <Dialog.Container visible={isHelpDialogTeoryDisplay} onBackdropPress={() => setIsHelpDialogTeoryDisplay(false)} >
        <Dialog.Title >Instrucciones</Dialog.Title>
        <Dialog.Description>En esta sección encontraras la teoría asociada al tema seleccionado</Dialog.Description>
        <Dialog.Button label="Aceptar" onPress={() => setIsHelpDialogTeoryDisplay(false)} />
      </Dialog.Container>
    );
  };

  //Diálogo que muestra la versión 
  const renderInfoDialog = () => {
    return(
      <Dialog.Container visible={isInfoDialogDisplay} onBackdropPress={() => setIsInfoDialogDisplay(false)} >
        <Dialog.Title >Última actualización</Dialog.Title>
        <Dialog.Description>Febrero 2024</Dialog.Description>
        <Dialog.Button label="Aceptar" onPress={() => setIsInfoDialogDisplay(false)} />
      </Dialog.Container>
    );
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{headerShown: false,}} 
          initialRouteName="Home"
        >
          <Stack.Screen name="Home">
            {() => <Home onPressInfo={() => setIsInfoDialogDisplay(true)}/>}
          </Stack.Screen>
          <Stack.Screen name="Exercise" >
            {() => <Exercise onPressHelp={() => setIsHelpDialogDisplay(true)} />}
          </Stack.Screen>
          <Stack.Screen name="Question" >
            {() => <Question onPressHelp={() => setIsHelpDialogQuestionDisplay(true)} />}
          </Stack.Screen>
          <Stack.Screen name="Solution" component={Solution} />
          <Stack.Screen name="Theory">
            {() => <Theory onPressHelp={() => setIsHelpDialogTeoryDisplay(true)} />}
          </Stack.Screen>
          <Stack.Screen name="CopyRight">
            {() => <CopyRight onPressInfo={() => setIsInfoDialogDisplay(true)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {renderHelpDialog()}
      {renderHelpDialogQuestion()}
      {renderHelpDialogTeory()}
      {renderInfoDialog()}
    </>
  );
}