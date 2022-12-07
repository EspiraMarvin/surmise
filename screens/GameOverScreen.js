import { View, Image, StyleSheet, Text } from "react-native"

import Title from "../components/ui/Title"
import Colors from "../constants/colors"

export default function GameOverScreen() {
  const renderRandomImage = () => {
    const Images = [
      { image: require("../assets/images/success.png") },
      { image: require("../assets/images/success2.png") },
      { image: require("../assets/images/success3.png") },
    ]

    // generate random no.s (idx) between 0 and 3
    let max = 2
    let min = 0
    const randomImageIndex = Math.floor(Math.random() * (max - min + 1) + min)
    return Images[randomImageIndex].image
  }

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER !!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={renderRandomImage()} />
        {/* <Image style={styles.image} source={require('../assets/images/success.png')} /> */}
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "openSans",
    fontSize: 20,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "openSansBold",
    color: Colors.primary600,
  },
})
