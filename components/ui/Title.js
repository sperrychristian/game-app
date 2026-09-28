import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.title_color,
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
    margin: 12,
  },
});
