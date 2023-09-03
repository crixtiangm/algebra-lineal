import { Text, View, LogBox } from "react-native";
import { s } from "./ExerciseSolution.style";
import { MathText } from 'react-native-math-view';
import { useEffect } from "react";

const ExerciseSolution = ({ solution }) => {

    /*useEffect(() => {
        LogBox.ignoreAllLogs(true);
     }, []);*/

    return(
        <View style={ s.container }>
            <MathText
                value={`${ solution }`}
                CellRendererComponent={<Text style={s.statement} />}
            />
        </View>
    );
};

export default ExerciseSolution;