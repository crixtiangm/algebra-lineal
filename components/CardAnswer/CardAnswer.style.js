import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 15,
        padding: 10,
    },
    cardItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    checkbox: {
        width: 25,
        height: 25,
        margin: 8,
    },
    txtAnswer: {
        fontSize: 20,
        paddingHorizontal: 10,
    }
});