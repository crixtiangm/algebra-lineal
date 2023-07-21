import { Text, View } from "react-native";
import { s } from "./Ask.style";

const Ask = ({ exerciseNum, statement }) => {
    return(
        <View style={s.container} >
            <Text style={s.statement}  >{`${exerciseNum}.- ${statement}`}</Text>
        </View>
    );
};

export default Ask;