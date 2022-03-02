import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center',
        

    },
    modalView: {
        backgroundColor: colors.white,
        borderRadius: 4,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
       
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        
    },
    title: {
        color: 'black',
        fontSize: 16,
        alignItems: 'center'
    },
    body: {
        minHeight: 200,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 7
    },
    footerSeparator: {
        height: 0.5,
        backgroundColor: colors.grey
    },
    footerItems: {
        width: '100%',
        padding: 10,
    },
    footerText: {
        fontSize: 12,
        color: 'black'
    },
    termsView: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: colors.grey,
      },
})
export default styles