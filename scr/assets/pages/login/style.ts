import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',   
    },
    boxtop:{
        height:Dimensions.get('window').height/2,
        width:400,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:100
    },
    boxmid:{
        height:Dimensions.get('window').height/2.5,
        width:400,
        backgroundColor:'black',
        paddingHorizontal:30,
        paddingTop:70,
    },  
    boxbottom:{
        height:Dimensions.get('window').height/2,
        width:400,
        backgroundColor:'black',
        alignItems:'center',
        
    },
    logoNew:{
        height:100,
        width:350,
        marginTop:30,
        marginRight:18,

    },
    logo:{
        height:110,
        //width:100,
        //marginTop:10,

    },
    text:{
        fontWeight:'bold',
        marginTop:15,
        fontSize:28,
        color:themas.colors.gray,
    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        //marginTop:5,
    },
    boxInput:{
        width:'90%',
        height:40,
        borderWidth:2,
        borderRadius:40,
        marginTop:10,
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderColor:themas.colors.gray,

    },
    input:{
        width:'105%',
        height:40,
        marginLeft:18,
        color:themas.colors.gray

    },
    button:{
        width:200,
        height:40,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        backgroundColor:'black',
        borderRadius:40,
        borderWidth:2,
        borderColor:themas.colors.gray,
        marginTop:23,    
    },
    logo1:{
        height:110,
        width:35,
       // justifyContent:'center',

    },
    logo2:{
        height:110,
        width:130,
       // justifyContent:'center' 

    },
    buttonBot:{
        height:22,
        width:150,
        color:themas.colors.gray,
        
    },
    buttonBot1:{
        height:22,
        width:193,
        color:themas.colors.gray,

    },
    final:{
        height:100,
        width:140,
        paddingHorizontal:13,

    },
    xxx:{
        fontWeight:'bold',
        marginTop:15,
        fontSize:28,
        color:themas.colors.gray,

    },
    newBottom:{
        width:60,
        height:40,
        backgroundColor:'black',
        borderRadius:40,
        borderWidth:2,
        borderColor:themas.colors.gray,
        marginTop: 10,
       // marginLeft:1,
        // marginRight:100,
    },
    yyy:{ 
        alignItems:'center',
        justifyContent:'center',
        marginTop:24,
        marginRight:4,

    },
    ççç:{
        marginLeft:20,
        marginTop:7,
    }

})
