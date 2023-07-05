import {Text, Image} from "react-native";
import { s } from "./Header.style";
import imgLogo from "../../assets/logo.png";

const Header = () => {
    return(
        <>
            <Image style={s.img} source={imgLogo} resizeMode="contain" ></Image>
            <Text style={s.subtitle} >Temas de álgebra lineal</Text>
        </>
    );
};

export default Header;