import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Theory.style";
import { useRoute } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { NavHeaderTheory, TabBottomMenuTheory, TopicTheory } from "../../components";
import { useState } from "react";

const Theory = () => {
    const { params } = useRoute();

    // Hook para inicializar el tab en Theory
    const [selectedTabName, setSelectedTabName] = useState("Theory");

    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root} >
                    <View style={s.nav_header} >
                        <NavHeaderTheory title={params.title} />
                    </View>
                    <View style={s.body}>
                        <ScrollView>
                            <TopicTheory theory={params.theory}/>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer} >
                <TabBottomMenuTheory 
                    selectedTabName={selectedTabName} 
                    onPress={setSelectedTabName} 
                    exerciseNum={params.exerciseNum}
                />
            </View>
        </>
    );
};

export default Theory;