import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync(); // keeping splash screen visible until we hide it 
export default function App() {
  const [user_number, setUserNumber] = useState();
  const [game_is_over, setGameIsOver] = useState(true);
  const [guessed_rounds, setGuessedRounds] = useState(0);


  const [fonts_loaded, fonts_error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })

  useEffect(()=> {
    if (fonts_loaded || fonts_error) {
      SplashScreen.hide
    }
  }, [fonts_error, fonts_loaded])

  function pickedNumberHandler(picked_number) {
    setUserNumber(picked_number);
    setGameIsOver(false)
  }

  function gameOverHandler(number_of_rounds){
    setGameIsOver(true)
    setGuessedRounds(number_of_rounds)
  }

  function startNewGameHandler(){
    setGuessedRounds(0)
    setUserNumber(null)
  }
  // determine which screen to show 
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(user_number) {
    screen = <GameScreen user_number={user_number} on_game_over={gameOverHandler}/>
  }

  if (game_is_over && user_number) {
    screen = <GameOverScreen user_number={user_number} rounds_number=
    {guessed_rounds} onStartNewGame={startNewGameHandler}/>
  }

  return (
  <SafeAreaProvider>
    <LinearGradient colors={[Colors.gradient_color_1, Colors.gradient_color_2]} style={styles.root_screen}>
      <ImageBackground
        source={require("./assets/images/[6] Light Leak, Heavy, Vertical.png")}
        resizeMode="cover"
        style={styles.root_screen}
        imageStyle={styles.background_image}
      >
       <SafeAreaView style={styles.root_screen}>{screen}</SafeAreaView> 
      </ImageBackground>
    </LinearGradient>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root_screen: {
    flex: 1,
  },
  background_image: {
    opacity: 0.2,
  },
});
