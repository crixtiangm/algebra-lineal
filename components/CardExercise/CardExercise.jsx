import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardExercise.style";
import checkImg from "../../assets/check.png";
import { useNavigation } from "@react-navigation/native";



const CardExercise = ({ exercise, onLongPress}) => {
    const nav = useNavigation();
    
    return(
        <TouchableOpacity style={s.card} onPress={() => nav.navigate("Question", {...exercise}) } onLongPress={() => onLongPress(exercise)} >
            <Text style={[s.exercise, exercise.resolved && {textDecorationLine: "line-through"}]}>Ejercicio {exercise.exercise}</Text>
            {exercise.resolved && <Image style={s.img} source={checkImg} />}
        </TouchableOpacity>
    );
};

export default CardExercise;