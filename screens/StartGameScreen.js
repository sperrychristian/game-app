import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter A Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={entered_number}
        />

        <View style={styles.buttons_container}>
          <View style={styles.button_container}>
            <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
          </View>
          <View style={styles.button_container}>
            <PrimaryButton onPress={confirmInputHandler}>
              {" "}
              Confirm{" "}
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 80,
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
