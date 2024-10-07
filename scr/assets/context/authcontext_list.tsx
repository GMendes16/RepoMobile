import React, { createContext, useContext } from "react";
import {Alert, TouchableHighlight } from 'react-native';
import { View, Text, TouchableOpacity, TouchableHighlightProps,ActivityIndicator } from 'react-native';


export const AuthContextList:any= createContext({});

export const AuthProviderList = (props:any) : any =>{

   const onOpen = ()=>{
    Alert.alert('ATENCAO', 'onde irei usar para criar a tarefa')
   }

    return(
        <AuthContextList.Provider value ={{onOpen}}>
            {props.children}
        </AuthContextList.Provider>

    )
}



export const useAuth = ()=> useContext(AuthContextList);  
