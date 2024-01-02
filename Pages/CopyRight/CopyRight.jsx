import { View } from "react-native";
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
                        <Txt>Coordinación de Matemáticas</Txt>
                        <Txt>Rocío Ávila Núñes</Txt>
                        <Txt>Ejercicios</Txt>
                        <Txt>Rosalba Rodríguez Chávez</Txt>
                        <Txt>Revisión</Txt>
                        <Txt>Aldo Jiménez Arteaga</Txt>
                        <Txt>Teoría tema 4 y 5</Txt>
                        <Txt>Autora M.F. Alicia Pineda Ramírez</Txt>
                        <Txt>Revisora: M.F. Alicia Pineda Ramírez</Txt>
                        <Txt>Diseño y programación de aplicación</Txt>
                        <Txt>Cristian Rodolfo Gómez Mares</Txt>
                        <Txt>Captura de ejercicios, solución y teoría</Txt>
                        <Txt>Cristian Rodolfo Gómez Mares</Txt>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
};

export default CopyRight;