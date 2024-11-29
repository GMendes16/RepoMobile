import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import {Alert, Dimensions, Platform, StyleSheet, TouchableHighlight } from 'react-native';
import { View, Text, TouchableOpacity, TouchableHighlightProps,ActivityIndicator,KeyboardAvoidingView } from 'react-native';
import { Modalize } from "react-native-modalize";
import { style } from "../components/Input/style";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Input } from "../components/Input";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTime from "../components/CustomDateTime"; 


export const AuthContextList:any= createContext({});  

const flags = [
    { caption:'urgente', color:themas.colors.red},
    { caption:"opcional", color:themas.colors.blueLigth},

];

export const AuthProviderList = (props:any) : any =>{
    const modalizeRef = useRef<Modalize>(null);

    const [title,setTitle] = useState('');
    const [Description,setDescription] = useState('');
    const [selectedFlag,setSelectedFlag] = useState('urgente');
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [selectedTime,setSelectedTime] = useState(new Date());
    const [showDatePicker,setShowDatePicker] = useState(false);
    const [showTimePicker,setShowTimePicker] = useState(false); 


   const onOpen = ()=>{
    modalizeRef?.current?.open();
      }

    const onClose = ()=>{
        modalizeRef.current?.close();
    }


      useEffect(()=>{
        onOpen()
      },[])

      const renderFlags = () => {
        return(
            flags.map((item,index)=>(
                <TouchableOpacity key={index}>
                    <Flag 
                    caption={item.caption}
                    color={item.color}
                    selected 
                    />
                </TouchableOpacity>
            )))
      }
      const handleDateChange = (date) =>{
        setSelectedDate(date);
      }
      const handleTimeChange = (date) =>{
        setSelectedTime(date); 
      }
    
   const container = ()=>{
    return (
        <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === 'ios'?'padding':'height'}
        >
         
               <View style={styles.header}>
                <TouchableOpacity onPress={()=>onClose()}>
                    <MaterialIcons 
                    nome='close'
                    size={30}
                    />
                </TouchableOpacity>
                <View>
                <Text style={styles.title}>Criar tarefa!</Text>
                </View>
                <TouchableOpacity>
                    <AntDesign
                    nome='check'
                    size={30}
                    />
                </TouchableOpacity>

               </View>
                 <View style={styles.content}>
                    <Input 
                        title='Titulo:'
                        labelStyle={styles.label}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Input 
                        title='Description:'
                        labelStyle={styles.label}
                        height={100}
                        multiline
                        numberOfLines={5}
                        value={Description}
                        onChangeText={setDescription}
                        textAlignVertical="top"
                    />

                    <View style={{width:'40%'}}>
                       <View style={{flexDirection:'row',gap:10,width:'100%'}}>
                        <TouchableOpacity  onPress={()=>setShowDatePicker(true)} style={{width:200}}>
                        <Input 
                        title='Data Limite'
                        labelStyle={styles.label}
                        editable={false}
                        value={selectedDate.toLocaleDateString()}
                        onPress={()=>setShowDatePicker(true)}
                        />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={()=>setShowTimePicker(true)} style={{width:120}}>
                        <Input 
                        title='Hora Limite'
                        labelStyle={styles.label}
                        editable={false}
                        value={selectedTime.toLocaleTimeString()}
                        onPress={()=>setShowTimePicker(true)}
                        />
                         </TouchableOpacity>

                       </View>
                        <CustomDateTime 
                        onDateChange={handleDateChange}
                        setShow={setShowDatePicker}
                        show={showDatePicker}
                        type={'date'}
                        />
                        <CustomDateTime 
                        onDateChange={handleTimeChange}
                        setShow={setShowTimePicker}
                        show={showTimePicker}
                        type={'time'}
                        />
                    </View>
                    <View style={styles.containerFlag}>
                        <Text style={styles.label}>Flags:</Text>
                        <View style={styles.rowFlags}>
                            {renderFlags()}
                        </View>
                    </View>
                 </View>
           
           </KeyboardAvoidingView>
    )
   } 


    return(
        <AuthContextList.Provider value ={{onOpen}}>
            {props.children}
            <Modalize
            ref={modalizeRef}
            childrenStyle={{height:Dimensions.get('window').height/1.7}}
            adjustToContentHeight={true} 
           // modalHeight={Dimensions.get('window').height/1.3}
            >
            {container()}
            </Modalize>
        </AuthContextList.Provider>

    )
}
export const useAuth = ()=> useContext(AuthContextList);  

export const styles = StyleSheet.create({
    container:{
        width:'100%',

    },
    header:{
        width:'100%',
        height:40,
        paddingHorizontal:40,
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',

    },
    content:{
        width:'100%',
        paddingHorizontal:20,
        marginTop:30,
          
    },
    containerFlag:{
        width:'100%',
        padding:10, 
    },
    label:{
        fontWeight:'bold',
        color:'#000'
    },
    rowFlags:{
        flexDirection:'row',
        gap:10,
        marginTop:10,
 
    }
})
