import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#e5e3d8", "#e6cbba"]} style={styles.root_screen}>
      <ImageBackground
        source={require("./assets/images/[6] Light Leak, Heavy, Vertical.png")}
        resizeMode="cover"
        style={styles.root_screen}
        imageStyle={styles.background_image}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
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
