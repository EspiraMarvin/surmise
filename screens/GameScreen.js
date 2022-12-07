import { useState, useEffect } from "react"
import {
  View,
  FlatList,
  useWindowDimensions,
  StyleSheet,
  Alert,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"

import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import GuessLogItem from "../components/game/GuessLogItem"

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
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (Number(currentGuess) === Number(userNumber)) {
      onGameOver(guessRounds.length)
      // reset the min and max boundary to pick random no.s btwn (1 and 100)  after the game is over.
      minBoundary = 1
      maxBoundary = 100
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
    setCurrentGuess(newRndNumber)
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundListLength = guessRounds.length

  const { width, height } = useWindowDimensions()

  const marginTopDistance = height < 420 ? 20 : 60

  let content = (
    <>
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
    </>
  )

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPressHandler={nextGuessHandler.bind(this, "lower")}
              >
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>

            <NumberContainer>{currentGuess}</NumberContainer>

            <View style={styles.buttonContainer}>
              <PrimaryButton onPressHandler={() => nextGuessHandler("greater")}>
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </>
    )
  }

  return (
    <View
      style={[styles.gameScreenContainer, { marginTop: marginTopDistance }]}
    >
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* rounds log */}
        {guessRounds.length > 0 && (
          <FlatList
            data={guessRounds}
            alwaysBounceVertical={false}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(guessRound) => guessRound}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
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
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})
