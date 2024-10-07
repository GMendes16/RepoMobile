import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        
    },
    button:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius: 4,
        backgroundColor:'black',
        height:43,
        width:281,
        borderColor:'white',
        borderWidth:2,

    },
    ajuste:{
        flexDirection:'row',

    },
    text:{
        color:'#FFF',
        fontSize:18,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:110

    },
    addTaks:{
        width:43,
        height:43,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:9,
        borderRadius: 4,



    },
    deleteTaks:{
        width:43,
        height:43,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4,


    }
    

})      