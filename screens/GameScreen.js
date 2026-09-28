import { useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
        const random_number = Math.floor(Math.random() * (max - min) + min);

        if (random_number === exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            return random_number
        }
    }

function GameScreen(props) {

    const initial_guess = generateRandomBetween(1,100, props.user_number)
    const [current_guess, setCurrentGuess] = useState(initial_guess)
    
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{current_guess}</NumberContainer>
      <View>
        <Text> Higher or lower? </Text>
        {/* +
        - */}
      </View>
      {/* <View> LOG ROUNDS </View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  
});
