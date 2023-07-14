import { GruposCampos, Home } from "./Pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dialog from "react-native-dialog";
import { useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isHelpDialogDisplay, setIsHelpDialogDisplay] = useState(false);

  const renderHelpDialog = () => {
    return(
      <Dialog.Container visible={isHelpDialogDisplay} onBackdropPress={() => setIsHelpDialogDisplay(false)} >
        <Dialog.Title >Instrucciones</Dialog.Title>
        <Dialog.Description>Selecciona uno de los ejercicios propuestos, resuelvelo y elige la respuesta correcta entre los incisios indicados</Dialog.Description>
        <Dialog.Button label="Aceptar" onPress={() => setIsHelpDialogDisplay(false)}/>
      </Dialog.Container>
    )
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }} 
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="GruposCampos" >
            {() => <GruposCampos onPressHelp={() => setIsHelpDialogDisplay(true)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {renderHelpDialog()}
    </>
  );
}