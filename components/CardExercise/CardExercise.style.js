import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: "#6495ED",
        width: "90%",
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
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
    },
    exercise: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
    },
    imgExercise: {
        width: 65,
        height: 65,
        borderRadius: 10,
    },
    img: {
        width: 25,
        height: 25,
    }
})