import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlightProps,ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "./style";
import { themas, } from '../../global/themes';   

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;

type Props = TouchableHighlightProps & {
    Icon?: IconComponent;
    IconName?: string;
}     

export function Button({ Icon, IconName,...rest }: Props) {
   
    return (
        <View style={style.yyy}>
            <View style={style.ççç}>
                {Icon && IconName && (
                    <TouchableOpacity   
                    style={style.button} 
                    {...rest}
                    >
                    <Icon name={IconName as any} size={20} color={themas.colors.gray} />

                    </TouchableOpacity>
                    
                )}
            </View>
        </View>
    )

}