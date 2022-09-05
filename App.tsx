
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "./components/Container";
import { StyleSheet } from "react-native";
export default function App(){
   return (
    <SafeAreaProvider>
       <NavigationContainer>
       
           <StatusBar  style='auto' backgroundColor="lightblue" />
      
               <Container />

        
       </NavigationContainer>
    </SafeAreaProvider>
   )
}
