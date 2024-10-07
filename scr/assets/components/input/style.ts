import { StyleSheet } from "react-native";
import { Style } from "../../pages/login/style";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:2,
        borderRadius:40,
        marginTop:8,
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderColor:themas.colors.gray,
    },
    input:{
        width:'105%',
        height:40,
        marginLeft:14,
        color:themas.colors.gray

    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        //marginTop:5,
    },
    Icon:{
        width:'100%',
    }
})