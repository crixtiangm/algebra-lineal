import { Text, View } from "react-native";
import { s } from "./ExerciseSolution.style";
import { MathText } from 'react-native-math-view';

const ExerciseSolution = ({ solution }) => {
    return(
        <View style={ s.container }>
            <MathText
                value={`${ solution }`}
                CellRendererComponent={<Text style={s.statement} />}
            />
            {/*<Text style={ s.statement } >{ solution }</Text>*/}
        </View>
    );
};

export default ExerciseSolution;