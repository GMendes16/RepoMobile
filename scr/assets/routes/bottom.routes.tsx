import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import Custombarra from '../components/custombarra';
import { AuthProviderList } from '../context/authcontext_list';

const Tab = createBottomTabNavigator();
     
export default function BottomRoutes(){
  return (
    <AuthProviderList>
      
    <Tab.Navigator
        screenOptions={{
            headerShown:true
        }}
        tabBar={pros=><Custombarra {...pros}/>}

    > 
        
      <Tab.Screen 
      name="List" 
      component={List} 
      />
      <Tab.Screen 
      name="User" 
      component={User} 
      />
    </Tab.Navigator>

    </AuthProviderList>
     
  );
}