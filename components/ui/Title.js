import { Text, StyleSheet } from "react-native"


export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "openSansBold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    width: 300,
    maxWidth: "80%",
    // minWidth: "",
  },
})
