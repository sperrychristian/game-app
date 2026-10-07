import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/colors'

function InstructionText(props) {
    return(<Text style={[styles.instructionText]}>{props.children}</Text>)
}
export default InstructionText

const styles=StyleSheet.create({
    instructionText: {
    fontFamily: 'open-sans',
    color: Colors.number_input,
    fontSize: 24,
  },
})