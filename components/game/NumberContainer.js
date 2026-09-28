import {View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer(props) {
    return(
        <View style={styles.container_styling}>
            <Text style={styles.number_text}>{props.children}</Text>
        </View>

    )
}

export default NumberContainer
const styles = StyleSheet.create(
    {
        container_styling: {
            borderWidth: 4,
            borderColor: Colors.primary600,
            padding: 24,
            margin: 24,
            borderRadius: 20,
            borderWidth: 5,
            alignItems: 'center',
            justifyContent: 'center'
        },
        number_text: {
            color: Colors.number_input,
            fontSize: 36,
            fontWeight: 'bold'
        }
    }
)