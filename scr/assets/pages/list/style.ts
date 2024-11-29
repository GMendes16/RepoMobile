import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
       // backgroundColor:'gray',   

    },
    header:{       
        width:'100%',
        height:Dimensions.get('window').height/5,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        

    },
    greeting:{
        fontSize:17,
        color:'white',
        marginTop:20,
        marginLeft:5,

    },
    logo:{
        height:110,
     
    },
    boxInput:{
        width:'70%',
        marginRight:70,

    },
    boxlist:{
        flex:1,
        width:'100%',
        
    },
    card:{
        width:'100%',
        height:60,
        backgroundColor:'white',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:'black'
    },    
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        gap:15,

    }, 
    titleCard:{
        fontSize:15,
        fontWeight:'bold',

    },
    descriptionCard:{
        color:themas.colors.white,

    }    

})      
