import { s } from "./NavHeaderTheory.style";
import imgLogo from "../../assets/logo.png";
import imgHome from "../../assets/home.png";
import imgHelp from "../../assets/help.png";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

const NavHeaderTheory = ({title, onPress}) => {
    const nav = useNavigation();

    return(
        <>
            <View style={s.container} >
                <TouchableOpacity onPress={() => nav.navigate("Home")} >
                    <Image style={s.home_img} source={imgHome} />
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

export default NavHeaderTheory;