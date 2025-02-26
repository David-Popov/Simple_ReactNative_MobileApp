import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

type Props = {
    onPress: () => void;
};

const CirlceButton = ({ onPress }: Props) => {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable onPress={onPress} style={styles.circleButton}>
                <MaterialIcons name="add" size={30} color="#25292e" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: "#ffd33d",
        borderRadius: 42,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#fff",
    },
});

export default CirlceButton;
