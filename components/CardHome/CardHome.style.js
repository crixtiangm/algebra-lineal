import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: 115,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
    topic: {
        fontSize: 25,
        textAlign: "center" 
    },
    imgTopic: {
        height: 70,
        width: 70,
        borderRadius: 13
    },
    img: {
        height: 25,
        width: 25,
    }
});