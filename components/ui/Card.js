import {View, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

function Card(props) {
    return(<View style={styles.card}>{props.children}</View>)
}

export default Card;

const styles = StyleSheet.create({
    card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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

})