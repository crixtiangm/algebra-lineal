import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    img: {
        width: 170,
        alignSelf: "center",
    },
    subtitle: {
        marginTop: -20,
        fontSize:25,
        color: "#ABABAB",
        textAlign: "center",
        paddingHorizontal: 15
    },
    back_img: {
        width: 40,
        height: 40,
    },
    home_img: {
        width: 40,
        height: 40,
    }
});