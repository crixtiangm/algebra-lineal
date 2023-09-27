import { Text, View } from "react-native";
import { s } from "./CopyRight.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavHeaderCopyRight, Txt } from "../../components";

const CopyRight = ({onPressInfo}) => {

    return(
        <>
            <SafeAreaProvider>
                <SafeAreaView style={s.root}>
                    <View style={s.nav_HeaderCopyRight} >
                        <NavHeaderCopyRight
                            onPress={onPressInfo}
                        />
                    </View>
                    <View style={s.body}>
                        <Txt>Ejercicios</Txt>
                        <Txt>Rosalba Rodríguez Chávez</Txt>
                        <Txt>Coordinación</Txt>
                        <Txt>María del Rocío Avila Núñez</Txt>
                        <Txt>Revisión</Txt>
                        <Txt>Aldo Jiménez Arteaga</Txt>
                        <Txt>Diseño y programación de App</Txt>
                        <Txt>Cristian Rodolfo Gómez Mares</Txt>
                        <Txt>Captura de ejercicios</Txt>
                        <Txt>Cristian Rodolfo Gómez Mares</Txt>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
};

export default CopyRight;