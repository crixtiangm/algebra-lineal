import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./NavHeaderSolution.style";
import imgLogo from "../../assets/logo.png";
import imgHome from "../../assets/home.png";
import imgBack from "../../assets/arrow_back.png";
import { useNavigation } from "@react-navigation/native";

const NavHeaderSolution = ({title}) => {
    const nav = useNavigation();

    return(
        <>
            <View style={s.container}>
                <TouchableOpacity onPress={ () => nav.goBack() }>
                    <Image style={s.back_img} source={imgBack} />
                </TouchableOpacity>
                <View>
                    <Image style={s.img} source={imgLogo} resizeMode="contain" />
                </View>
                <TouchableOpacity onPress={ () => nav.navigate("Home") } >
                    <Image style={s.home_img} source={imgHome} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={s.subtitle} >{title}</Text>
            </View>
        </>
    )
}

export default NavHeaderSolution;