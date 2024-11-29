import React, { useState } from 'react'
import {Text,View,Image, TouchableOpacity} from 'react-native'
import { style } from './style'
import { Input } from '../../components/Input'
import { MaterialIcons,Feather } from '@expo/vector-icons'
import bloco from '../../assets/bloco.1.png'
import { FlatList } from 'react-native-gesture-handler'
import { Ball } from '../../components/Ball'
import { Flag } from '../../components/Flag'
import { themas } from '../../global/themes'

type PropCard = {
    item:number,
    title:String,
    description:String,
    flag:'urgente'|'tranquilo'         
}


const data:Array<PropCard> = [
{
    item:0,
    title:'lição de casa',
    description : 'pagina de 1 a 10',
    flag : 'urgente',
},
{
    item:1,
    title:'passear com o cachorro',
    description : 'amanha',
    flag : 'urgente',
},
{
    item:2,
    title:'jogo de futebol',
    description : 'domingo',
    flag : 'urgente',
}
]
    
    
export default function List(){

    const renderCard =(item:PropCard)=>{
        return(
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                    <Ball color='green'/>    
                    <View>
                        <Text style={style.titleCard}>{item.title}</Text>
                        <Text style={style.descriptionCard}>{item.description}</Text>
                    </View>

                    </View>   
                    <Flag caption='Urgente' color={themas.colors.red}/> 
                </View>
            </TouchableOpacity>
        )

    }

    return (
      
        <View style={style.container}>
            <View style={style.header}>
                  <View style={style.boxInput}>
                  <Text style={style.greeting}>Bom dia, User. </Text>
                    <Input 
                    Iconleft={MaterialIcons}
                    IconleftName='search'
                    />
                  </View>
            </View> 
            
            <View style={style.boxlist}>
                <FlatList 
                data={data}
                style={{marginTop:40, paddingHorizontal:20}}
                keyExtractor={(item,index)=>item.item.toString()}
                renderItem={({item,index})=>{return(renderCard(item))}}
                
                />

            </View>  
        </View>

    )
}


   
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


        /* <Image
                    source={bloco}
                    style={style.logo}
                    resizeMode='contain'
                /> */

    
