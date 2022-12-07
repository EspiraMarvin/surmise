import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"

import Colors from "./constants/colors"

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler = () => {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
