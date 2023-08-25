import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./Theory.style";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { NavHeaderTheory, TabBottomMenuTheory } from "../../components";
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