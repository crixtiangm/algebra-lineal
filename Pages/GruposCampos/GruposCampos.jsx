import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./GruposCampos.style";
import { Text, View } from "react-native";
import { NavHeader } from "../../components";
import { useRoute } from "@react-navigation/native";

const GruposCampos = ({onPress}) => {
    const { params } = useRoute();
    
    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root}>
                    <View style={s.nav_header} >
                        <NavHeader title={params.title} onPress={onPress}/>
                    </View>
                    <View style={s.body}>
                        <Text>Body</Text>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={s.footer}>
                <Text>TabBottomMenu</Text>
            </View>
        </>
    );
};

export default GruposCampos;