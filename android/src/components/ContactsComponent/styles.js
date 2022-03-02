import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

const styles = StyleSheet.create({
    floatingActionButton: {
        position: 'absolute',
        width: 55,
        height: 55,
        backgroundColor: colors.danger,
        bottom: 12,
        right: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontSize: 17,
        color: 'black',
        paddingLeft: 3
    },
    phoneNumber: {
        color: colors.grey,
        fontSize: 15,
        opacity: 0.6,
        paddingVertical: 5
    }


})

export default styles