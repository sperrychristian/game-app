import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Icon from "@react-native-vector-icons/fontawesome-free-solid";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const random_number = Math.floor(Math.random() * (max - min) + min);

  if (random_number === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random_number;
  }
}

let min_boundary = 1;
let max_boundary = 100;

function GameScreen(props) {
  const initial_guess = generateRandomBetween(1, 100, props.user_number);
  const [current_guess, setCurrentGuess] = useState(initial_guess);
  const [guess_rounds, setGuessRounds] = useState([initial_guess])

  const guess_rounds_list_length = guess_rounds.length

  useEffect(() => {
    if (current_guess === props.user_number) {
      props.on_game_over(guess_rounds.length);
    }
  }, [current_guess, props.user_number, props.on_game_over]);

  useEffect(()=> {
    min_boundary=1
    max_boundary=100
  }, [])

  function nextGuessHandler(direction) {
    // handle incorrect input
    if (
      (direction === "lower" && current_guess < props.user_number) ||
      (direction === "higher" && current_guess > props.user_number)
    ) {
      return Alert.alert("Caught lying to me?", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    // direction => higher or lower based on press of plus or minus button
    if (direction === "lower") {
      max_boundary = current_guess;
    } else {
      min_boundary = current_guess + 1;
    }
    const new_random_number = generateRandomBetween(
      min_boundary,
      max_boundary,
      current_guess,
    );
    setCurrentGuess(new_random_number);
    setGuessRounds(previous_guess_rounds => [new_random_number, ...previous_guess_rounds])
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{current_guess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          {" "}
          Higher or lower?{" "}
        </InstructionText>
        <View style={styles.buttons_container}>
          <View style={styles.button_container}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Icon name="add" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.button_container}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Icon name="subtract" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}> 
        <FlatList
        
        data={guess_rounds} 
        renderItem={(itemData) => <GuessLogItem round_number={guess_rounds_list_length - itemData.index} guess={itemData.item}/>}
        keyExtractor={(item) => item.toString()}/>

      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttons_container: {
    flexDirection: "row",
  },
  button_container: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});
