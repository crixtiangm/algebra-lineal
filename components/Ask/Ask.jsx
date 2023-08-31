import { Text, View } from "react-native";
import { s } from "./Ask.style";
import { MathText } from 'react-native-math-view';

const Ask = ({ exerciseNum, statement }) => {
    return(
        <View style={s.container} >
            <MathText
                value={`${exerciseNum}.- ${statement}`}
                CellRendererComponent={<Text style={s.statement} />}
            />
        </View>
    );
};

export default Ask;