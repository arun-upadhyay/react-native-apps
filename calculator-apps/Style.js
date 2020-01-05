import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    displayText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    displayTextSecond: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    displayContainer: {
        flex: 2,
        backgroundColor: '#193441'
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },
    inputButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style;
