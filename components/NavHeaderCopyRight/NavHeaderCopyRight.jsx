import { s } from "./NavHeaderCopyRight.style";
import imgLogo from "../../assets/logo.png";
import infoImg from "../../assets/info.png";
import { TouchableOpacity, View, Image, Text } from "react-native";
import imgHome from "../../assets/home.png";
import { useNavigation } from "@react-navigation/native";

const NavHeaderCopyRight = ({ onPress }) => {
    const nav = useNavigation();

    return(
        <>
        <View style={s.container} >
            <TouchableOpacity onPress={() => nav.goBack()} >
                <Image style={s.home_img} source={imgHome} />
            </TouchableOpacity>
            <View>
                <Image style={s.img} source={imgLogo} resizeMode="contain" />
            </View>
            <TouchableOpacity onPress={onPress} >
                <Image style={s.info_img} source={infoImg} />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={s.subtitle} >Créditos Álgebra Lineal App</Text>
        </View>
        </>
    );
};

export default NavHeaderCopyRight;