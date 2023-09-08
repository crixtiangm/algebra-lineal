import { ScrollView, Text, View } from "react-native";
import { s } from "./Solution.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ExerciseSolution, NavHeaderSolution } from "../../components";
import { useRoute } from "@react-navigation/native";

const Solution = () => {
    const { params } = useRoute();
    
    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeaderSolution title={params._topic[0].title} />
                    </View>
                    <View style={s.body} >
                        <ScrollView >
                            <ExerciseSolution solution={params.solution} />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
};

export default Solution;