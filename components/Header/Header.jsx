import {Text, Image, View, TouchableOpacity} from "react-native";
import { s } from "./Header.style";
import imgLogo from "../../assets/logo.png";
import copyRight from "../../assets/copyright.png";
import infoImg from "../../assets/info.png";
import { useNavigation } from "@react-navigation/native";

const Header = ({ onPress }) => {
    const nav = useNavigation(); 

    return(
        <>
            <View style={s.container}>
                <TouchableOpacity onPress={() => nav.navigate("CopyRight")}>
                    <Image style={s.copyRight_img} source={copyRight}/>
                </TouchableOpacity>
                <View>
                    <Image style={s.img} source={imgLogo} resizeMode="contain" />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <Image style={s.info_img} source={infoImg} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={s.subtitle} >Temas de álgebra lineal</Text>
            </View>
        </>
    );
};

export default Header;