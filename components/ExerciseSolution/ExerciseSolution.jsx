import { Text, View } from "react-native";
import { s } from "./ExerciseSolution.style";

const ExerciseSolution = ({ solution }) => {
    return(
        <View style={ s.container }>
            <Text style={ s.statement } >{ solution }</Text>
        </View>
    );
};

export default ExerciseSolution;