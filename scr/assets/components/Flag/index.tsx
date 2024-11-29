import React from "react";
import { View, Text ,TouchableOpacity} from 'react-native';
import { style } from "./style";

type Props = {
    color:String,
    caption:String,
    selected:Boolean,
}    
export function Flag({...rest}:Props){
    return (
        <TouchableOpacity
         style={[
            style.container,
            {backgroundColor:rest?.color},
            rest?.selected && {borderWidth:1}
        
        ]}
            
         >
         <Text style={{color:'#FFF'}}>{rest.caption}</Text>
        </TouchableOpacity>
        )

}