import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardExercise.style";
import checkImg from "../../assets/check.png";



const CardExercise = ({ exercise, onLongPress}) => {
    return(
        <TouchableOpacity style={s.card} onLongPress={() => onLongPress(exercise)} >
            <Text style={[s.exercise, exercise.resolved && {textDecorationLine: "line-through"}]}>Ejercicio {exercise.id}</Text>
            {exercise.resolved && <Image style={s.img} source={checkImg} />}
        </TouchableOpacity>
    );
};

export default CardExercise;