import {View, Text, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

function GuessLogItem(props) {
    return(
        <View style={styles.listitem}>
            <Text style={styles.itemText}>#{props.round_number}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listitem: {
        borderColor: Colors.border_bottom,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.main_background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'Black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .25,
        shadowRadius: 3
    },

    itemText: {
        fontFamily: 'open-sans'
    },
})