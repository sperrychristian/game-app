import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [user_number, setUserNumber] = useState();

  function pickedNumberHandler(picked_number) {
    setUserNumber(picked_number);
  }

  // determine which screen to show 
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(user_number) {
    screen = <GameScreen />
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
