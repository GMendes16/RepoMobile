import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput,StyleProp, TextInputProps, TouchableOpacity, TextStyle } from 'react-native';
import { style } from "./style";
import { themas } from "../../global/themes";

import { MaterialIcons, FontAwesome, Octicons, Zocial } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Zocial>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    Iconleft?: IconComponent,
    IconRigth?: IconComponent,
    IconleftName?: string,
    IconRightName?: string,
    title?: string,
    onIconleftPress?: () => void,
    onIconRigthPress?: () => void,
    height?:number,
    labelStyle?:StyleProp<TextStyle> 
}

export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {

    const { Iconleft, IconRigth, IconleftName, IconRightName, onIconleftPress, title, onIconRigthPress,labelStyle,height, ...rest } = props;
        
    const calculateSizeWidth = () =>{
        if(Iconleft && IconRigth){
            return '80% '
        }else if(Iconleft || IconRigth){
            return '90%'
        }else
            return '100%'
    }

    return (
        <Fragment>
            <Text style={[style.titleInput,labelStyle]}>{title}</Text>
            <View style={[style.boxInput,{height:height||40,padding:10}]}> 
                {Iconleft && IconleftName && (
                    <TouchableOpacity onPress={onIconleftPress}>
                        <Iconleft name={IconleftName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                 <TextInput
                    style={[style.input,{width:calculateSizeWidth(),height:'100%'}
                    ]}
                    {...rest}
               />
                
                {IconRigth && IconRightName && (
                    <TouchableOpacity onPress={onIconRigthPress}>
                        <IconRigth name={IconRightName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    );
});
