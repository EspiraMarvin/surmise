import { View, Text, StyleSheet } from "react-native"
import Title from "../components/Title"

export default function GameScreen() {
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>+</Text>
        <Text>-</Text>
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    // justifyContent: "center",
    // alignItems: "center",
  },
})
