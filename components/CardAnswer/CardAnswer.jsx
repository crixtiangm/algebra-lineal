import { Text, TouchableOpacity, View } from "react-native";
import CheckBox from "expo-checkbox";
import { s } from "./CardAnswer.style";

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
                <Text style={s.txtAnswer} >{`${option} ${statement}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardAnswer;