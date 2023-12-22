import { StyleSheet } from "react-native";

export const s =  StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#6495ED",
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
    },
    checkbox: {
        backgroundColor: "white",
        width: 25,
        height: 25,
        margin: 8,
    },
    txtAnswer: {
        color: "white",
        fontSize: 20,
    }
});