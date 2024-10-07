import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { Style } from './style';

import bloco from '../../assets/bloco.1.png'
import horario from '../../assets/Horario.png'
import facebook from '../../assets/facebook1.png'
import google from '../../assets/google.png'
import { MaterialIcons, Zocial, Ionicons,Octicons } from '@expo/vector-icons'
import { themas, } from '../../global/themes';
import { useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button'; 
import {useNavigation, NavigationProp} from '@react-navigation/native'

export default function Login() {

    const navigation= useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [loading,setLoading] = useState('');

    async function getLogin() {
        try {
            if (!email || !password) {
                return Alert.alert('ATENÇÃO', 'informe os campos obrigatórios')
            }

            navigation.navigate("bottomRoutes")

            console.log('logado com sucesso!')

        } catch (error) {
            console.log('erro!!!')
        }
    }

    return (
        <View style={Style.container}>
            <View style={Style.boxtop}>
                <Image
                    source={horario}
                    style={Style.logoNew}
                    resizeMode='contain'
                /> 
                <Image
                    source={bloco}
                    style={Style.logo}
                    resizeMode='contain'
                />
                <Text style={Style.text}>Notes</Text>
            </View>
            <View style={Style.boxmid}>
                <Input 
                value={email}
                onChangeText={(setEmail)}
                title="ENDEREÇO DE EMAIL"
                IconRigth={MaterialIcons}
                IconRightName="email"
                />
                <Input 
                value={password}
                onChangeText={(setPassword)}
                title="SENHA"
                IconRigth={Octicons}
                IconRightName={showPassword?"eye-closed":"eye"}
                //secureTextEntry={showPassword}
                //onIconRigthPress={()=>setShowPassword(!showPassword)}

                />
                <Button onPress={()=>getLogin()}
                Icon={MaterialIcons}
                IconName={"arrow-forward-ios"}    
                />


            </View>
            <View style={Style.boxbottom}>
                <TouchableOpacity style={Style.button}>
                    <Image
                        source={google}
                        style={Style.logo1}
                        resizeMode='contain'
                    />
                    <Text style={Style.buttonBot}>
                        entrar com google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button}>
                    <Image
                        source={facebook}
                        style={Style.logo2}
                        resizeMode='contain'    
                    />
                    <Text style={Style.buttonBot1}>
                        entrar com facebook
                    </Text>
                </TouchableOpacity >
            </View>
        </View>
    );
}