import { Text, TouchableOpacity } from "react-native"
import { s } from "./CheckBoxAnswer.style"
import CheckBox from "expo-checkbox";

const CheckBoxAnswer = ({answer, onPress}) => {
    //Destructuramos answer
    const {option, isChecked, correctAnswer } = answer;
    return(
        <TouchableOpacity style={s.card} onPress={()=> onPress(answer)}>
            <Text style={s.txtAnswer}>{option}</Text>
            <CheckBox 
                style={s.checkbox} 
                value={isChecked}
                onValueChange={() => onPress(answer)}
                color={isChecked && correctAnswer ? "#77DD77" : undefined}
            />
        </TouchableOpacity>
    );
};

export default CheckBoxAnswer;