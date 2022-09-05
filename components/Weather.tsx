import React from 'react'
import { View , Text,Image , StyleSheet , Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from './Container'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
// export interface val {
//    name : any,
//    temp: any,
//    wind : string ,
//    precipitation  : string,
//    icon : string
// }
const Weather = ( {route, navigation}: NativeStackScreenProps<RootParamList, 'Capital'> ) => {

//const route = useRoute()
   //  console.log('weather' , route.params)
    
    const handleBack=()=>{
         navigation.popToTop()
    }
    
  return (
    <SafeAreaView>
    <View  style={styles.container}>
        <View>
        <Image style={styles.icon} source={{uri : (route.params?.icon)}} />
        </View>
          
            <View style={styles.text}>
            <Text style={styles.word}> place= {route.params?.name}</Text>
            <Text style={styles.word}>temp = {route.params?.temp} C</Text>
            <Text style={styles.word}>wind-speed={route.params?.wind}</Text>
            <Text style={styles.word}>Precipitation = {route.params?.precipitation}</Text>
            </View>
            <Image  style={styles.icon} source={{}} />
            <View style={styles.btn}>
                <Button title='Go Back' onPress={handleBack} />
            </View>
            </View>    
            </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    icon : {
        width : 160 ,
        height : 100,
        marginLeft : 60
    },
    text : {
        marginTop : 15,
        padding : 15,
        marginLeft : 25
    },
    word :{
       
        fontWeight : 'bold',
        fontSize : 20,
        margin : 10
    },
    container :{
        paddingTop : 100,
        marginTop : 50,
        marginLeft : 80
    },
    btn : {
        maxWidth : 100,
       
        
    }
})

export default Weather