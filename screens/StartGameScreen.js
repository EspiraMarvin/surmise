import { useState } from "react"
import { TextInput, View, StyleSheet, Alert, Text } from "react-native"

import PrimaryButton from "../components/ui/PrimaryButton"
import InstructionText from "../components/ui/InstructionText"
import Card from "../components/ui/Card"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"

export default function StartGameScreen({ onPickNumber }) {
  const [number, setNumber] = useState("")

  const numberInputHandler = (number) => {
    setNumber(number)
  }

  const resetInputHandler = () => {
    setNumber("")
  }

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(number)
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      )
      return
    }
    onPickNumber(number)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressHandler={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressHandler={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  buttonContainer: {
    flex: 1,
  },
})
