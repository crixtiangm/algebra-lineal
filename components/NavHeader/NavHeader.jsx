import {Text, Image, View, TouchableOpacity} from "react-native";
import { s } from "./NavHeader.style";
import imgLogo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import imgHome from "../../assets/home.png";
import imgHelp from "../../assets/help.png";

const NavHeader = ({title, onPress}) => {
    const nav = useNavigation();

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