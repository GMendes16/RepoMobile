import React from 'react'
import { createStackNavigator, StackView } from '@react-navigation/stack'
import Login from '../pages/login'
import bottomRoutes from './bottom.routes'

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{
                headerShown:false,
                cardStyle:{
                backgroundColor:'#FFF'

                }
                
            }}
        >
            <Stack.Screen 
            name={"Login"}
            component={Login}
    
        />
         <Stack.Screen 
            name={"bottomRoutes"}
            component={bottomRoutes}
            
            />

        </Stack.Navigator>
    )
    
}