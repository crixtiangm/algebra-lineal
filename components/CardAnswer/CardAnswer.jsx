import { Text, TouchableOpacity, View } from "react-native";
import CheckBox from "expo-checkbox";
import { s } from "./CardAnswer.style";
import { MathText } from 'react-native-math-view';

const CardAnswer = ({answer, onPress}) => {
    // Destructuramos answer 
    const { option, statement, isChecked, correctAnswer } = answer;
    
    return(
        <TouchableOpacity style={s.card} onPress={() => onPress(answer)} >
            <View style={s.cardItem}>
                <CheckBox 
                    style={s.checkbox} 
                    value={isChecked}
                    color={isChecked && correctAnswer ? "#77DD77" : undefined}
                />
                <MathText
                    value={`${option} ${statement}`}
                    CellRendererComponent={<Text style={s.txtAnswer} />}
                />
            </View>
        </TouchableOpacity>
    );
};

export default CardAnswer;