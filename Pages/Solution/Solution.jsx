import { Text, View } from "react-native";
import { s } from "./Solution.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ExerciseSolution, NavHeaderSolution } from "../../components";
import { useRoute } from "@react-navigation/native";

const Solution = () => {
    const { params } = useRoute();
    console.log(params)
    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeaderSolution title={params._topic[0].title} />
                    </View>
                    <View style={s.body} >
                        <ExerciseSolution solution={params.solution} />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
};

export default Solution;