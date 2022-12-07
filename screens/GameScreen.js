import { useState, useEffect, useMemo } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"

// generate random no. btwn 1 & 99
function generateRandomBetween(min, max, exclude) {
  // exclude, makes the app not choose the number choose by the user immediately
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (Number(currentGuess) === Number(userNumber)) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = (direction) => {
    // direction => lower/greater
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie! 😂", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ])
      return
    }

    if (direction === "lower") {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    // console.log(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPressHandler={nextGuessHandler.bind(this, "lower")}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressHandler={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
    marginTop: 70,
  },
  instructionText: {
    marginBottom: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
})
