import React, { useContext } from "react";
import { View, Text, Touchable } from 'react-native';
import { AntDesign,FontAwesome,Entypo,MaterialIcons } from '@expo/vector-icons';
import { style } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContextList } from "../../context/authcontext_list";

export default({state, navigation })=>{

    const {onOpen}= useContext<any>(AuthContextList)
   
    const tela =(screenName:String)=>{
        navigation.navigate(screenName)
    }
    
    return (  
       <View style={style.tabArea}>
        <TouchableOpacity style={style.tabItem} onPress={()=>tela("List")}>
        <View>
                    <AntDesign
                     name='bars'
                     size={30}  
                    />
                </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabItemMEIO} onPress={()=>onOpen()}>
        <View>
                    <Entypo 
                     name='plus'
                     size={30}  
                    />
                </View>
                <MaterialIcons 
                    name='edit'
                    size={30}
                 />
                <View>
                </View> 
        </TouchableOpacity>
        <TouchableOpacity style={style.tabItem} onPress={()=>tela("User")}>
        <AntDesign
                    AntDesign
                    name='user'
                    size={30}
                 />
            
        </TouchableOpacity>
       </View>
    )

}