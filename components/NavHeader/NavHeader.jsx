import {Text, Image, View, TouchableOpacity} from "react-native";
import { s } from "./NavHeader.style";
import imgLogo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import imgHome from "../../assets/home.png";
import imgHelp from "../../assets/help.png";
import { useState } from "react";
import Dialog from "react-native-dialog";

const NavHeader = ({title, onPress}) => {
    const nav = useNavigation();

    /* const [isHelpDialogDisplay, setIsHelpDialogDisplay] = useState(false);

    const renderHelpDialog = () => {
        return(
            <Dialog.Container visible={isHelpDialogDisplay} onBackdropPress={() => setIsHelpDialogDisplay(false)} >
                <Dialog.Title >Instrucciones</Dialog.Title>
                <Dialog.Description>Selecciona uno de los ejercicios propuestos, resuelvelo y elige la respuesta correcta entre los incisios indicados</Dialog.Description>
                <Dialog.Button label="Aceptar" onPress={() => setIsHelpDialogDisplay(false)}/>
            </Dialog.Container>
        )
    } */

    return(
        <>
        <View style={s.container}>
            <TouchableOpacity onPress={() => nav.goBack()} >
                <Image style={s.home_img} source={imgHome} />
            </TouchableOpacity>
            <View>
                <Image style={s.img} source={imgLogo} resizeMode="contain" ></Image>
                <Text style={s.subtitle} >{title}</Text>
            </View>
            <TouchableOpacity onPress={onPress} >
                <Image style={s.help_img} source={imgHelp} />
            </TouchableOpacity>
        </View>
        </>
    );
};

export default NavHeader;