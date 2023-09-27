import { Text } from "react-native";
import { s } from "./Txt.style";

const Txt = ({ children }) => {
    return(
        <Text style={s.txt} >{ children }</Text>
    );
};

export default Txt;