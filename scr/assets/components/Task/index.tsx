import React, {Fragment} from "react";
import { View, Text, TouchableOpacity, TouchableHighlightProps,ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { style } from "./style";
import { themas, } from '../../global/themes';   

type IconComponent = React.ComponentType<React.ComponentProps<typeof Feather>>;

type Props = {
    
    Icon?: IconComponent;
    Icon1?: IconComponent;
    IconName?: string;
    IconName1?: string;
    title?: string,
    status: boolean;
    onCheck?: () => void;
    onRemove?: () => void;
    
}  

export function Task({ title,Icon,Icon1, IconName,IconName1,onCheck,onRemove,status,...rest }: Props) {
   
    return (
        <View style={style.container}>
            <View style={style.ajuste}>
            {Icon && IconName && (
                    <TouchableOpacity onPress={onCheck} 
                    style={style.addTaks} 
                    {...rest}
                    >
                    <Icon name={IconName as any} size={20} color={themas.colors.gray} />
                    </TouchableOpacity>

                )}
                   <TouchableOpacity   
                    style={style.button} 
                    {...rest}
                    >
                  <Text style={style.text}>{title}</Text>
                    </TouchableOpacity>
                    
            {Icon1 && IconName1 && (
                    <TouchableOpacity onPress={onRemove} 
                    style={style.deleteTaks} 
                    {...rest}
                    >
                    <Icon1 name={IconName1 as any} size={20} color={themas.colors.gray}/>

                    </TouchableOpacity>
                )}  

            </View>
        </View>
    

    
    )

}