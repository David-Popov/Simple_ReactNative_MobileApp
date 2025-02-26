import { Text, View, StyleSheet } from "react-native";

export default function AboutScreeb() {
    return (
        <View style={styles.contrainer}>
            <Text style={styles.text}>Welcome to about page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: "#24292e",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
    },
});
