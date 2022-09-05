
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React  from 'react'
import FormInput from './FormInput';

import Weather from './Weather';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';

export type RootParamList ={
    InputForm : any;
     Details : any;
    Capital : any
    }

const Stack = createNativeStackNavigator<RootParamList>()

export default function Container() {
   
  return (
               <Stack.Navigator initialRouteName='InputForm' 
                          screenOptions={{
                            headerStyle : {
                              backgroundColor : 'lightblue',
                               
                            },
                            headerTintColor : 'black'
                            
                          }}>
                      <Stack.Screen name='InputForm' component={FormInput}  options={{title : 'Weather-App'}}  />
                      <Stack.Screen name='Details'  component={Details} options={{title : 'country details'}} />
                       <Stack.Screen  name ='Capital' component={Weather} options={{title : 'Capital weather'}} />
               </Stack.Navigator>
          
       
       
    
   
  );
}

const styles = StyleSheet.create({
    header : {
       textAlign : 'justify'
    }
})

