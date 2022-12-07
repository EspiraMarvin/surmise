import { View, Text, StyleSheet } from "react-native"

import Card from "../components/ui/Card"

export default function GameOverScreen() {
  return (
    <View styles={styles.gameOverScreenContainer}>
      <Text>GameOverScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gameOverScreenContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
})
