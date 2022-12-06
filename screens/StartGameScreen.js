import { useState } from "react"
import { TextInput, View, StyleSheet, Alert } from "react-native"

import PrimaryButton from "../components/PrimaryButton"
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
      // alert
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
    console.log("valid nu", number)
    onPickNumber(number)
  }

  return (
    <View style={styles.inputContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
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
  numberInput: {
    height: 50,
    width: 70,
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
  },
  buttonContainer: {
    flex: 1,
  },
})
