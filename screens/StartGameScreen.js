import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardAppearance="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.buttons_container}>
        <View style={styles.button_container}>
          <PrimaryButton> Reset </PrimaryButton>
        </View>
        <View style={styles.button_container}>
          <PrimaryButton> Confirm </PrimaryButton>
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
    backgroundColor: "#b6ad89",
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
    borderBottomColor: "#eec540",
    borderBottomWidth: 2,
    color: "#392e0c",
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
