import { View, Text, Pressable, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export default function PrimaryButton({ children, onPressHandler, style }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, style, styles.pressedItem]
            : [styles.buttonInnerContainer, style]
        }
        onPress={onPressHandler}
        android_ripple={{ color: Colors.primary400 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "openSansBold",
  },
  pressedItem: {
    opacity: 0.75,
  },
})
