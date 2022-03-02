import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        
    },
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center'
    }
})
export default styles