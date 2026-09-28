import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [entered_number, setEnteredNumber] = useState("");

  function numberInputHandler(entered_text) {
    setEnteredNumber(entered_text);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    let chosen_number = parseInt(entered_number);

    if (isNaN(chosen_number) || chosen_number < 1 || chosen_number > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 & 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }],
      );
      return;
    }
    console.log(`${chosen_number} is a valid number`);
    props.onPickNumber(chosen_number);
  }

  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardAppearance="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={entered_number}
      />

      <View style={styles.buttons_container}>
        <View style={styles.button_container}>
          <PrimaryButton> Reset </PrimaryButton>
        </View>
        <View style={styles.button_container}>
          <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  input_container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.main_background,
    borderRadius: 8,
    elevation: 4, // android only box shadow
    shadowColor: "black", // ios specific shadow
    shadowOffset: { width: 1, height: 10 }, // ios specific shadow
    shadowRadius: 6, // ios specific - blur radius of a shadow
    shadowOpacity: 0.15, // ios specific shadow
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: Colors.border_bottom,
    borderBottomWidth: 2,
    color: Colors.number_input,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttons_container: {
    flexDirection: "row",
  },
  button_container: {
    flex: 1,
  },
});
