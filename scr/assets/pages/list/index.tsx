import React, { useState } from 'react'
import {Text,View,Image} from 'react-native'
import { style } from './style'
import { Input } from '../../components/input'
import { MaterialIcons,Feather } from '@expo/vector-icons'
import bloco from '../../assets/bloco.1.png'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Task } from '../../components/Task'
    

export default function List(){

    const [taks, setTask] = useState<{description: string; check: boolean}[]>([]);
    const [task, setTaskText] =useState("");

    <FlatList
    data={task}
    keyExtractor={(item,index) => index.toString()}
    renderItem={
        ({item})=>(
            <Task />
        )
    }
    ListEmptyComponent={()=>(
        <View>
            <Text>
                Sem cadastros!
            </Text>
        </View>
    )}
    
    />


    return(
        <>
        <Task
          title="Tarefa"
          Icon={Feather}
          IconName="check-square"
          Icon1={Feather}
          IconName1="trash-2"
        />
        {/* <Task
          title="Tarefa 2"
          Icon={Feather}
          IconName="check-square"
          Icon1={Feather}
          IconName1="trash-2"
        /> */}
      </>
      

    )
        // <View style={style.container}> 
        // <View style ={style.ajuste}>
        // <TouchableOpacity style={style.addTaks}>
        // <Feather
        //              name='square'
        //              size={22} 
        //              color={'white'} 
        //             /> 
        // </TouchableOpacity>
        //         <TouchableOpacity style={style.button}>
        //             <Text style={style.text}>
        //                 Tarefa
        //             </Text>
        //         </TouchableOpacity> 
        // <TouchableOpacity style={style.deleteTaks}>
        // <Feather
        //              name='trash-2'
        //              size={22} 
        //              color={'white'} 
        //             />
        // </TouchableOpacity>
        // </View>
             
        // </View>

    
}