import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./NavHeaderQuestion.style";
import { useNavigation } from "@react-navigation/native";
import imgLogo from "../../assets/logo.png"
import imgBack from "../../assets/arrow_back.png";
import imgHelp from "../../assets/help.png";

const NavHeaderQuestion = ({title, onPress}) => {
    const nav = useNavigation();

    return(
        <>
        <View style={s.container} >
            <TouchableOpacity onPress={() => nav.goBack()} >
                <Image style={s.back_img} source={imgBack} />
            </TouchableOpacity>
            <View>
                <Image style={s.img} source={imgLogo} resizeMode="contain" />
            </View>
            <TouchableOpacity onPress={onPress} >
                <Image style={s.help_img} source={imgHelp} />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={s.subtitle} >{title}</Text>
        </View>
        </>
    );
};

export default NavHeaderQuestion;