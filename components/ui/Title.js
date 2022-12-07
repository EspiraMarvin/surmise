import { Text, StyleSheet, Platform } from "react-native"

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "openSansBold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 1 : 0,
    // another way of writing platform specific code
    borderBottomWidth: Platform.select({ ios: 0, android: 1 }),
    borderColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "80%",
    width: 300,
    // minWidth: "60%",
  },
})
