import { Text, StyleSheet, Dimensions } from "react-native"

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  title: {
    fontFamily: "openSansBold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "80%",
    width: 300,
    // minWidth: "60%",
  },
})
