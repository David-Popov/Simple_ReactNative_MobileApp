import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
};

const IconButton = ({ icon, label, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.iconButton}>
            <MaterialIcons name={icon} />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonLabel: {
        color: "#fff",
        marginTop: 12,
    },
});

export default IconButton;
