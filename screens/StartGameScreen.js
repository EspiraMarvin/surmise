import { useState } from "react"
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

import PrimaryButton from "../components/ui/PrimaryButton"
import InstructionText from "../components/ui/InstructionText"
import Card from "../components/ui/Card"
import Title from "../components/ui/Title"
import Colors from "../constants/colors.ios"

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

  // dimensions hook
  const { width, height } = useWindowDimensions()
  // console.log("height", height)
  const marginTopDistance = height < 420 ? 20 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

// const deviceHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
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
