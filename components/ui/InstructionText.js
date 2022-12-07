import { Text, StyleSheet } from "react-native"

import Colors from "../../constants/colors"

// the style props implements style cascading, by merging with the existing style and adding another styling
// property by help of an arr -> style={[style1, style2,.. ]}

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "openSans",
    color: Colors.accent500,
    fontSize: 24,
  },
})
