import React from "react";
import { View } from 'react-native';
import { style } from "./style";


type Props = {
    color:String
   
}     
export function Ball({...rest}:Props){
    return (
        <View style={[style.ball,{borderColor:rest.color||'gray'}]}/>
    )

}