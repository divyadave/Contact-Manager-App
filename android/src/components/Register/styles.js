import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";


const styles = StyleSheet.create({
  
   logoImaage: {
       width: 160,
       height: 160,
       marginTop: 50,
       alignSelf: 'center'
   },
   title: {
       fontSize: 21,
       textAlign: 'center',
       paddingTop: 20,
       fontWeight: '500',
       color: 'black'
   },
   subtitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
    color: 'black'
},
form: {
    paddingTop: 20
},
createSection: {
    flexDirection: 'row',
    marginTop: 10
},
linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16

},
infoText: {
    fontSize: 17,
    color: 'black'
}
   
})
export default styles;