import { ScrollView, View } from "react-native";
import { s } from "./CopyRight.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavHeaderCopyRight, Txt } from "../../components";

const CopyRight = ({onPressInfo}) => {

    const renderCredits = () => (
        <>
            <Txt>Tesis por apoyo a la docencia</Txt>
            <Txt/>
            <Txt>Diseño y Programación</Txt>
            <Txt>Cristian Rodolfo Gómez Mares</Txt>
            <Txt/>
            <Txt>Directora del trabajo</Txt>
            <Txt>Rosalba Rodríguez Chávez</Txt>
            <Txt/>
            <Txt>Ejercicios y resolución</Txt>
            <Txt>Rosalba Rodríguez Chávez</Txt>
            <Txt/>
            <Txt>Revisión</Txt>
            <Txt>Alicia Pineda Ramírez</Txt>
            <Txt>Aldo Jiménez Arteaga</Txt>
            <Txt/>
            <Txt>Coordinación</Txt>
            <Txt>María del Rocío Ávila Núñez</Txt>
            <Txt/>
            <Txt>2024</Txt>
        </>
    );

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
                        <ScrollView>{renderCredits()}</ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
};

export default CopyRight;