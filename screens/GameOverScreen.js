import { useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, Animated } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen(props) {
  const shimmer_value = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmer_value, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(shimmer_value, {
          toValue: 0.5,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.root_container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Animated.Image
          style={[styles.image, { opacity: shimmer_value }]}
          source={require("../assets/images/treasure.png")}
        />
      </View>
      <Text style={styles.summaryTextStyling}>Your phone needed <Text style={styles.highlight}>{props.rounds_number}</Text> rounds to guess the number <Text style={styles.highlight}>{props.user_number}</Text></Text>
      <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  root_container: {
    flex: 1,
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    opacity: .95
  },
  summaryTextStyling: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },

  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});
