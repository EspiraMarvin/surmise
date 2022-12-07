import { View, StyleSheet } from "react-native"

import Colors from "../../constants/colors"

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, // add shadow in r.native (android)
    shadowColor: "black", // add shadow in r.native (ios) - shadow offset,color, opacity, radius
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
