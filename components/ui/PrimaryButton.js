import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton(props) {
  // function to handle button presses in general
  function pressHandler() {
    console.log("pressed");
  }

  return (
    <View style={styles.button_outer_container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.button_inner_container, styles.pressed]
            : styles.button_inner_container
        }
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button_outer_container: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden", // keeps everything contained in this container if there is overflow
  },
  button_inner_container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2, // android only!
  },
  buttonText: {
    color: Colors.primary600,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
